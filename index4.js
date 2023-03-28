// Longest Common Prefix
var lengthOfLastWord = function(s) {
    let arr=s.trim(" ").split(" ");
    
    return arr[(arr.length-1)].length;
};

console.log(lengthOfLastWord("Hello world"));
var longestCommonPrefix = function(strs) {
    if(strs.length===0){
   return "";
 }

 let prefix = strs[0];

 for (let i = 1; i < strs.length; i++) {
   while (strs[i].indexOf(prefix) !== 0) {
     prefix = prefix.substring(0, prefix.length - 1);
     if (prefix === "") {
       return "";
     }
   }
 }

 return prefix;
};

console.log(longestCommonPrefix(['flower','flow','flying']));