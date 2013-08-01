/*jshint evil: false, bitwise:false, strict: false, undef: true, white: false, plusplus:false, node:true */

function selectSeparator(separators, string, startIndex) {
    var indices = separators.map(function(sep) {
        return {
            index: string.indexOf(sep, startIndex),
            separator: sep
        };
    });
    var closestIndex = indices.reduce(function(min, index) {
        if(index.index === -1) {
            return min;
        }
        if(index.index < min.index) {
            return index;
        }
        return min;
    }, {index: Infinity, separator: ''});

    if(closestIndex.index === Infinity) {
        closestIndex.index = -1;
    }
    return closestIndex;
}

module.exports = {
    /** implementation of String::split that does not split the source string after limit has been reached. */
    split: function(string, separators, limit, allowEmptyParts) {
        var list = [];
        var start = 0, end = {index: 0};
        while(end.index < string.length - 1) {
            end = selectSeparator(separators, string, start);
            if(end.index === -1 || list.length === limit - 1) {
                end.index = string.length;
            }
            if(allowEmptyParts || start !== end.index) {
                list.push(string.substring(start, end.index));
            }
            start = end.index + end.separator.length;
        }
        return list;
    }
};