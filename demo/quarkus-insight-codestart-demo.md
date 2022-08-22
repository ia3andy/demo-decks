# Quarkus Codestarts

Note:
Quarkus Insight 2022-08-22

---

## Codestarts in the Quarkus tooling

---

### To generate your own Quarkus apps 

-  &shy;<!-- .element: class="fragment" -->[code.quarkus.io](https://code.quarkus.io)
- Quarkus CLI<!-- .element: class="fragment" -->
- Quarkus Maven Plugins<!-- .element: class="fragment" -->
- Quarkus IDEs plugins<!-- .element: class="fragment" -->

---

```console
$ quarkus create app aloha
-----------

applying codestarts...
📚  java
🔨  maven
📦  quarkus
📝  config-properties
🔧  dockerfiles
🔧  maven-wrapper
🚀  resteasy-reactive-codestart

-----------
[SUCCESS] ✅  quarkus project has been successfully generated in:
--> /Users/foo/bar/aloha
-----------
Navigate into this directory and get started: quarkus dev
```

---


###  To generate your own Quarkus extensions

- Quarkus CLI
- Quarkus Maven Plugins

---

```console
$ quarkus create extension aloha --codestart

Detected layout type is 'quarkiverse'
Generated runtime artifactId is 'quarkus-aloha'


applying codestarts...
📚  java
🔨  maven
📦  quarkus-extension
🔧  git
🚀  devmode-test
🚀  extension-base
🚀  extension-codestart
🚀  integration-tests
🚀  quarkiverse
🚀  unit-test

-----------
 👍  extension has been successfully generated in:
--> /Users/foo/bar/quarkus-aloha
-----------
Navigate into this directory and get started: quarkus build
```

---

## The idea

- Have a maintainable/extensible code generation system for Quarkus <!-- .element: class="fragment" -->
- Generate code for the different build tools, languages and config options <!-- .element: class="fragment" -->
- Allow extensions to provide starter code <!-- .element: class="fragment" -->
- Keep it simple <!-- .element: class="fragment" -->

---

## How it works

Take a new directory and iteratively add stuff (codestarts) into it. 

---

![How it works](assets/how-codestarts-works.png)

Note: https://excalidraw.com/#json=kniU1XAeiU64Pm8Gr598f,y3wRZWsi6KBDvbr1J5QWkQ

---

### The "Base" codestarts

- Project skeleton  <!-- .element: class="fragment" -->
- Build tool  <!-- .element: class="fragment" -->
- Coding language  <!-- .element: class="fragment" -->
- Config type  <!-- .element: class="fragment" -->

⚠️ ONLY ONE OF EACH<!-- .element: class="fragment" -->

---

### The "Extra" codestarts

- Tooling <!-- .element: class="fragment" -->
- Starter code  <!-- .element: class="fragment" -->

🍕 ALL YOU CAN EAT <!-- .element: class="fragment" -->

---


## Extension codestart

- Codestarts are contained in the extensions <!-- .element: class="fragment" -->
- Generated as a separated artifact during the build <!-- .element: class="fragment" -->
-  &shy;<!-- .element: class="fragment" -->Extensions to Codestarts binding is in:
`runtime/src/main/resources/META-INF/quarkus-extension.yaml` 
- &shy;<!-- .element: class="fragment" -->**org.acme** is a package placeholder

⚠️ No business logic, just the starter code <!-- .element: class="fragment" -->

---
### Testing

Use the JUnit extension "`CodestartTest`":
- &shy;<!-- .element: class="fragment" -->*to validate the generated content* > using **snapshot testing**
- &shy;<!-- .element: class="fragment" -->*to validate the generated code* > by building the generated app


### 31 Extensions with codestarts

https://code.quarkus.io/?extension-search=with:starter-code


---

```console
quarkus-insight dev
```

---

## Ideas for the future

- Add codestarts in existing projects [#13511](https://github.com/quarkusio/quarkus/issues/13511)
- Allow having different codestarts for an extensions [#25862](https://github.com/quarkusio/quarkus/issues/25862)
- Auto-generate Quickstart code for extensions [#24870](https://github.com/quarkusio/quarkus/issues/24870)

---

## Q&A






