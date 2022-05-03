  function Cat(name) {
    this.name = name;
    var foodAmount = 50;
  
    this.feed = function() {
      console.log('Насыпаем в миску ' + formatFoodAmount() +' корма.');
    }
    
  
    this.dailyNorm = function(amount) {
      if (!arguments.length) return formatFoodAmount();
  
      if (amount < 50 || amount > 100) {
          throw new Error('Значение должно быть не меньше 50 гр. или не больше 100 гр.');
      }
  
      foodAmount = amount;
    }
  
  
    function formatFoodAmount() {
      return foodAmount + ' гр.';
    }
  
   
  }
  
  var barsik = new Cat('Барсик');
  
  barsik.dailyNorm('85');
  barsik.dailyNorm('75');
  barsik.dailyNorm('50');
  barsik.feed();