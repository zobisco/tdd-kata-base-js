// https://github.com/brighthr/checkout-kata

const checkout = (array) => {
  /* take an array of strings, and return an integer for the final price
  then build it up so we can start selling products, starting with a single A, multiple As, then into the other product types
  then apply the discounts */
  const count = array.reduce((accumulator, obj) => {
    if (obj >= 1) {
      accumulator += 1
    }
    console.log(accumulator)
    return accumulator
  }, 0)

}

checkout(["A", "B", "B"])
