'use strict'
const test = require('node:test')
const assert = require('node:assert')
const path = require('node:path')
const getPackageVersion = require('../lib/get-package-version.js')
const rootDir = path.join(__dirname, './example-deps/lib/node_modules')

test('should get package version', (t) => {
  const pkgDir = `${rootDir}/pkg-1`
  const version = getPackageVersion(pkgDir)
  assert.equal(version, '1.0.0', 'should return the correct package version')
})

test('should default to runtime version if version does not exist in package.json', (t) => {
  const pkgDir = `${rootDir}/no-version`
  const version = getPackageVersion(pkgDir)
  const runTimeVersion = process.version.slice(1) // remove the leading 'v'
  assert.equal(version, runTimeVersion, 'should return the correct package version')
})
