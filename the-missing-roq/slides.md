---
theme: the-unnamed
title: "The Missing Roq"
info: |
  Static You Can Maintain. Static With a Live CMS.
  What Is the Missing Roq?
transition: slide-left
favicon: /deck-assets/favicon.svg
drawings:
  persist: false
---

# What is the missing Roq?

## Static You Can Maintain

=[high-2] ### Static with a Live CMS...

<img src="/deck-assets/roq-logo-color.svg" class="h-70 mx-auto" />

<!--
Welcome! Happy to be here

Very mystical venue

[PAUSE] OK let's go.

~1 min
-->



---



# Quick survey 👋


<div class="flex items-end gap-4">
<h2 v-click>Do you love <b>JNation</b>?</h2>
<div v-click class="flex flex-col items-center">
<img src="/deck-assets/roq-nun.png" class="h-20" />
<span class="high-3 text-sm">(be honest, I won't tell)</span>
</div>
</div>

~[high-2 mt-7]> ## 🤔 Do you know what a `static site` is?

~[high-2 mt-7]> ## 🚀 Have you ever **made** a `static site`?

~[high-2 mt-7]> ## 😅 And... liked the `generator` to create it?

<!--
[Hands up!] Love JNation? [claps]

[Click: nun] So far at least...

Static site = ? [most hands]

Made one? [fewer]

Loved the generator? [silence]

...that silence. That's the talk.

~3 min
-->

---
layout: image-right
image: /deck-assets/rocking_duke_flyingV.svg
backgroundSize: 80%
---

# Andy Damevin

**Principal Software Engineer @ IBM**

- Love Java (and Web UI)
- Quarkus team since the early days
- Creator of **code.quarkus.io**, **mvnpm**, **Quinoa**, **Web Bundler** ...and **Roq**
- Also ❤️ Surf, Basket, Craft beer

=[high-4 mt-8] Follow me on LinkedIn

<img src="/deck-assets/linkedin-qr.png" class="h-30 mt-2" />


<!--
Andy, IBM, Quarkus team.

~2 min
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
layout: fact
---

# Try to guess...

~> ## What percentage of the web runs on WordPress?

~[text-2xl high-4]> **43%** of the Web!

<span v-after class="text-sm text-gray-500">source: W3Techs 2025</span>


<!--
[PAUSE]

So if static is that great... why does WordPress still power 43% of the web?

[Let it hang 2-3 seconds]

Because the tooling gap is still too wide. WordPress makes it easy. We need to do the same for static.

~1 min
-->


---
layout: section
background: /deck-assets/roq-climbing.jpeg
class: subtitle-text
---

# I am Roq, let me introduce myself

<v-click>

### For writers

- **Content**: Markdown, AsciiDoc, HTML
- **CMS/Editor** + Git sync + AI
- Instant **Live reload**
</v-click>


<v-click>

### For site creators

- **Plugins & Themes** marketplace
- **Templates**: Qute (TypeSafe!)
- **Data**: YAML/JSON (TypeSafe*)
- No Config **TailwindCSS** support
- **MCP agent**
- **Tests**
- **Update tool**

</v-click>

~[mt-4 text-2xl font-bold]> Oh, and fun fact: it's Java.


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
- Run `roq create the-missing-roq -x theme:base`
- cd the-missing-roq
- quickly show the project structure (~same as Jekyll/Hugo)
- Run `roq start`
- Show the default site in browser
- Create an article by hand (YYYY-MM-DD-title.md)
- Open Editor, rename and add content
- Edit existing article and show live reload
- Init on GH and push and enable GH page `gh repo create the-missing-roq-verif-1 --public --source=.`
- Enable Editor GH sync 
- Create a new blog post, upload images
- Publish on GitHub
- Add plugins (sitemap, search, tagging, mock-data)
- Add syntax highlighting
- Use the-code-site templates


~15-20 min
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
- **Hybrid mode**: static pages + dynamic in one app (e.g: [mvnpm.org](https://mvnpm.org))
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

Roq: static sites that flow naturally. No fighting the tooling.

Java. Quarkus. It rocks.

Questions?

~5 min Q&A
-->
