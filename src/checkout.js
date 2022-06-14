// https://github.com/brighthr/checkout-kata

export const checkout = (array) => {
  /* take an array of strings, and return an integer for the final price
  then build it up so we can start selling products, starting with a single A, multiple As, then into the other product types
  then apply the discounts */

  let count = array.reduce(function (allSkus, sku) {
    if (sku in allSkus) {
      allSkus[sku]++
    } else {
      allSkus[sku] = 1
    }
    return allSkus
  }, {})

  let sum = 0
  let aCount = 0
  let bCount = 0
  let cCount = 0
  let dCount = 0

  if (count.A) {
    aCount = count.A
  }
  if (count.B) {
    bCount = count.B
  }
  if (count.C) {
    cCount = count.C
  }
  if (count.D) {
    dCount = count.D
  }

  if (aCount < 3) {
    sum += aCount * 50
  } else if (aCount % 3 === 0) {
    let specialPrice = (aCount / 3) * 130
    sum += specialPrice
  }

  if (bCount < 2) {
    sum += bCount * 30
  } else if (bCount % 2 === 0) {
    let specialPrice = (bCount / 2) * 45
    sum += specialPrice
  }

  sum += cCount * 20
  sum += dCount * 15

  return sum
}
