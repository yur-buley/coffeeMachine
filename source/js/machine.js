var panas = new CoffeeMachine(4000, 1500, 300, 150, 100)
var power
  var milk = 70
  var waterCap = 100
  var waterEsp = 80
  var hotMilk = 100
  var hotWater = 100

function CoffeeMachine (pwr, maxWater, maxMilk, maxBeans, maxSugar) {
  $('.info').text('АППАРАТ ВКЛЮЧЕН !')

  var waterVolume = 0
  var milkVolume = 0
  var beansVolume = 0
  var sugarVolume = 0

  var beans = 8
  var sugar = 6

  power = pwr

  this.fullFill = function() {
    waterVolume = maxWater
    milkVolume = maxMilk
    beansVolume = maxBeans
    sugarVolume = maxSugar
    getInfo()
    addIngrs()
  }

  this.fillWater = function () {
    newWater = + $('#add_water').val()
    if ((newWater + waterVolume) < waterEsp) {
      $('.err').html("Неверное количество воды!</br>Добавьте от " + (waterEsp - waterVolume) + " до " + (maxWater - waterVolume) + " мл воды.")
    } else if ((newWater + waterVolume) > maxWater) {
      $('.err').html("Неверное количество воды!</br>Добавьте не более " + (maxWater - waterVolume) + " мл воды.")
    } else {
      waterVolume += newWater
      getInfo()
    }
  }

  this.fillMilk = function () {
    newMilk = + $('#add_milk').val()
    if ((newMilk + milkVolume) < milk) {
      $('.err').html("Неверное количество молока!</br>Добавьте от " + (milk - milkVolume) + " до " + (maxMilk - milkVolume) + " мл молока.")
    } else if ((newMilk + milkVolume) > maxMilk) {
      $('.err').html("Неверное количество молока!</br>Добавьте не более " + (maxMilk - milkVolume) + " мл молока.")
    } else {
      milkVolume += newMilk
      getInfo()
    }
  }

    this.fillBeans = function () {
      newBeans = + $('#add_beans').val()
      if ((newBeans + beansVolume) < beans) {
        $('.err').html("Неверное количество кофейных зёрен!</br>Добавьте от " + (beans - beansVolume) + " до " + (maxBeans - beansVolume) + " г кофейных зёрен.")
      } else if ((newBeans + beansVolume) > maxBeans) {
        $('.err').html("Неверное количество кофейных зёрен!</br>Добавьте не более " + (maxBeans - beansVolume) + " г кофейных зёрен.")
      } else {
        beansVolume += newBeans
        getInfo()
      }
    }

    this.fillSugar = function () {
      newSugar = + $('#add_sugar').val()
      if ((newSugar + sugarVolume) < sugar) {
        $('.err').html("Неверное количество сахара!</br>Добавьте от " + (sugar - sugarVolume) + " до " + (maxSugar - sugarVolume) + " г сахара.")
      } else if ((newSugar + sugarVolume) > maxSugar) {
        $('.err').html("Неверное количество сахара!</br>Добавьте не более " + (maxSugar - sugarVolume) + " г сахара.")
      } else {
        sugarVolume += newSugar
        getInfo()
      }
    }

    this.makeCoffeeCap = function () {
      if (waterVolume < waterCap) {
        $('.err').text ("Недостаточно воды для приготовления напитка.")
        return
      } else if (milkVolume < milk) {
        $('.err').text ("Недостаточно молока для приготовления напитка.")
        return
      } else if (beansVolume < beans) {
        $('.err').text ("Недостаточно кофейных зёрен для приготовления напитка.")
        return
      } else if (sugarVolume < sugar) {
        $('.err').text ("Недостаточно сахара для приготовления напитка.")
        return
      } else {
        var time = getHeatingMilk(milk) + getHeatingWater(waterCap)
        $('.info').text ("Ждите " + Math.ceil(time) + " с до окончания приготовления напитка.")
        btnDisable()
      }

      waterVolume -= waterCap
      milkVolume -= milk
      beansVolume -= beans
      sugarVolume -= sugar

      timerId = setTimeout (function () {
        $('.info').text ("Ваш капучино готов!")
        btnEnable()
      }, time*1000)
    }

    this.makeCoffeeEsp = function () {
      if (waterVolume < waterEsp) {
        $('.err').text ("Недостаточно воды для приготовления напитка.")
        return
      } else if (beansVolume < beans) {
        $('.err').text ("Недостаточно кофейных зёрен для приготовления напитка.")
        return
      } else if (sugarVolume < sugar) {
        $('.err').text ("Недостаточно сахара для приготовления напитка.")
        return
      } else {
        var time = getHeatingWater(waterEsp)
        $('.info').text ("Ждите " + Math.ceil(time) + " с до окончания приготовления напитка.")
        btnDisable()
      }

      waterVolume -= waterEsp
      beansVolume -= beans
      sugarVolume -= sugar

      timerId = setTimeout (function () {
        $('.info').text ("Ваш эспрессо готов!")
        btnEnable()        
      }, time*1000)
    }

    this.makeHotMilk = function () {
      if (milkVolume < hotMilk) {
        $('.err').text ("Недостаточно молока для приготовления напитка.")
        return
      } else {
        var time = getHeatingMilk(hotMilk)
        $('.info').text ("Ждите " + Math.ceil(time) + " с до окончания приготовления напитка.")
        btnDisable()
      }

      milkVolume -= hotMilk
      
      timerId = setTimeout (function () {
        $('.info').text ("Ваше молоко готово!")
        btnEnable()
      }, time*1000)
    }

    this.makeHotWater = function () {
      if (waterVolume < hotWater) {
        $('.err').text ("Недостаточно воды для приготовления напитка.")
        return
      } else {
        var time = getHeatingWater(hotWater)
        $('.info').text ("Ждите " + Math.ceil(time) + " с до окончания приготовления напитка.")
        btnDisable()
      }

      waterVolume -= hotWater

      timerId = setTimeout (function () {
        $('.info').text ("Ваша вода готова!")
        btnEnable()
      }, time*1000)
    }

  function getInfo() {
    $('.info').html('Вода: ' + waterVolume + ' / ' + maxWater + '</br>Молоко: ' + milkVolume + ' / ' + maxMilk + '</br>Зёрна: ' + beansVolume + ' / ' + maxBeans + '</br>Сахар: ' + sugarVolume + ' / ' + maxSugar)
  }  
}