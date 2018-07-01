var panas = new CoffeeMachine(4000, 1500, 300, 150, 100)

function CoffeeMachine (power, maxWater, maxMilk, maxBeans, maxSugar) {
  $('.info').text('АППАРАТ ВКЛЮЧЕН !')

  var waterVolume = 0
  var milkVolume = 0
  var beansVolume = 0
  var sugarVolume = 0
  var waterCap = 100
  var waterEsp = 80
  var milk = 70
  var beans = 8
  var sugar = 6

  this.fullFill = function() {
    waterVolume = maxWater
    milkVolume = maxMilk
    beansVolume = maxBeans
    sugarVolume = maxSugar
    console.log(waterVolume, milkVolume, beansVolume, sugarVolume)
    getInfo()
  }

  this.fillWater = function () {
    newWater = + $('#add_water').val()
    if ((newWater + waterVolume) < waterEsp) {
      $('.info').html("Неверное количество воды!</br>Добавьте от " + (waterEsp - waterVolume) + " до " + (maxWater - waterVolume) + " мл воды.")
      return
    } else if ((newWater + waterVolume) > maxWater) {
      $('.info').html("Неверное количество воды!</br>Добавьте не более " + (maxWater - waterVolume) + " мл воды.")
      return
    } else {
      waterVolume += newWater
      getInfo()
    }
    console.log(waterVolume, milkVolume, beansVolume, sugarVolume)
  }

  this.fillMilk = function () {
    newMilk = + $('#add_milk').val()
      if ((newMilk + milkVolume) < milk) {
        $('.info').html("Неверное количество молока!</br>Добавьте от " + (milk - milkVolume) + " до " + (maxMilk - milkVolume) + " мл молока.")
        return
      } else if ((newMilk + milkVolume) > maxMilk) {
        $('.info').html("Неверное количество молока!</br>Добавьте не более " + (maxMilk - milkVolume) + " мл молока.")
        return
      } else {
        milkVolume += newMilk
        getInfo()
      }
    }

    this.fillBeans = function () {
      newBeans = + $('#add_beans').val()
        if ((newBeans + beansVolume) < beans) {
          $('.info').html("Неверное количество кофейных зёрен!</br>Добавьте от " + (beans - beansVolume) + " до " + (maxBeans - beansVolume) + " г кофейных зёрен.")
          return
        } else if ((newBeans + beansVolume) > maxBeans) {
          $('.info').html("Неверное количество кофейных зёрен!</br>Добавьте не более " + (maxBeans - beansVolume) + " г кофейных зёрен.")
          return
        } else {
          beansVolume += newBeans
          getInfo()
        }
    }

    this.fillSugar = function () {
      newSugar = + $('#add_sugar').val()
        if ((newSugar + sugarVolume) < sugar) {
          $('.info').html("Неверное количество сахара!</br>Добавьте от " + (sugar - sugarVolume) + " до " + (maxSugar - sugarVolume) + " г сахара.")
          return
        } else if ((newSugar + sugarVolume) > maxSugar) {
          $('.info').html("Неверное количество сахара!</br>Добавьте не более " + (maxSugar - sugarVolume) + " г сахара.")
          return
        } else {
          sugarVolume += newSugar
          getInfo()
        }
    }

  function getInfo() {
  $('.info').html('Вода: ' + waterVolume + ' / ' + maxWater + '</br>Молоко: ' + milkVolume + ' / ' + maxMilk + '</br>Зёрна: ' + beansVolume + ' / ' + maxBeans + '</br>Сахар: ' + sugarVolume + ' / ' + maxSugar)
}
}





// cd /d d:\Learning_Prog\coffeeMachine
// gulp watch