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

# Static You Can Maintain

## Static with a Live CMS...

=[high-2] ### What is the missing Roq?

<img src="/deck-assets/roq-logo-color.svg" class="h-70 mx-auto" />

<!--
Welcome! Great to be at JNation.

Static sites... very static sites, right?

[PAUSE] Let's go.

~1 min
-->



---



# Quick survey 👋


<div class="flex items-end gap-4">
<h2 v-click>You love <b>JNation</b> right?</h2>
<div v-click class="flex flex-col items-center">
<img src="/deck-assets/roq-nun.png" class="h-20" />
<span class="high-3 text-sm">(So far at least)</span>
</div>
</div>

~[high-2 mt-7]> ## 🤔 Know what a `static site` is?

~[high-2 mt-7]> ## 🚀 Ever **made** a `static site`?

~[high-2 mt-7]> ## 😅 Loved the `generator` to create it?

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

-~ Quarkus team since the early days
-~ Creator of **code.quarkus.io**, **Codestarts**, **Quinoa**, **Web Bundler**
-~ and ... **Roq**

~[high-4 mt-8]> Follow me on LinkedIn

<img v-after src="/deck-assets/linkedin-qr.png" class="h-30 mt-2" />


<!--
Andy, IBM, Quarkus team.

Quarkiverse extensions. Too many. Can stop whenever I want.

Roq. More on that soon.

Follow me now. You'll forget to unfollow after the demo.

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

-~ ⚡ **Blazing fast**
-~ 🔍 **SEO-friendly**
-~ 🔒 **Secure**
-~ 💰 **Cheap**
-~ 📦 **Portable**

~[high-3 mt-4]> ## 🤖 Future-proof

~[text-xl mb-4]> LLMs and AI search engines **love** clean, static sites

<!--
Fast: no server, just files. CDN, closest region.

SEO: clean HTML, just works.

Secure: no DB to hack. "Someone steals your HTML." Good luck.

Cheap: free hosting on a dozen platforms.

Portable: just files. Move anywhere.

Future-proof: AI search era. GPTBot, ClaudeBot, Perplexity all crawl your content. Static = most AI-consumable format.

~3 min
-->

---
layout: fact
---

# Did you know that...

~> ## WordPress is powering 43% of the web?

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

-~ **Content**: Markdown, AsciiDoc, HTML
-~ **Templates**: Qute (TypeSafe!)
-~ **Data**: YAML/JSON (TypeSafe*)
-~ Instant **Live reload**
-~ **CMS/Editor** + Git sync + AI
-~ No Config **TailwindCSS** support
-~ **MCP agent**
-~ **Update tool**
-~ **Plugins & Themes** marketplace
-~ **Tests**

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
- Run `roq create my-demo`
- cd my-demo
- quickly show the project structure (~same as Jekyll/Hugo)
- Run `roq start`
- Show the default site in browser
- Open Editor
- Edit existing article and show live reload
- Create a new blog post, upload images
- Push on GitHub and enable GH pages
- Add plugins (sitemap, search, tagging, mock-data)
- Add syntax highlighting
- Enable auto-sync
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

# In next episode of Roq

-~ **I18n** collections
-~ **Image processing** plugin (resize, optimize, WebP)
-~ **Hybrid mode**: static pages + dynamic endpoints in one app
-~ **Editor AI boost**: Content fix suggestions, SEO hints

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

=[mt-10 high-4] **Build your next site** with Roq

=[mt-4] **Give Roq a star** on GitHub

=[mt-4] **Want to contribute?**

</v-click>





<!--
Thank you!

Roq: static sites that flow naturally. No fighting the tooling.

Java. Quarkus. It rocks.

Questions?

~5 min Q&A
-->
