//Задание 1

var regexp = /^[a-z]{3,10}_[a-z]{3,10}(-\d{4})?@[a-z\d]{1,10}[-.]?[a-z\d]{1,10}\.com$/i;
console.log(regexp.test('name_surname-1234@gmail.com'));

//Задание 2

function phone(num){
  var regexp = /^(\+?375\-?|8\-?0)(25|29|33|44|17)-?(?!0)[0-9]{3}(-?\d{2}){2}$/;
  console.log(regexp.test(num));
}
phone('+375-25-777-77-77');
phone('375299999999');
phone('8-044-444-44-44');
phone('8033-6666666');


//Задание 3
//Вариант 1

function getVowels(text){
  return console.log(text.length - text.split(/[aeiouyаеёиоуыэюя]/igm).join('').length);
}
getVowels('Переписать решение задачи с поиском гласных');
getVowels('prwqcvs');

//Вариант 2

function getVowels(text){
  return console.log((text.match(/[aeiouyаеёиоуыэюя]/igm) || []).length);
}
getVowels('Переписать решение задачи с поиском гласных');
getVowels('prwqcvs');
