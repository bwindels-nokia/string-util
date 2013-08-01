/*jshint evil: false, bitwise:false, strict: false, undef: true, white: false, plusplus:false, node:true */

module.exports = {
	/** might be a bit slow since it creates a new RegExp object on invocation */
	replaceAll: function(txt, replace, with_this) {
		return txt.replace(new RegExp(replace, 'g'),with_this);
	}
};