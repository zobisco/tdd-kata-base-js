// 😱 blank canvas syndrome!!!
// export const fizzbuzz = (input) => {
//   let output = ""
//   for (let i = 1; i <= input; i++) {
//     if (i % 15 === 0) {
//       output += "fizzbuzz"
//     } else if (i % 3 === 0) {
//       output += "fizz"
//     } else if (i % 5 === 0) {
//       output += "buzz"
//     } else {
//       output += i
//     }
//     output += ","
//   }
//   const editedText = output.slice(0, -1) //'abcde'
//   return editedText
// }

export const fizzbuzz = (input) => {
  let array = []
  // if (input === 1) {
  //   return input.toString()
  // }
  for (let i = 1; i <= input; i++) {
    if (i % 15 === 0) {
      array.push("fizzbuzz")
    } else if (i % 3 === 0) {
      array.push("fizz")
    } else if (i % 5 === 0) {
      array.push("buzz")
    } else {
      array.push(i)
    }
  }
  return array.toString()
}
