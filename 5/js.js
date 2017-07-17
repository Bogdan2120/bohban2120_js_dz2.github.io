const num1 = document.querySelector(".num1").value;
const num2 = document.querySelector(".num2").value;
const num3 = document.querySelector(".num3").value;
const button = document.querySelector("button");

button.addEventListener("click", maxNumeral);

function maxNumeral() {
    console.log(Math.max(num1, num2, num3));
}