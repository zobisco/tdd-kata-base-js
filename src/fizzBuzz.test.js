import { fizzbuzz } from "./fizzBuzz.js"

describe("fizzbuzz", () => {
  test("given an input of 15, return: '1,2,fizz,4,buzz,fizz,7,8,fizz,buzz,11,fizz,13,14,fizzbuzz'", () => {
    // Arrange
    const input = 15
    // Act
    const result = fizzbuzz(input)
    // Assert
    expect(result).toBe(
      "1,2,fizz,4,buzz,fizz,7,8,fizz,buzz,11,fizz,13,14,fizzbuzz"
    )
  })

  test("given an input of 1, return: '1'", () => {
    // Arrange
    const input = 1
    // Act
    const result = fizzbuzz(input)
    // Assert
    expect(result).toBe("1")
  })

  test("given an input of 3, return: '1,2,fizz'", () => {
    // Arrange
    const input = 1
    // Act
    const result = fizzbuzz(input)
    // Assert
    expect(result).toBe("1")
  })
})
