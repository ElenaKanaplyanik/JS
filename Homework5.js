/*Задание 1*/

function isEmpty(obj) {
for ( var k in obj ){
return false;
}
return true;
}

/*Задание 2*/

var x = prompt('Введите число');

function pow(x, n) {
  var multiplication = x;

  for (var i = 1; i < n; i++) {
    multiplication *= x;
  }

  return multiplication;
}

do {
  var n = prompt('Введите степень (целое число, большее 1)');
} while ((n < 1) || (n % 1 !== 0));  
  alert( pow(x, n) );



/*Задание 3*/
/*с использованием цикла*/
      var n = +prompt('Введите число');

      function sumTo(n) {
        var sum = 0;
      
        for (var i = 1; i <= n; i++) {
          sum += i;
        }
      
        return sum;
      }
     
        alert( sumTo(n) );
      

/*через рекурсию, sumTo(n) = n + sumTo(n-1) для n > 1*/
      var n = +prompt('Введите число');

      function sumTo(n) {
        
      
        if (n == 1){

        return 1;
      } else{
        return n + sumTo(n-1);
      }
      }
     
        alert( sumTo(n) );
        
      



  /* с использованием формулы для суммы арифметической прогрессии*/
       var n = +prompt('Введите число');

       function sumTo(n) {
         
       
         return (n*(n+1)/2);
       }
      
         alert( sumTo(n) );
         

/*Ответы на вопросы:
 Какой вариант решения самый быстрый? Самый медленный? Почему?
 Вариант с использованием формулы для суммы арифметической прогрессии самый быстрый, потому что 
 он использует только 3 операции для любого числа n (умножить, прибавить, разделить)
 Вариант с рекурсией самый медленный, потому что постоянно идёт вложенный вызов фукнции, в отличие от цикла. Использовать рекурсию затратно по памяти.
 
 Можно ли при помощи рекурсии посчитать sumTo(100000)? Если нет, то почему?
 Не вычислится. Появится ошибка превышения макисмального размера стека, так как существуют ограничения движком JavaScript */


 /*Задание 4*/
   
 var arr = [
  {     
    name: "John",
    age: 30
  }, 5, 7, 
  [4, [2], 8, [1, 3], 2],  
  [9, []], 'gtnz', ' ', "", NaN,
  1, 8, null
]

function treeSum(arr) {

  var sum = 0;

  for (var i = 0; i < arr.length; i++) {

  var item = arr[i];

  if ((typeof(item) == 'number') && (!isNaN(item))){

   sum += item;

  } else if ((typeof(item) == 'object') && (item != null)) {

   sum += treeSum(item);

   } 
      
  }
  return sum
}
console.log(treeSum(arr));