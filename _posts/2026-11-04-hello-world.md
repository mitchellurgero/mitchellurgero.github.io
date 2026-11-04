---
title: Hello, world
description: The site got a new coat of paint, and now it has a blog.
tags: [meta]
published: false
---

The old site was a love letter to the classic Mac desktop. This one lives in a terminal, and it ships with zero JavaScript. Every animation you saw on the way in is plain CSS.

## How posts work

Posts are Markdown files in `_posts/`, named `YYYY-MM-DD-title.md`. GitHub Pages builds them with Jekyll on every push.

```sh
cp _posts/2026-11-04-hello-world.md _posts/2026-11-05-next-post.md
git add _posts && git commit -m "New post" && git push
```

> Expect posts about retro hardware, homelab experiments, and whatever I am building at the moment.

More soon.
