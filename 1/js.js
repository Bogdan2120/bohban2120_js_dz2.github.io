const year = document.querySelector('input[type="text"]').value;
const button = document.querySelector('button');

button.addEventListener('click', calcYear);

function calcYear() {
    
    if ( year < 17) {
        let x = 20 + year;
        let y = parseInt(x);
        const yy= new Date (y, 1, 13, 13, 13, 00, 0000);
        const  yy70 = new Date (2017, 1, 13, 13, 13, 00, 0000);
        console.log (yy70.getFullYear() - yy.getFullYear()) ;
    } else {
        const yy= new Date (year, 1, 13, 13, 13, 00, 0000);
        const  yy70 = new Date (2017, 1, 13, 13, 13, 00, 0000);
        console.log (yy70.getFullYear() - yy.getFullYear()) ;
    }
}
