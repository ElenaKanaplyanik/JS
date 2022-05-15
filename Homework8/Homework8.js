function newObject(obj) {
    var firstName = [];
    var duplicates = {};
  
    for (var key in obj) {
      obj[key + '_length'] = obj[key].length;
  
      firstName.push(obj[key]);
  
      delete obj[key];
    }
  
    for (var i = 0; i < firstName.length; i++) {
      var sum = 0;
      for (var j = 0; j < firstName.length; j++) {
        if (firstName[i] === firstName[j]) {
          sum++;
          if (sum > 1) {
            duplicates[firstName[i]] = sum + ' times';
          }
        }
      }
    }
  
    obj['Duplicated values'] = duplicates;
    return obj;
  }
  
  var obj={
    name_one: 'Vasya',
    name_two: 'Piotr',
    name_three: 'Fedya',
    name_four: 'Piotr',
    name_five: 'Fedya',
    name_seven: 'Fedya',
  };
  
  console.log(newObject(obj));