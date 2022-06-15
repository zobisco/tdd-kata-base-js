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

  const aRemainder = aCount % 3
  let initialSum_a = aRemainder * 50
  let discount_a = (aCount - aRemainder) / 3
  let specialPrice_a = discount_a * 130
  sum = sum + initialSum_a + specialPrice_a

  const bRemainder = bCount % 2
  let initialSum_b = bRemainder * 30
  let discount_b = (bCount - bRemainder) / 2
  let specialPrice_b = discount_b * 45
  sum = sum + initialSum_b + specialPrice_b

  sum += cCount * 20
  sum += dCount * 15

  return sum
}
