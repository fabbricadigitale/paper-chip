#! /usr/bin/env babel-node

import path from "path"
import { readFileSync as getContents, writeFileSync as setContents } from "fs"
import pkg from "read-pkg"
import include from "rollup-plugin-includepaths"
import node from "rollup-plugin-node-resolve"
import globby from "globby"
import * as parse5 from "parse5"
import * as dom5 from "dom5"
import { rollup } from "rollup"

// Retrieve dependencies and target directories
const { directories: { deps, lib: target } } = pkg.sync(__dirname)

// Retrieve HTML files in the current working directory
const components = globby.sync(["*.html", "!index.html"], { absolute: true })

// Fetch file contents to retrieve entrypoints
const entrypoints = []
for (const component of components) {
  const html = getContents(component, "utf8")
  const document = parse5.parse(html)
  const scripts = dom5.queryAll(document, dom5.predicates.hasTagName("script"))
  // We assume only one script for each component since otherwise ...
  const script = scripts ? scripts[0] : null
  if (script) {
    entrypoints.push(dom5.getAttribute(script, "src"))
  }
}

// Maybe they are components containing only HTML
if (entrypoints.length === 0) {
  process.exit(0)
}

const getOpts = (entrypoint) => ({
  entry: path.resolve(entrypoint),
  plugins: [
    include({
      paths: [ deps ]
    }),
    node()
  ]
})

const bundleUp = (bundle) => {
  const entrypoint = path.relative(process.cwd(), bundle.modules.map((m) => m.id).pop())
  const destination = path.resolve(target, entrypoint)

  return bundle.write({
    format: "iife", // We can use an IIFE since this bundling is only for demos!
    dest: destination
  })
}

// Bundle each entrypoint
const promises = []
for (const entrypoint of entrypoints) {
  promises.push(rollup(getOpts(entrypoint)).then(bundleUp))
}

Promise.all(promises).then(() => {
  console.log("DONE")
  process.exit(0)
})
