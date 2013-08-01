/*jshint evil: false, bitwise:false, strict: false, undef: true, white: false, plusplus:false, node:true */

var testCase = require('nodeunit').testCase;
var zeropad = require('../lib/zeropad').zeropad;
module.exports = testCase({
	"test zeropad": function(test) {
		test.deepEqual(zeropad(5,0), '5', 'zeropadding 5 with 0 digits should just convert to string');
		test.deepEqual(zeropad(5,1), '5', 'zeropadding 5 with 1 digits should just convert to string');
		test.deepEqual(zeropad(0,1), '0', 'zeropadding 0 with 1 digits should just convert to string');
		test.deepEqual(zeropad(0,2), '00', 'zeropadding 0 with 2 digits fails');
		test.deepEqual(zeropad(222,3), '222', 'zeropadding 222 with 3 digits fails');
		test.deepEqual(zeropad(222,2), '222', 'zeropadding 222 with 2 digits should not modify original number');
		test.deepEqual(zeropad(222,6), '000222', 'zeropadding 222 with 6 digits fails');
		test.done();
	}
});