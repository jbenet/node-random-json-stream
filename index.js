var slump = require('slump')
var Readable = require('stream').Readable

module.exports = function(opts) {
  opts = opts || {}
  var objects = !!opts.objects || false
  var count = parseInt(opts.count || 0, 10)
  if (count < 0 || isNaN(count)) throw new Error("count must be >= 0")

  var infinite = count == 0 || count == Infinity
  var rand = objects ? slump.obj : randjson

  var r = new Readable({objectMode: true})
  r._read = function () {
    r.push(rand())
    if (!infinite && --count == 0) {
      r.push(null) // done
    }
  }
  return r
}

function randjson() {
  while (true) {
    var o = slump.json()
    if (o != null)
      return o
  }
}
