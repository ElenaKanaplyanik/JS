//Задание 1//

var arr = ['Vasya', 'Elena', 'Vladimir'];
function newArr(arr) {
  return arr.map(function (item) {
    return {'name': item}
});
}

console.log(newArr(arr));

//Задание 2//

var arr = ['00', '13', '24',];

function time(arr) {
  return arr.reduce(function (accumulator, currentValue) {
      return accumulator + ' : ' + currentValue;
  }, 'Текущее время');
}

console.log(time(arr));

//Задание 3//

var string = 'Гласные'

function getVowels(string) {
  var vowels = ['а', 'е', 'ё', 'и', 'о', 'у', 'ы', 'э', 'ю', 'я'];
  var counter = 0;
  string.split('').forEach(function (item) {
      if (vowels.join('').indexOf(item.toLowerCase()) >= 0) ++counter;
  });
  return counter;

}

console.log(getVowels(string));

//Задание 4//

var text = 'Привет, студент! Студент... Как дела, студент?'

function editText(text) {
  var string = text.split(/[!.?]\s*/).filter(function(item) {
      return item !== '';
  }).forEach(function(item) {
      console.log(item + '. (' +'всего букв: ' + item.split(/[\s,.:;-]/).join('').length + ')');
  });
}

editText(text);

//Задание 5//

function countRepeat(text) {
  var edit = /[\?\.!\s,]/;

  var arr = text.split(edit).filter(function (elem) {
    return elem !== '';
  });

  var result = arr.reduce(function (obj, elem) {
    var n = 0;
    arr.forEach(function (item) {
      if (elem.toLocaleLowerCase() === item.toLocaleLowerCase()) {
        n++;
      }
    });
    obj[elem] = n;
    return obj;
  }, {});

  var maxCount = 0;
  var maxValue = '';
  for (key in result) {
    if (result[key] > maxCount) {
      maxCount = result[key];
      maxValue = key;
    }
  }
  return (
    'Максимальное число повторений у слова "' + maxValue + '" - ' + maxCount
  );
}

console.log(
  countRepeat('Привет, студент! Студент... Как дела, студент?')
);
