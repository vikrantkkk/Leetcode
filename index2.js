// Find the Index of First Occurrence in a String
var strStr = function(haystack, needle) {
    let value=haystack.toLowerCase().indexOf(needle.toLowerCase());
    return value;
};

console.log(strStr("sadhosad",'sad'));