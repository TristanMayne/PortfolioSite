var mH = document.querySelector("#middleHeight");
var edu = document.querySelector("#education");
console.log(mH.clientHeight);
console.log(edu.clientHeight);
edu.setAttribute("style","height:" + mH.clientHeight + "px")
console.log(edu.clientHeight);