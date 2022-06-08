//Задание 1

var initialObj = {
  string: 'Vasya',
  number: 30,
  boolean: true,
  undefined: undefined,
  null: null,
  array: [1, 2, 3],
  object: {
      string2: 'Petrov',
      object2: {
          array2: [{}, {}]
      },
      object3: {}
  },
  method: function() {
      alert('Hello');
  }
};

function deepClone(clone) {

  if ( typeof(clone) === 'object' ) {
      if ( clone === null ) {
          return clone;
      }

      var newClone = Array.isArray(clone) ? [] : {};

      for ( key in clone ) {
        newClone[key] = deepClone(clone[key]);
      }

      return newClone;
  } else {

      return clone;
  }
	
}

var clonedObj = deepClone(initialObj);

clonedObj.object.object2.array2[1].name = 'Vasya';
clonedObj.array.push(2);

console.log(initialObj);
console.log(clonedObj);

//Задание 2

var initialObj = {
  string: 'Vasya',
  number: 30,
  boolean: true,
  undefined: undefined,
  null: null,
  array: [1, 2, 3],
  object: {
      string2: 'Petrov',
      object2: {
          array2: [{}, {}]
      },
      object3: {}
  },
  method: function() {
      alert('Hello');
  }
};

var comparedObj = {
	string: 'Vasya',
  number: 30,
  boolean: true,
  undefined: undefined,
  null: null,
  array: [1, 2, 3],
  object: {
      string2: 'Petrov',
      object2: {
          array2: [{}, {}]
      },
      object3: {}
  },
  method: function() {
      alert('Hello');
  }
};

var bool = true;

function comparison(initialObj, comparedObj) {
    if(Object.keys(initialObj).length !== Object.keys(comparedObj).length) {
      bool = false;
      return bool;
    }
    for (var key in initialObj) {
      if (typeof initialObj[key] === 'object' && initialObj[key] != null) {
        comparison(initialObj[key], comparedObj[key]);
      } else if (typeof initialObj[key] === 'function' && typeof comparedObj[key] === 'function') {
        if ((initialObj[key].toString() !== comparedObj[key].toString())) {
          bool = false;
          return bool;
        }
      } else if ((initialObj[key] !== comparedObj[key])) {
        bool = false;
        return bool;
      }
    }
    return bool;
  } 

comparedObj.object.object2.array2[1].name = 'Vasya';
comparedObj.array.push(2);
  
console.log(comparison(initialObj, comparedObj));
console.log(initialObj);
console.log(comparedObj);
