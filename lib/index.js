/*jshint evil: false, bitwise:false, strict: false, undef: true, white: false, plusplus:false, node:true */

var _ = require('underscore');
module.exports = _.extend({},
	require('./split'),
	require('./replaceall'),
	require('./zeropad')
);