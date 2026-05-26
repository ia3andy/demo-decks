---

## Slide 1

# What is the missing Roq?

## Static You Can Maintain

### Static with a Live CMS...

[IMAGE]


> **Speaker notes:**
> Welcome! Happy to be here
> 
> Very mystical venue
> 
> [PAUSE] OK let's go.
> 
> ~1 min


---

## Slide 2

# Quick survey 👋

## Do you love **JNation**?

[IMAGE]
(be honest, I won't tell)

## 🤔 Do you know what a `static site` is?

## 🚀 Have you ever **made** a `static site`?

## 😅 And... liked the `generator` to create it?


> **Speaker notes:**
> [Hands up!] Love JNation? [claps]
> 
> [Click: nun] So far at least...
> 
> Static site = ? [most hands]
> 
> Made one? [fewer]
> 
> Loved the generator? [silence]
> 
> ...that silence. That's the talk.
> 
> ~3 min


---

## Slide 3

layout: image-right
image: /deck-assets/rocking_duke_flyingV.svg
backgroundSize: 80%


---

## Slide 4

# Andy Damevin

**Principal Software Engineer @ IBM**

- Love Java (and Web UI)
- Quarkus team since the early days
- Creator of **code.quarkus.io**, **mvnpm**, **Quinoa**, **Web Bundler** ...and **Roq**
- Also ❤️ Surf, Basket, Craft beer

Follow me

[IMAGE]


> **Speaker notes:**
> Andy, IBM, Quarkus team.
> 
> ~2 min


---

## Slide 5

clicks: 2
class: no-code-bg


---

## Slide 6

# SSG? Supersonic Star... Gate 🪐?

[DIAGRAM]


> **Speaker notes:**
> Who figured it out?
> 
> SSG = Static Site Generator. Not Star Gate.
> 
> [CLICK 1] Traditional: Browser → Server → DB → HTML. Every request.
> 
> [CLICK 2] SSG: Build ahead of time. CDN serves files. No server. No DB. No 3 AM pages.
> 
> Blogs, portfolios, docs, business sites. High read, low write.
> 
> ~3 min


---

## Slide 7

# Why static is 👌

- ⚡ **Blazing fast**
- 💰 **Cheap**
- 🔍 **SEO-friendly**
- 🔒 **Secure**

- 📦 **Portable**

## 🤖 Needed for the future

LLMs and AI search engines **love** clean, static sites


> **Speaker notes:**
> Fast: replicated files, closest region.
> 
> Cheap: free hosting on a dozen platforms.
> 
> SEO: clean HTML, just works.
> 
> Secure: no DB to hack. "Someone steals your HTML." Good luck.
> 
> Portable: just files. Move anywhere.
> 
> Future: AI needs static. Your human creativity + clean HTML = perfect for LLMs.
> 
> ~3 min


---

## Slide 8

# Try to guess...

## What percentage of the web runs on WordPress?

**43%** of the Web!

source: W3Techs 2025


> **Speaker notes:**
> [PAUSE]
> 
> So if static is that great... why does WordPress still power 43% of the web?
> 
> [Let it hang 2-3 seconds]
> 
> Because the tooling gap is still too wide. WordPress makes it easy. We need to do the same for static.
> 
> ~1 min


---

## Slide 9

layout: section
background: /deck-assets/roq-climbing.jpeg
class: subtitle-text


---

## Slide 10

# I am Roq, let me introduce myself

### For writers

- **Content**: Markdown, AsciiDoc, HTML
- **CMS/Editor** + Git sync + AI
- Instant **Live reload**

### For site creators

- **Plugins & Themes** marketplace
- **Templates**: Qute (TypeSafe!)
- **Data**: YAML/JSON (TypeSafe*)
- No Config **TailwindCSS** support
- **MCP agent**
- **Tests**
- **Update tool**

Oh, and fun fact: it's Java.


> **Speaker notes:**
> Here's what Roq brings.
> 
> Content: Markdown, AsciiDoc, HTML.
> 
> Templates: Qute. Type-safe, build-time errors.
> 
> Data: YAML/JSON, also type-safe.
> 
> Live reload. Change file, see it.
> 
> CMS editor + Git sync + AI. Writers don't need a terminal.
> 
> TailwindCSS, zero config.
> 
> MCP agent, update tool, plugins marketplace, tests.
> 
> [CLICK] It's Java. [pause]
> 
> ~3 min


---

## Slide 11

layout: center
class: text-center


---

## Slide 12

# Time to Roq

[IMAGE]

`roq create my-site`


> **Speaker notes:**
> OK let's see this in action. I'm going to create a Roq site from scratch, right here, right now.
> 
> [DEMO STEPS]
> - Run `roq create the-missing-roq-raw -x theme:base`
> - cd the-missing-roq
> - quickly show the project structure (~same as Jekyll/Hugo)
> - Run `roq start`
> - Show the default site in browser (and index page)
> - Create an article by hand (YYYY-MM-DD-article-1.md)
> - Open Editor, rename to 'Why is Java my favorite language' and add content (preview/live-reload)
> - Edit content
> - Iterate on posts in index
> - Add new article 'Maybe I need to switch to Go?'
> - `roq create the-missing-roq` and copy existing posts 
> - Init on GH and push and enable GH page `gh repo create the-missing-roq-verif-1 --public --source=.`
> - Enable Editor GH sync 
> - Create a new blog post, 
> - Add new article 'Or maybe Rust?' upload images
> - Add new article 'Python 😱'
> - Publish on GitHub
> - Add plugins (sitemap, search, tagging, mock-data)
> - Add syntax highlighting
> - Use the-code-site templates
> 
> 
> 
> ~15-20 min


---

## Slide 13

# devoured.fyi
[IMAGE]

A daily developer tech digest

```
 RSS Feeds           JBang Pipeline              Roq
┌────────────┐    ┌──────────────────────┐    ┌─────────────┐
│ AI / Tech  │───>│ 1. Fetch articles    │───>│ content/    │
│ DevOps     │    │ 2. Enrich            │    │ templates/  │──> Static HTML
│ Data       │    │ 3. Summarize (AI)    │    │ data/       │    on CDN
│ Design     │    │ 4. Tag & prioritize  │    │ web/        │
└────────────┘    └──────────────────────┘    └─────────────┘
```

Daily. Automated. Static. AI-powered. Java.


> **Speaker notes:**
> My daily tech digest. Built with Roq.
> 
> Pipeline: scrape TLDR newsletters → enrich → AI summaries → publish static site.
> 
> Client-side personalization, read tracking, cross-device sync via Cloudflare Workers.
> 
> Tired of reading the news... automated it. AI reads for me. I read the AI. AIs all the way down.
> 
> ~3 min


---

## Slide 14

# Up Next in Roq

- **I18n** for collections
- **Image processing** plugin (resize, optimize, WebP)
- **Hybrid mode**: static pages + dynamic in one app (e.g: [mvnpm.org](https://mvnpm.org))
- **Editor AI boost**: Content fix suggestions, SEO 
- **New themes**: Blog, Docs, Jugs...


> **Speaker notes:**
> Roq 2.0 already shipped: live reload, TailwindCSS zero-config, simplified structure.
> 
> What's next:
> 
> I18n for multi-language sites.
> 
> Image processing: auto resize, optimize, WebP.
> 
> Hybrid: mix static + dynamic Quarkus endpoints. Same app.
> 
> Editor AI: content suggestions, SEO hints.
> 
> ~2 min


---

## Slide 15

layout: closing
background: /deck-assets/roq-bye-bye.png


---

## Slide 16

# Questions?

[IMAGE]

[iamroq.dev](https://iamroq.dev)

#### Keep writing human content 💪

**Star Roq on GH** if you like it

**Contributions are welcome**


> **Speaker notes:**
> Thank you!
> 
> Roq: static sites that flow naturally. No fighting the tooling.
> 
> Java. Quarkus. It rocks.
> 
> Questions?
> 
> ~5 min Q&A

