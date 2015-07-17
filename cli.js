#!/usr/bin/env node

var rjs = require('./index')
var slump = require('slump')
var ndjson = require('ndjson')
var opt = require('optimist')
  .usage('random-json <options> - generate random json')
  .describe('h', 'this help text')
  .alias('h', 'help')
  .describe('c', 'count of json objects (0 = infinity)')
  .alias('c', 'count')
  .default('c', 0)
  .describe('o', 'json objects only')
  .alias('o', 'objects')
  .default('o', false)

if (opt.argv.h) {
  process.stdout.write(opt.help())
  process.exit(0)
}

rjs({count: opt.argv.c, objects: !!opt.argv.o })
  .pipe(ndjson.stringify())
  .pipe(process.stdout)
