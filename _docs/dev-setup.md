---
title: "My Development Setup"
date: "16-08-2026"
description: "The tools I reach for when I am building and shipping apps."
---

## The stack I keep coming back to

I like a setup that lets me move quickly without making the app harder to live with a few months later. The pieces below are the ones I reach for most often when I am building something new, from the first screen through deployment.

For the frontend, I use [SwagUI](https://swagui.rohoswagger.com), my component library, alongside [Next.js](https://nextjs.org). You can browse the source at [github.com/rohoswagger/swagui](https://github.com/rohoswagger/swagui). That combination gives me a practical design foundation while keeping the app structure, routing, and rendering model familiar.

When I need a TypeScript backend, I usually keep authentication simple with [Better Auth](https://www.better-auth.com). It fits naturally into the stack and keeps the parts of auth that tend to become distracting, such as sessions and sign-in flows, from taking over the rest of the build.

For email, I use [Plunk](https://www.useplunk.com). It is a straightforward way to handle the product emails an app needs, whether that is a welcome message, a verification email, or something more transactional.

I run the infrastructure side through [Cloudflare](https://www.cloudflare.com). Workers are where I put backend logic that benefits from being close to the edge, while Cloudflare also handles hosting and domains. Having those pieces in one place makes shipping and maintaining smaller applications feel much less scattered.

None of this is a rulebook. It is simply the set of tools that helps me get from an idea to a useful, well-finished app with the least unnecessary ceremony.
