function getHeatingWater (w) {
  return w / 1000 * 70 * 4200 / power
}

function getHeatingMilk (m) {
  return m / 1000 * 60 * 3900 / power
}