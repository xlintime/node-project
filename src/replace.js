var re = /(\w+)\s(\w+)\s(\w+)/;
var str = "John Smith Hello";
var newstr = str.replace(re, "$1$2 || $1$3");
// Smith, John
console.log(newstr);
