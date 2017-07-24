function showResult(text) {
    console.log(text);
}
//dz 1
console.log('==============DZ1==================');
let evens = '';
for (var i = 0; i < 101; i = i + 2) {
   evens += i + ',';
}
showResult(evens);
console.log('===============DZ2=================');
//dz2
let evens1 = '';
for (var i = 200; i >= 0 ; i--) {
       evens1 += i + ',';
}
showResult(evens1);
  
console.log('===============DZ3======================');

//dz3
let sum = 0;
let evens2 = '';
for (var i = 0; i <= 100; i++) {
    let res = sum += i;
    evens2 += res + ',';
}
showResult(evens2);

//dz4 

const num = document.querySelector('.num').value;
const exponent = document.querySelector('.st').value;
const butt = document.querySelector('button');
butt.addEventListener('click', addSt); 
let pow = num;
let evens3 = '';
function addSt() {
    for (var i = 1; i < exponent ; i++) {
      let res = pow *= num;
      evens3 += res + ',';
}
    console.log('===============DZ4======================');
    showResult(evens3);
}


console.log('===============DZ5======================');

// dz5 
for (var i = 0; i < 10; i++) {
    console.log(i + ' * 7 = ' + i * 7)
}


console.log('===============DZ6======================');

// dz 6
let evens4 = '';
for (var i = 0; i <= 50; i++) {
    evens4 += i + ',';
}
showResult(evens4);

// dz7
const parent = document.querySelector('div');
function showResultInDOM(parentDOM, tagString, text) {
   let elem = document.createElement(tagString);
   elem.textContent = text;
   parentDOM.appendChild(elem);
}
var res = "";
for (var i = 1000; i < 2000; i++) {
    res += '&#' + i + '; ';
} 
showResultInDOM(parent, 'p', res);