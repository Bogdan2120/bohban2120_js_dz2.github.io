const num1 = document.querySelector(".inp1").value;
const num2 = document.querySelector(".inp2").value;
const button = document.querySelector("button");
button.addEventListener("click", maxNumber);

function maxNumber(){
    console.log(Math.max(num1, num2));
}

