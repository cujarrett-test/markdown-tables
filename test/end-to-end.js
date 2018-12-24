const tape = require("tape-async")
const { markdownTables } = require("../src/index.js")

tape("markdown-tables end to end use test", async (assert) => {
  assert.plan(1)

  // eslint-disable-next-line max-len
  const expected = `| Header 1  | Header-2      | “Header 3”          | ‘Header 4’       | Header-2_1         |
|-----------|---------------|---------------------|------------------|--------------------|
| Some data | frogs         | Joe’s Fish          | Part             | Pina               |
| Oil       | “Yellow Tuna” |                     | Work, Work, Work | Yellow             |
| 11        | Header-2      | Sharks;Birds;People | Great            | Gifs make me smile |
`

  const actual = await markdownTables("./test/test-input.xlsx")
  assert.equal(actual, expected, "Converts .xslx to .md table as expected")

  await markdownTables("./test/test-input.xlsx", "./test/test-output.md")

  assert.end()
})
