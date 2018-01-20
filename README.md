```
❯ node index.js
Error: Unknown language: `text` is not registered
    at coreHighlight (/remark-rehype-highlight-issue/node_modules/lowlight/lib/core.js:159:11)
    at High.highlight (/remark-rehype-highlight-issue/node_modules/lowlight/lib/core.js:112:20)
    at visitor (/remark-rehype-highlight-issue/node_modules/rehype-highlight/index.js:51:25)
    at one (/remark-rehype-highlight-issue/node_modules/unist-util-visit/index.js:31:16)
    at all (/remark-rehype-highlight-issue/node_modules/unist-util-visit/index.js:54:25)
    at one (/remark-rehype-highlight-issue/node_modules/unist-util-visit/index.js:39:14)
    at all (/remark-rehype-highlight-issue/node_modules/unist-util-visit/index.js:54:25)
    at one (/remark-rehype-highlight-issue/node_modules/unist-util-visit/index.js:39:14)
    at visit (/remark-rehype-highlight-issue/node_modules/unist-util-visit/index.js:22:3)
    at transformer (/remark-rehype-highlight-issue/node_modules/rehype-highlight/index.js:24:5)
```
