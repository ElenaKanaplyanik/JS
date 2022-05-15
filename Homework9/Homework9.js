//Задание 1//
function Animal(name) {
  var foodAmount = 50;
  var self = this;
  self.name = name;

  function formatFoodAmount() {
      return foodAmount + ' гр.';
  }

  self.feed = function() {
      console.log('Насыпаем в миску ' + self.dailyNorm() + ' корма.');
      
  }

  self.dailyNorm = function(amount) {
      if (!arguments.length) return formatFoodAmount();

      if (amount < 30 || amount > 100) {
          return 'Недопустимое количество корма.';
      }

      foodAmount = amount;
  }
}

function Cat(name) {
  Animal.apply(this, arguments);

  var animalFeed = this.feed;

  this.feed = function() {
      animalFeed();
      this.emotion();
      return this;
  }

  this.emotion = function() {
      console.log('Кот доволен ^_^');
  }

  this.stroke = function() {
    console.log('Гладим кота');
    return this;
  }

}

  var barsik = new Cat('Барсик');
  
  barsik.dailyNorm('85');
  barsik.dailyNorm('75');
  barsik.dailyNorm('50');
  barsik.feed();

  var dog = new Animal('Чарли');
  dog.dailyNorm('51');
  dog.feed();

  barsik.stroke().feed().stroke();

 // Задание 2//
  function Animal(name) {
    this._foodAmount = 50;
  
    this.name = name;
  
    }
  
    Animal.prototype._formatFoodAmount = function formatFoodAmount() {
        return this._foodAmount + ' гр.';
    }

    Animal.prototype.feed = function() {
        console.log('Насыпаем в миску ' + this.dailyNorm() + ' корма.');
        
    }
  
    Animal.prototype.dailyNorm = function(amount) {
        if (!arguments.length) return Animal.prototype._formatFoodAmount.apply(this);
  
        if (amount < 30 || amount > 100) {
            return 'Недопустимое количество корма.';
        }
  
        this._foodAmount = amount;
    }
  
  function Cat(name) {
    Animal.apply(this, arguments);
  }
    Cat.prototype = Object.create(Animal.prototype);
    Cat.prototype.constructor = Cat;

    Cat.prototype.feed = function() {
    Animal.prototype.feed.apply(this);
    console.log('Кот доволен ^_^')
        return this;
    }
  
    Cat.prototype.stroke = function() {
      console.log('Гладим кота');
      return this;
    }
  
    var barsik = new Cat('Барсик');
  
    barsik.dailyNorm('85');
    barsik.dailyNorm('75');
    barsik.dailyNorm('50');
    barsik.feed();
  
    var dog = new Animal('Чарли');
    dog.dailyNorm('51');
    dog.feed();
    
    barsik.stroke().feed().stroke();

    