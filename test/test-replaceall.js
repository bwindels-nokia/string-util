/*jshint evil: false, bitwise:false, strict: false, undef: true, white: false, plusplus:false, node:true */

var testCase = require('nodeunit').testCase;
var replaceAll = require('../lib/replaceall').replaceAll;
module.exports = testCase({
	"test replaceAll": function(test) {
		test.strictEqual(replaceAll(
			'I am only going to say this once. I am only going to say this once.',
			'once',
			'twice'
		), 'I am only going to say this twice. I am only going to say this twice.', 'replaced string not as expected');
		test.done();
	}
});