'use strict'
var detect = require('feature-detect-es6')

if (detect.all('class', 'arrowFunction', 'let', 'const')) {
  module.exports = require('./src/lib/jsdoc2md-stats')
} else {
  module.exports = require('./es5/lib/jsdoc2md-stats')
}
