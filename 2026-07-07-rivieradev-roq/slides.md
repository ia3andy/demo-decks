---
theme: the-unnamed
addons:
  - ./shared/roq-addon
title: "Les sites statiques, c'est très bon pour la santé (de ton projet) !"
info: |
  Les sites statiques, c'est très bon pour la santé (de ton projet) !
  On t'explique pourquoi.
transition: slide-left
favicon: /deck-assets/favicon.svg
drawings:
  persist: false
---

<div style="text-align: center;"><h1 class="no-title-bg" style="font-family: 'Exo 2', sans-serif; font-weight: 800; font-size: 4rem; margin-bottom: 0 !important; color: #ffffff;">Le statique, c'est la santé.</h1></div>

<div class="flex items-center justify-center gap-8 mt-8">
<img src="/deck-assets/roq-peeking.svg" class="h-40" />
</div>

<div class="text-center mt-8 text-xl">Andy Damevin · Frédéric Blanc</div>

<!--
Welcome! Happy to be here

Very mystical venue

[PAUSE] OK let's go.

~1 min
-->



---
layout: two-cols
layoutClass: two-columns-split
---

# Andy Damevin

**Principal Software Engineer @ IBM**

- Love Java (and Web UI)
- Quarkus team since the early days
- Creator of **code.quarkus.io**, **mvnpm**, **Quinoa**, **Web Bundler** ...and **Roq**

<img src="/deck-assets/linktree-qr.png" class="h-30 mt-2" />

::right::

# Frédéric Blanc

**TODO: title @ company**

- TODO: bullet points

<!--
Andy + Fred intro.

~2 min
-->

---



# Petit sondage 👋


~[high-2 mt-7]> ## 🙋 Allez, on lève la main !

~[high-2 mt-7]> ## 🤔 Site statique, ça vous parle ?

~[high-2 mt-7]> ## 🚀 Déjà **fait** un ?

~[high-2 mt-7]> ## 😅 Aimé le `générateur` ? Vraiment ?

<!--
Raise hands! [everyone]

Static site = ? [most hands]

Made one? [fewer]

Loved the generator? [silence]

...that silence. That's the talk.

~3 min
-->

---
clicks: 2
class: no-code-bg
---

# SSG? Supersonic Star... Gate 🪐?

<v-switch>
<template #1>

```
┌────────────────────────────────────────────────────────┐
│                                                        │
│                       Browser                          │
│                                                        │
└────────────────┬───────────────────────▲───────────────┘
                 │                       │
                 │  /page                │  HTML
                 │                       │
┌────────────────▼───────────────────────┴───────────────┐
│                                                        │
│                       Server                           │
│                 (render per request)                   │
│                                                        │
└────────────────────────────┬───────────────────────────┘
                             │
                           queries
                             │
┌────────────────────────────▼───────────────────────────┐
│                                                        │
│                      Database                          │
│                                                        │
└────────────────────────────────────────────────────────┘
```

</template>
<template #2>

```
┌─────────────────────┐                    ┌─────────────────────┐
│                     │                    │                     │
│     SSG Build       │                    │       Browser       │
│ scheduled/on-change │                    │                     │
│                     │                    │                     │
└──────────┬──────────┘                    └────┬────────────▲───┘
           │                                    │            │
           │ generate                           │ /page      │ HTML
           │                                    │            │ (instant!)
           ▼                                    ▼            │
┌─────────┐┌─────────┐┌─────────┐         ┌──────────────────┴──┐
│  .html  ││  .html  ││  .html  │         │                     │
├─────────┤├─────────┤├─────────┤ publish │    CDN / Host       │
│  .html  ││  .html  ││  .html  │────────▶│                     │
├─────────┤├─────────┤├─────────┤         │    GitHub Pages     │
│  .html  ││  .html  ││  .html  │         │    Netlify          │
└─────────┘└─────────┘└─────────┘         │    Cloudflare       │
                                          │                     │
                                          └─────────────────────┘
```

</template>
</v-switch>


<!--
Who figured it out?

SSG = Static Site Generator. Not Star Gate.

[CLICK 1] Traditional: Browser → Server → DB → HTML. Every request.

[CLICK 2] SSG: Build ahead of time. CDN serves files. No server. No DB. No 3 AM pages.

Blogs, portfolios, docs, business sites. High read, low write.

~3 min
-->

---

# Why static is 👌

<v-click>

- ⚡ **Blazing fast**
- 💰 **Cheap**
- 🔍 **SEO-friendly**
- 🔒 **Secure**

- 📦 **Portable**
</v-click>

<v-click>

=[high-3 mt-4] ## 🤖 Needed for the future

=[text-xl mb-4] LLMs and AI search engines **love** clean, static sites
</v-click>

<!--
Fast: replicated files, closest region.

Cheap: free hosting on a dozen platforms.

SEO: clean HTML, just works.

Secure: no DB to hack. "Someone steals your HTML." Good luck.

Portable: just files. Move anywhere.

Future: AI needs static. Your human creativity + clean HTML = perfect for LLMs.

~3 min
-->

---

# Most of your project could be static

~> ## Only a small part of a typical site is truly dynamic.

~[high-3 mt-6]> ## 🧩 Dynamic components
=[text-lg ml-8] A component served by its own backend, embedded in a static page

~[high-3 mt-4]> ## 🔀 Mixed routing
=[text-lg ml-8] Static pages alongside dynamic routes

~[high-3 mt-4]> ## 🔄 Hybrid
=[text-lg ml-8] Same app, same codebase: static + dynamic

<!--
Dynamic components & mixed routing: failure is always partial. Static pages stay up even if the dynamic part goes down.

Hybrid: simpler architecture, mitigated by redundancy and caching. Good enough for most cases.

~3 min
-->

---
layout: fact
---

# Try to guess...

~> ## What percentage of the web runs on WordPress?

~[text-2xl high-4]> **43%** of the Web!

<span v-after class="text-sm text-gray-500">source: W3Techs 2025</span>

~[mt-4 text-lg]> (fun fact: the JNation website was down 2 days before the conf)

<!--
[PAUSE]

So if static is that great... why does WordPress still power 43% of the web?

[Let it hang 2-3 seconds]

Because the tooling gap is still too wide. WordPress makes it easy. We need to do the same for static.

JNation site was down 2 days before the conf. True story.

~1 min
-->


---
layout: section
background: /deck-assets/roq-climbing.jpeg
class: subtitle-text
---

<h1 class="alpha-80">I am Roq, let me introduce myself</h1>

<v-click>

### Content

- **Markdown**, AsciiDoc, HTML
- **CMS/Editor** + Git sync + AI
- **Plugins & Themes** marketplace
</v-click>


<v-click>

### Powered by Quarkus

- **Templates**: Qute (TypeSafe!)
- **Data**: YAML/JSON (TypeSafe*)
- No Config **TailwindCSS** support
- Instant **Live reload**
- **Hybrid** mode
- **Extensions** ecosystem
- **Tests** & **MCP agent**

</v-click>

<img src="/deck-assets/commonhaus-logo.svg" class="absolute bottom-4 right-4 h-12 opacity-80" />

<!--
Here's what Roq brings.

Content: Markdown, AsciiDoc, HTML.

Templates: Qute. Type-safe, build-time errors.

Data: YAML/JSON, also type-safe.

Live reload. Change file, see it.

CMS editor + Git sync + AI. Writers don't need a terminal.

TailwindCSS, zero config.

MCP agent, update tool, plugins marketplace, tests.

[CLICK] It's Java. [pause]

~3 min
-->

---
layout: center
class: text-center
---

# Time to Roq

<img src="/deck-assets/roq-peeking.svg" class="h-30 mx-auto mt-4 mb-4" />

=[text-3xl high-4] `roq create my-site`


<!--
OK let's see this in action. I'm going to create a Roq site from scratch, right here, right now.

[DEMO STEPS]
- Run `roq create the-missing-roq-raw -x theme:base`
- cd the-missing-roq
- quickly show the project structure (~same as Jekyll/Hugo)
- Run `roq start`
- Show the default site in browser (and index page)
- Create an article by hand (YYYY-MM-DD-article-1.md)
- Open Editor, rename to 'Why is Java my favorite language' and add content (preview/live-reload)
- Edit content, add 'language' data
- Iterate on posts in index
- `roq create the-missing-roq` and copy existing posts 
- Init on GH and push and enable GH page `gh repo create the-missing-roq-1 --public --source=.`
- Enable Editor GH sync 'editor.sync.enabled=true' and 'quarkus.qute.alt-expr-syntax=true'
- Create a new blog post, 
- Add new article 'The Darkside' copy images 
- Publish on GitHub
- Add plugins (sitemap, tagging, faker)
- Use the-code theme



~15-20 min
-->

---

# Already in the wild

-~ 🔗 **mvnpm.org** — Maven NPM bridge
-~ 🌐 **blog.sunix.org** — TailwindCSS + AI, very nice result
-~ 🚀 **quarkus.io** — Transitioning to Roq (search is a dynamic component served by a Quarkus microservice)
-~ 📦 **Quarkiverse** — Extension ecosystem

<!--
Real world examples of Roq and static + dynamic mixing.

mvnpm.org: fully static.

blog.sunix.org: personal blog on Roq. TailwindCSS + AI, great result. There's a blog post about it.

quarkus.io: transitioning to Roq. The search is a full-stack microservice in Quarkus, embedded as a dynamic component in an otherwise static site.

Quarkiverse: extension ecosystem.

~2 min
-->

---

<div class="flex items-center justify-between">
<h1>devoured.fyi</h1>
<img src="/deck-assets/devoured-qr.png" class="h-40" />
</div>

~> A daily developer tech digest

<div v-click>

```
 RSS Feeds           JBang Pipeline              Roq
┌────────────┐    ┌──────────────────────┐    ┌─────────────┐
│ AI / Tech  │───>│ 1. Fetch articles    │───>│ content/    │
│ DevOps     │    │ 2. Enrich            │    │ templates/  │──> Static HTML
│ Data       │    │ 3. Summarize (AI)    │    │ data/       │    on CDN
│ Design     │    │ 4. Tag & prioritize  │    │ web/        │
└────────────┘    └──────────────────────┘    └─────────────┘
```

</div>

~[mt-4 text-green-500]> Daily. Automated. Static. AI-powered. Java.

<!--
My daily tech digest. Built with Roq.

Pipeline: scrape TLDR newsletters → enrich → AI summaries → publish static site.

Client-side personalization, read tracking, cross-device sync via Cloudflare Workers.

Tired of reading the news... automated it. AI reads for me. I read the AI. AIs all the way down.

~3 min
-->

---

# Up Next in Roq

<v-click>

- **I18n** for collections
- **Image processing** plugin (resize, optimize, WebP)
- **Editor AI boost**: Content fix suggestions, SEO 
- **New themes**: Blog, Docs, Jugs...
</v-click>

<!--
Roq 2.0 already shipped: live reload, TailwindCSS zero-config, simplified structure.

What's next:

I18n for multi-language sites.

Image processing: auto resize, optimize, WebP.

Hybrid: mix static + dynamic Quarkus endpoints. Same app.

Editor AI: content suggestions, SEO hints.

~2 min
-->


---
layout: closing
background: /deck-assets/roq-bye-bye.png
---

# Questions?

<v-click>

<img src="/deck-assets/iamroq-qr.png" class="h-40 mx-auto mb-0" />

=[text-4xl mt-0] [iamroq.dev](https://iamroq.dev)

=[mt-8 high-4] #### Keep writing human content 💪

=[mt-4] **Star Roq on GH** if you like it

=[mt-4] **Contributions are welcome**

</v-click>





<!--
Thank you!

Distribution gratuite d'ordonnances Roq pour la bonne santé de vos projets!

Roq: static sites that flow naturally. No fighting the tooling.

Java. Quarkus. It rocks.

Questions?

~5 min Q&A
-->
