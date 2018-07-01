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
  }
}
