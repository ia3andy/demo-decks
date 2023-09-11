

# « The Quarkus Frontend Rainbow »


Notes:
3'
Previous state with Quarkus
- Static html (META-INF/resources)
- Separated Frontend and Backend
- Maven Frontend Plugin
	Then:
- Qute => templating
- Quinoa => Integrated SPA experience (like Maven Frontend Plugin)
- Renarde => MVC (ssr with Qute)
- Web Bundler => For SSR or light SPAs
- Playwright => for testing


---

## Qute 

TypeSafe templating with an awesome developer experience (Quarkus Tools Plugin).

Notes:
5'

---

## Renarde 

![renarde head](assets/renarde-head.svg)

Renarde is a server-side Web Framework based on Qute, Hibernate and RESTEasy Reactive.

Notes:
10'

---

## Quinoa

Eases the development, the build and serving of single page apps or web components (built with NodeJS).

![NodeJS](assets/nodejs.svg)<!-- .element height="100px" -->

Notes:
10'


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

live.fix("Refresh button in leaderboard");

live.code("Auto open existing game");

live.code("Highlight my own score in leaderboard");

```
--

```javascript

watcher.thankYou();

people.killAll(); // MOUHAHAHAHA YOU KNOW WAY TOO MUCH NOW


```


---

## Deploy? & Conclusion

- Not made to create games :)
- &shy;<!-- .element: class="fragment" -->Good dev XP / Easy to start
- &shy;<!-- .element: class="fragment" -->SEO is easy (compared to SPA)
- &shy;<!-- .element: class="fragment" -->All the logic is in the back
- &shy;<!-- .element: class="fragment" -->Different teams can contribute
- &shy;<!-- .element: class="fragment" -->Best for: Online Stores,  Content apps, Catalogs, ...



---

## Questions

XOXO

