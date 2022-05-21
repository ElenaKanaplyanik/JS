/Задание 1//

var arr = [-1, 0, 2, 34, -2];

var filterNumbersArr = arr.filter(function(number) {
  return number > 0;
});

console.log(filterNumbersArr);

//Задание 2//

var arr = [-1, 0, 2, 34, -2];

var foundObj = arr.find(function(number) {
  return number > 0;
});

console.log(foundObj);

//Задание 3//

function isPalindrome(word) {
	var reverse = word.split('').reverse().join('');
	
	return word.toLowerCase() === reverse.toLowerCase();
}

console.log(isPalindrome('шалаШ')); // true
console.log(isPalindrome('привет')); // false

//Задание 4//

function areAnagrams(firstWord, secondWord) {
  if (firstWord.length !== secondWord.length) {
		return false;
	}
	
	return firstWord.toLowerCase().split('').sort().join('') === secondWord.toLowerCase().split('').sort().join('');
}

console.log(areAnagrams('кот', 'Отк')); // true
console.log(areAnagrams('кот', 'атк')); // false
console.log(areAnagrams('кот', 'отко')); // false

//Задание 5//
//вариант 1//

function divideArr(arr, number) {
  var newArr = [];
  var firstNumber = 0;
  var breakdown = number;

  for (var i = 0; i < arr.length; i++) {
    if (arr.length <= number) {
      newArr.push(arr.slice(firstNumber));
      break;
    } else {
      newArr.push(arr.slice(firstNumber, number));
      firstNumber += breakdown;
      number += breakdown;
    }
  }

  return newArr;
}

console.log(divideArr([1, 2, 3, 4], 2)); // [[1, 2], [3, 4]]
console.log(divideArr([1, 2, 3, 4, 5, 6, 7, 8], 3)); // [[1, 2, 3], [4, 5, 6], [7, 8]]

//вариант 2//

function divideArr(arr, number){
  var newArr = []
  while(arr.length) {
    newArr.push(arr.splice(0, number))
  }     
  return newArr;
}
console.log(divideArr([1, 2, 3, 4], 2)); // [[1, 2], [3, 4]]
console.log(divideArr([1, 2, 3, 4, 5, 6, 7, 8], 3)); // [[1, 2, 3], [4, 5, 6], [7, 8]]

//Задание 6//

function degree(number) {
  var sum = 2;

  while (number) {

      if (sum >= number) {
          break;
      }

      sum *= 2;
  } 

  return (sum == number) ? true : false;

}

console.log(degree(16));