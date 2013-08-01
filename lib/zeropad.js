/*jshint evil: false, bitwise:false, strict: false, undef: true, white: false, plusplus:false, node:true */

module.exports = {
    zeropad: function(a, wantedNumberOfDigits) {
        var numberOfDigits = 1;
        if(a !== 0) {   //if a is 0, numberOfDigits would be Infinity
            numberOfDigits = Math.floor(Math.log(a) / Math.log(10)) + 1;
        }
        
        var missingZeros = wantedNumberOfDigits - numberOfDigits;
        a = ''+a;
        for(var i = 0; i < missingZeros; ++i) {
            a = '0' + a;
        }
        
        return a;
    }
};