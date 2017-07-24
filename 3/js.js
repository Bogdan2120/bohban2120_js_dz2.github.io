function showResult(text) {
    console.log(text);
}

let house = {
    numb : document.querySelector('input[type="text"]').value,
    button : document.querySelector("button"),
    porches : 3,
    porch1 : {
        from : 1,
        to : 20
    },
    porch2 : {
        from : 21,
        to : 65
    },
    porch3 : {
        from : 66,
        to : 80
    },
    error : 'В доме нет такой квартиры',
    info :  'Эта квартира в подъезде № '
}

function numbPorch(number, obj) {
    let result = obj.error;

    for (var i = obj.porches; i > 0; i++) {
        if (number >= obj["porch" + i].from && number <= obj["porch" + i].from) {
            result = obj.info + i;
        }
    }
    return result;
}
house.button.addEventListener('click', setPorch);

function setPorch() {
    let result = numbPorch(house.numb, house);
    showResult(result);
}














// const numb = document.querySelector('input[type="text"]').value;
// const button = document.querySelector("button");
// button.addEventListener("click", numEntrance);

// function numEntrance() {
//     if (numb <= 20) {
//         console.log ('1-й подъезд');
//     } else if (numb <= 64) {
//         console.log ('2-й подъезд');
//     } else if (numb <= 80) {
//         console.log ('3-й подъезд');
//     }
// }