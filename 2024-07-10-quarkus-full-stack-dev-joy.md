---
theme: quarkus
---
![Quarkus](deck-assets/hero_worldtour.png)  
  
`devJoy++` avec Quarkus

<div class="fragment fade-up">

> « Une stack de fou pour le full-stack »
>`Épisode Micro-Frontend`

</div>

---
  
## Andy Damevin  
  
- [~]Principal Software engineer, Red Hat  
- [~]Quarkus team for 5 years  
- [~]Lead of the Quarkus Web team  
- [~]`@ia3andy`  
  
---
  
### What is Quarkus?  
  
- [~fade-right]Open Source Cloud-Native Java framework  
- [~fade-right]Tailored for both the JVM and native (GraalVM)  
- [~fade-right]Build time `vs` Runtime processing (extensions)  
  
---
  
### Why Quarkus?  
  
- [~fade-left]Lower memory usage and faster startups  
- [~fade-left]Easy containerization and cloud deployments  
- [~fade-left]Community and Standards
- [~fade-left]Developer Joy`++`  
  
---
  
### What can we create with Quarkus?  
  
- [~fade-left]Cloud-Native, Serverless, Micro-Services, Command-Lines…  
- [~fade-left]Monolith 👻  
- [~fade-left]And Web Applications!  
  
---

### Web Components with Lit

- [~fade-left]Set of web platform APIs that allow you to create new custom, reusable, encapsulated HTML tags to use in web pages and web apps
- [~fade-left]Web components work anywhere you use HTML (W3C specification standards)
- [~fade-left]Lit is Tiny
- [~fade-left]Easy to use with Quarkus

--

```typescript

@customElement('simple-greeting')
export class SimpleGreeting extends LitElement {
  static styles = css`p { color: blue }`;

  @property()
  name = 'Somebody';

  render() {
    return html`<p>Hello, ${this.name}!</p>`;
  }
}

```

--

```html
<simple-greeting name="World"></simple-greeting>
```

--

<p style="color: blue;">Hello, World!</p>

---

### Micro-Frontends with Quarkus

SCHEMA

---

### Pierre Programming

![](deck-assets/qr-code-pierre-prog.png)<!-- .element height="100%"  -->  
  
[red.ht/pierre-programming](red.ht/pierre-programming)  


---
  
```java  
System.out.println("""  
    ```java      System.out.println("How about coding a micro-frontend now? 🤓");  
    ```""");  
```  
  
---
  
### Conclusion

QR CODE for openfeedback