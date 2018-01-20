const unified = require('unified')

const remarkParse = require('remark-parse')
const remark2rehype = require('remark-rehype')

const rehypeHighlight = require('rehype-highlight')
const rehypeStringify = require('rehype-stringify')

const input = '```text\n' +
  'foo\n' +
  '```'

unified()
  .use(remarkParse)
  .use(remark2rehype)
  .use(rehypeHighlight)
  .use(rehypeStringify)
  .process(input, (err, vfile) => {
    if (err) {
      console.error(err)
    } else {
      console.log(vfile.toString())
    }
  })
