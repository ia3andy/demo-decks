![Quarkus World Tour](assets/worldtour.png)

# RivieraDev

note: hello

---

### Stéphane Epardaud @unfromage

-  Red Hatter for **12 years**
- In the Quarkus team **from the egg**:
	- RESTEasy Reactive
	- Panache
	- Renarde extension
	- UX

---

### Andy Damevin @ia3andy

-  Red Hatter for **6 years**
-  In the Quarkus team for **4 years**:
	- Web-Bundler extension
	- Quinoa extension
	- Sentry extension
	- code.quarkus.io
	- Codestarts

---

# The game

```javascript

people.openInBrowser("red.ht/quarkus-blast");


```

![](assets/qr-code-white.png)<!-- .element height="30%" width="30%" -->

---

# What's Quarkus

-  An [open source project](https://quarkus.io/community/)
-  A Supersonic & Subatomic Java stack
- Tailored for OpenJDK and GraalVM
- Crafted from the best of breed libraries and standards
- Made to let you focus on your code and enjoy it


---

### How Does a Framework Start
![Framework](assets/framework-start.png)

---
### The Quarkus Way
![Framework](assets/quarkus-start.png)

---
### Quarkus Offers Unequaled Performance
![Quarkus Metrics](assets/quarkus-metrics.png)

---
## Quarkus Extensions

- &shy;<!-- .element: class="fragment" -->They contain the logic to make a library fit the Quarkus standards (build time processing, native mapping, config, …) 
- &shy;<!-- .element: class="fragment" -->The community is involved [https://github.com/quarkiverse/quarkiverse/wiki](https://github.com/quarkiverse/quarkiverse/wiki)  
- &shy;<!-- .element: class="fragment" -->You can add your own! 

![Quarkiverse Hub](assets/quarkiverse-hub.png)  <!-- .element height="40%" width="40%" class="fragment"  -->

---

# htmx

![](assets/htmx.png)

---

# Quarkus Renarde


![renarde head](assets/renarde-head.svg)

&shy;<!-- .element: class="fragment" -->Server-side Web Framework based on [Qute](https://quarkus.io/guides/qute-reference), [Hibernate](https://quarkus.io/guides/hibernate-orm-panache) and [RESTEasy Reactive](https://quarkus.io/guides/resteasy-reactive).

---

## Quarkus Web Bundler

![](assets/quarkus-web-bundler.png)

---


```javascript
List<PeopleInTheRoomEntity> people = PeopleInTheRoomEntity.findAll();

DemoEntity review = DemoEntity.findDemo("code-review");

Watcher watcher = nominateWatcher(people);

people.stream().forEach(PeopleInTheRoomEntity::putSeatBeltOn);

// This is a full production app
// It might be a lot to take in at first

```
--
```javascript

review.show("Controllers and Data")

review.explain("Dev Services");

// At any moment now you might get lost
// Don't worry, everything's going to be alright

```
--
```javascript

watcher.killSleepingPeople(); // I am sure they ate all the buffet

review.show("Templates (Qute)");

```
--
```javascript

// They might not sustain the rest
// yes I lied
watcher.killLostPeople(); 

review.show("htmx");

```
--
```javascript
// I am not sure 
// I want to see your face when you wake up
watcher.sleep(); 

review.show("Web Bundler / MVNPM");

// - javascript
// - npm dependencies
// - styles (css, scss, sass)
// - minification/bundling
// - dev-mode

```
--
```javascript

review.explain("Security/Login");

```
--
```javascript

watcher.wakeUp(); 

DemoEntity live = DemoEntity.findDemo("live-coding");

live.fix("Play/Restart bug");

live.code("Auto Play");

live.code("Leaderboard user highlight");

```
--

```javascript

watcher.thankYou();

people.killAll(); // MOUHAHAHAHA YOU KNOW WAY TOO MUCH NOW


```

---

## Deploy & Questions

XOXO

