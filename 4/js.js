let obj = {
    ivan: '333',
    ssss: '666',
    gibs: '0000'
}
const button = document.querySelector("button");
const login = document.querySelector(".log");
const pass = document.querySelector (".pass");
button.addEventListener ('click', isCorrect);

function isCorrect () {
  res = (obj[login.value] === pass.value) ? 'Добро пожаловать' : 'ошибка';
  alert (res);
}