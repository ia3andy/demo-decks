# Quarkus LangChain4j Workshop - Helper Cheat Sheet

Quick reference for assisting during the workshop. Covers Section 1 (steps 1-4) and Section 2 (steps 1-4).

---

## Prerequisites / Common Issues

| Issue | Fix |
|-------|-----|
| `SRCFG00011: Could not expand value OPENAI_API_KEY` | `export OPENAI_API_KEY=sk-...` before running |
| `Permission denied: ./mvnw` | `chmod +x mvnw` |
| Config changes not reflected | **Refresh the browser page** (WebSocket stays connected) |
| Port already in use | Stop previous step with `Ctrl+C` before starting next |
| Need pgvector image | `docker pull pgvector/pgvector:pg17` |

**Run command:** `./mvnw quarkus:dev` then open `http://localhost:8080`

**Dev UI:** `http://localhost:8080/q/dev/`

---

## Section 1: AI-Infused App (Steps 1-4)

The scenario: build a customer support chatbot for "Miles of Smiles" car rental company.

### Step 1: Introduction to Quarkus LangChain4j

**Goal:** Wire up a basic chatbot with memory via WebSocket.

**Two files to create/understand:**

```java
// CustomerSupportAgent.java
@SessionScoped                    // memory tied to WebSocket session
@RegisterAiService                // Quarkus generates the implementation
public interface CustomerSupportAgent {
    String chat(String userMessage);
}
```

```java
// CustomerSupportAgentWebSocket.java
@WebSocket(path = "/customer-support-agent")
public class CustomerSupportAgentWebSocket {
    private final CustomerSupportAgent customerSupportAgent;
    // constructor injection...

    @OnOpen
    public String onOpen() {
        return "Welcome to Miles of Smiles! How can I help you today?";
    }

    @OnTextMessage
    public String onTextMessage(String message) {
        return customerSupportAgent.chat(message);
    }
}
```

**Key concepts to explain:**
- `@RegisterAiService` = build-time code generation, no implementation needed
- `@SessionScoped` = one memory per WebSocket connection (connect = new memory, disconnect = gone)
- LLMs are **stateless**: the extension re-sends the full message history on every call
- Message roles: `user` (UserMessage), `assistant` (AiMessage)

**Dependencies:**
```xml
<artifactId>quarkus-langchain4j-openai</artifactId>
<artifactId>quarkus-websockets-next</artifactId>
```

---

### Step 2: Playing with Model Parameters

**Goal:** Experiment with temperature, max tokens, frequency penalty.

All config goes in `application.properties`:

```properties
quarkus.langchain4j.openai.api-key=${OPENAI_API_KEY}
quarkus.langchain4j.openai.chat-model.model-name=gpt-4o
quarkus.langchain4j.openai.chat-model.log-requests=true
quarkus.langchain4j.openai.chat-model.log-responses=true

# Experiment with these:
quarkus.langchain4j.openai.chat-model.temperature=1.0
quarkus.langchain4j.openai.chat-model.max-completion-tokens=1000
quarkus.langchain4j.openai.chat-model.frequency-penalty=0
```

**Experiments to try:**

| Parameter | Value | Effect | Test prompt |
|-----------|-------|--------|-------------|
| `temperature` | `0.1` | Very conservative | "Describe a sunset over the mountains" |
| `temperature` | `1.5` | Garbage / timeout | same |
| `max-completion-tokens` | `20` | Cuts off after 20 tokens | any question |
| `frequency-penalty` | `2` | Garbage after a few reps | "Repeat the word hedgehog 50 times" |

**Final recommended values:** temperature=1.0, max-tokens=1000, frequency-penalty=0

**Gotcha:** After changing properties, you must **refresh the browser** (not just send a new message).

---

### Step 3: Streaming Responses

**Goal:** Stream tokens as they arrive instead of waiting for the full response.

**Only change:** return type from `String` to `Multi<String>` (Mutiny reactive type).

```java
// CustomerSupportAgent.java - change return type
@SessionScoped
@RegisterAiService
public interface CustomerSupportAgent {
    Multi<String> chat(String userMessage);  // was: String
}
```

```java
// CustomerSupportAgentWebSocket.java - change return type
@OnTextMessage
public Multi<String> onTextMessage(String message) {  // was: String
    return customerSupportAgent.chat(message);
}
```

**Import:** `io.smallrye.mutiny.Multi`

**Why it works:** Quarkus natively understands `Multi` and streams each item over WebSocket automatically.

**Test prompt:** "Tell me a story containing 500 words" (observe tokens arriving incrementally)

---

### Step 4: System Messages

**Goal:** Constrain the chatbot's behavior with a system message.

**Only change:** add `@SystemMessage` annotation on the chat method.

```java
@SessionScoped
@RegisterAiService
public interface CustomerSupportAgent {

    @SystemMessage("""
            You are a customer support agent of a car rental company 'Miles of Smiles'.
            You are friendly, polite and concise.
            If the question is unrelated to car rental, you should politely redirect
            the customer to the right department.
            """)
    Multi<String> chat(String userMessage);
}
```

**Import:** `dev.langchain4j.service.SystemMessage`

**Key concepts:**
- System messages define **role, scope, tone, boundaries**
- They are **invisible** to the user but shape all responses
- During memory eviction, system messages are **never evicted** (user/assistant messages go first)

**Test:** Ask "Tell me a story." The bot should redirect because it's off-topic for car rental support.

---

## Section 1 Summary: Annotation Cheat Sheet

| Annotation | Package | Purpose |
|------------|---------|---------|
| `@RegisterAiService` | `io.quarkiverse.langchain4j` | Marks interface for build-time AI service generation |
| `@SessionScoped` | `jakarta.enterprise.context` | Memory scoped to WebSocket session |
| `@SystemMessage` | `dev.langchain4j.service` | System prompt (role, boundaries, tone) |
| `@WebSocket(path=...)` | `io.quarkus.websockets.next` | WebSocket endpoint |
| `@OnOpen` | `io.quarkus.websockets.next` | Connection opened handler |
| `@OnTextMessage` | `io.quarkus.websockets.next` | Incoming message handler |

---

## Section 2: Agentic Workflows (Steps 1-4)

The scenario: car fleet management with agents handling returns, cleaning, maintenance, disposition.

**New dependency for all of Section 2:**
```xml
<artifactId>quarkus-langchain4j-agentic</artifactId>
```

### Step 1: Implementing AI Agents

**Goal:** Create a single agent with tools that autonomously decides to call a cleaning function.

**AI Service vs. AI Agent:**

| | AI Service (Sect 1) | AI Agent (Sect 2) |
|-|---------------------|-------------------|
| Purpose | Answer questions | Perform autonomous tasks |
| Interaction | Reactive | Reactive + proactive |
| Methods | Multiple `@SystemMessage` methods OK | **One `@Agent` method per interface** |
| Composition | Single agent | Multi-agent workflows |

**Core pattern: Agent + Tool**

```java
// CleaningAgent.java
public interface CleaningAgent {

    @SystemMessage("""
        You handle intake for the cleaning department of a car rental company.
        It is your job to submit a request to the provided requestCleaning function...
        If no cleaning is needed, respond with "CLEANING_NOT_REQUIRED".
        """)
    @UserMessage("""
        Car Information:
        Make: {carInfo.make}  Model: {carInfo.model}  Year: {carInfo.year}
        Car Number: {carNumber}
        Feedback: {feedback}
        """)
    @Agent("Cleaning specialist. Determines what cleaning services are needed.")
    @ToolBox(CleaningTool.class)
    String processCleaning(CarInfo carInfo, Integer carNumber, String feedback);
}
```

```java
// CleaningTool.java
@ApplicationScoped
public class CleaningTool {
    @Tool("Requests a cleaning with the specified options")
    @Transactional
    public String requestCleaning(
            Integer carNumber, String carMake, String carModel, Integer carYear,
            boolean exteriorWash, boolean interiorCleaning,
            boolean detailing, boolean waxing, String requestText) {
        // update car status, return summary
    }
}
```

**Key annotations:**
- `@Agent(description)` = single entry point per interface, description used by orchestrators
- `@ToolBox(CleaningTool.class)` = tools the agent can call
- `@Tool("description")` = makes a method callable by the LLM
- `@UserMessage` supports **dot notation**: `{carInfo.make}` accesses nested fields

**Tool execution flow:** Agent receives input -> LLM decides to call tool (or not) -> LLM chooses parameter values -> tool executes -> result returned to LLM -> agent formulates final response

**REST endpoint:** `POST /car-management/return/{carNumber}?feedback=...`

---

### Step 2: Simple Agentic Workflows (Sequential)

**Goal:** Chain two agents in sequence using the declarative workflow API.

**New concept: AgenticScope** = shared key-value state that agents read from and write to via `outputKey`.

```java
// CarProcessingWorkflow.java
public interface CarProcessingWorkflow {

    @SequenceAgent(
            outputKey = "carConditions",
            subAgents = { CleaningAgent.class, CarConditionFeedbackAgent.class })
    CarConditions processCarReturn(CarInfo carInfo, Integer carNumber, String feedback);

    @Output
    static CarConditions output(String carCondition, String cleaningAgentResult) {
        boolean cleaningRequired = !cleaningAgentResult.toUpperCase().contains("NOT_REQUIRED");
        return new CarConditions(carCondition, cleaningRequired);
    }
}
```

**Critical rules:**
- Agent `outputKey` values become keys in the shared scope
- `@Output` method parameter names **must exactly match** `outputKey` values
- Method parameters (`carInfo`, `carNumber`, `feedback`) are auto-populated into scope
- Workflow interfaces are injected as CDI beans, just like agents

**Four workflow patterns (introduced here, used in later steps):**

| Pattern | Annotation | When to use |
|---------|-----------|-------------|
| Sequential | `@SequenceAgent` | Each agent needs previous output |
| Parallel | `@ParallelAgent` | Independent work, faster execution |
| Conditional | `@ConditionalAgent` | Branching based on runtime data |
| Loop | `@LoopAgent` | Iterative refinement or retries |

---

### Step 3: Composing Multiple Workflows

**Goal:** Nest workflows within workflows (parallel + conditional + sequential).

**Architecture:**
```
CarProcessingWorkflow (@SequenceAgent)
  |
  +-- FeedbackWorkflow (@ParallelAgent)
  |     +-- CleaningFeedbackAgent    -> outputKey: "cleaningRequest"
  |     +-- MaintenanceFeedbackAgent -> outputKey: "maintenanceRequest"
  |
  +-- CarAssignmentWorkflow (@ConditionalAgent)
  |     +-- MaintenanceAgent (if maintenance needed)
  |     +-- CleaningAgent (if only cleaning needed)
  |
  +-- CarConditionFeedbackAgent -> outputKey: "carCondition"
```

**Conditional routing with `@ActivationCondition`:**

```java
// CarAssignmentWorkflow.java
public interface CarAssignmentWorkflow {

    @ConditionalAgent(outputKey = "analysisResult",
            subAgents = { MaintenanceAgent.class, CleaningAgent.class })
    String processAction(...);

    @ActivationCondition(MaintenanceAgent.class)
    static boolean assignToMaintenance(String maintenanceRequest) {
        return isRequired(maintenanceRequest);  // maintenance takes priority
    }

    @ActivationCondition(CleaningAgent.class)
    static boolean assignToCleaning(String maintenanceRequest, String cleaningRequest) {
        return !isRequired(maintenanceRequest) && isRequired(cleaningRequest);
    }
}
```

**Key insight:** `@ActivationCondition` parameter names resolve from AgenticScope by name. Workflows can be `subAgents` alongside regular agents. All nested agents share the same scope instance.

---

### Step 4: Supervisor Pattern

**Goal:** Replace deterministic routing with an AI-driven supervisor that autonomously decides which agents to invoke.

**Two new patterns introduced:**

**1. `@SupervisorAgent`** = AI-driven orchestration (replaces `@ConditionalAgent`):
```java
public interface FleetSupervisorAgent {
    @SupervisorAgent(
            outputKey = "supervisorDecision",
            subAgents = { PricingAgent.class, DispositionAgent.class,
                          MaintenanceAgent.class, CleaningAgent.class })
    String superviseCarProcessing(CarInfo carInfo, Integer carNumber,
                                   FeedbackAnalysisResults feedbackAnalysisResults);

    @SupervisorRequest  // builds the runtime prompt for the supervisor
    static String request(CarInfo carInfo, Integer carNumber,
                          FeedbackAnalysisResults feedbackAnalysisResults) {
        // Java logic to conditionally shape the supervisor's instructions
        boolean dispositionRequired = ...;
        return String.format("You are a fleet supervisor... %s",
                dispositionRequired ? dispositionInstructions : normalInstructions);
    }
}
```

**2. `@ParallelMapperAgent`** = run the SAME agent for each item in a list (parallel):
```java
public interface FeedbackAnalysisWorkflow {
    @ParallelMapperAgent(
            outputKey = "feedbackAnalysisResults",
            subAgent = FeedbackAnalysisAgent.class,   // single agent, run per item
            itemsProvider = "tasks")                    // parameter name of the List
    FeedbackAnalysisResults analyzeFeedback(
            List<FeedbackTask> tasks, CarInfo carInfo, Integer carNumber, String feedback);
}
```

**`@ParallelAgent` vs `@ParallelMapperAgent`:**
- `@ParallelAgent`: different agents in parallel
- `@ParallelMapperAgent`: same agent, different inputs, in parallel

**Dynamic system message via data:**
```java
// FeedbackTask record holds the system instructions as a field
@SystemMessage("{task.systemInstructions}")  // resolved from FeedbackTask parameter
@Agent(outputKey = "feedbackAnalysis")
String analyzeFeedback(FeedbackTask task, CarInfo carInfo, ...);
```

---

## Section 2 Summary: Annotation Cheat Sheet

| Annotation | Purpose |
|------------|---------|
| `@Agent(outputKey, description)` | Marks agent entry point (one per interface) |
| `@ToolBox(Tool.class)` | Assigns tool classes to an agent |
| `@Tool("description")` | Makes a method callable by the LLM |
| `@SequenceAgent` | Execute sub-agents in order |
| `@ParallelAgent` | Execute different sub-agents concurrently |
| `@ParallelMapperAgent` | Execute same sub-agent per item in a list |
| `@ConditionalAgent` | Route to sub-agent based on conditions |
| `@ActivationCondition(Agent.class)` | Boolean check for conditional routing |
| `@SupervisorAgent` | AI-driven autonomous orchestration |
| `@SupervisorRequest` | Build runtime prompt for supervisor |
| `@LoopAgent` | Repeat until condition met |
| `@Output` | Extract values from AgenticScope into return type |
| `@SystemMessage` | System prompt (supports `{var}` templates) |
| `@UserMessage` | User prompt (supports `{var.nested}` dot notation) |

---

## Troubleshooting Quick Reference

| Symptom | Likely cause |
|---------|-------------|
| Agent doesn't call tools | System message not clear enough about when/how to use them |
| `@Output` method fails | Parameter names don't match `outputKey` values exactly |
| Workflow returns null | Missing `outputKey` on an agent |
| Agent sees wrong data | Parameter name in `@UserMessage` doesn't match scope key |
| `NullPointerException` in conditional | `@ActivationCondition` param name doesn't match scope |
| Streaming not working | Return type not `Multi<String>` in both agent AND WebSocket |
| Memory seems lost | `@SessionScoped` missing, or browser page refreshed |
| Config changes ignored | Need to refresh browser (WebSocket stays alive) |
| Tool not found by agent | `@ToolBox` annotation missing on the agent interface |
| "Tests already in progress" | Full stop + start cycle: `quarkus_stop` then `quarkus_start` |
