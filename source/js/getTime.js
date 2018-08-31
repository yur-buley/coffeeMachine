function getHeatingEsp () {
  return waterEsp / 1000 * 70 * 4200 / power
}

function getHeatingCap () {
  return waterCap / 1000 * 70 * 4200 / power
}

function getHeatingMilk () {
  return milk / 1000 * 60 * 3900 / power
}