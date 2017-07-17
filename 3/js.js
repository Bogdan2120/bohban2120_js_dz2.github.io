const numb = document.querySelector('input[type="text"]').value;
const button = document.querySelector("button");
button.addEventListener("click", numEntrance);

function numEntrance() {
    if (numb <= 20) {
        console.log ('1-й подъезд');
    } else if (numb <= 64) {
        console.log ('2-й подъезд');
    } else if (numb <= 80) {
        console.log ('3-й подъезд');
    }
}