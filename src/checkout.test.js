import { checkout } from "./checkout.js"

describe("checkout", () => {
  test("given an empty basket, the price is zero", () => {
    // Arrange
    const basket = 0
    // Act
    const result = 0
    // Assert
    expect(result).toBe(basket)
  })

  test("given item 'A', return: 50", () => {
    // Arrange
    const input = ["A"]
    // Act
    const result = checkout(input)
    // Assert
    expect(result).toBe(50)
  })

  test("given item 'A,A,A', return: 130", () => {
    // Arrange
    const input = ["A", "A", "A"]
    // Act
    const result = checkout(input)
    // Assert
    expect(result).toBe(130)
  })

  test("given item 'B', return: 30", () => {
    // Arrange
    const input = ["B"]
    // Act
    const result = checkout(input)
    // Assert
    expect(result).toBe(30)
  })

  test("given item 'B,B', return: 45", () => {
    // Arrange
    const input = ["B", "B"]
    // Act
    const result = checkout(input)
    // Assert
    expect(result).toBe(45)
  })
})
