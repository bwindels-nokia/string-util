/*jshint evil: false, bitwise:false, strict: false, undef: true, white: false, plusplus:false, node:true */

var testCase = require('nodeunit').testCase;
var split = require('../lib/split').split;
module.exports = testCase({
	"test split": function(test) {
		test.deepEqual(split('hello world this is pretty big', [' '], 3), [ 'hello', 'world', 'this is pretty big' ], 'test dont split after limit has been reached');
		test.deepEqual(split('hello', [' '], 3), [ 'hello' ], 'return array with string when no separators');
		test.deepEqual(split('hello world this is huge!', [' '], 300), [ 'hello', 'world', 'this', 'is', 'huge!' ], 'split correctly when limit > # separators');
		test.deepEqual(split('doobedoobeda', ['be'], 300), [ 'doo', 'doo', 'da' ], 'non whitespace separator');
		test.deepEqual(split('hello   world    lala be', [' '], 3), [ 'hello', 'world', '   lala be' ], 'dont touch separators after limit has been reached');
		test.deepEqual(split('hello world this is pretty big', [' '], 3), [ 'hello', 'world', 'this is pretty big' ], 'test dont split after limit has been reached');
		test.deepEqual(split('hello   world    lala be', [' '], 3, true), [ 'hello', '', ' world    lala be' ], 'test separator repetition part of resulting strings with allowEmptyParts=true');
		test.done();
	},
	"test multiple separators": function(test) {
		test.deepEqual(split('pomladebambamlahoplawoooo', ['la', 'bambam'], 3, false), ['pom', 'de', 'lahoplawoooo']);
		test.done();
	}
});