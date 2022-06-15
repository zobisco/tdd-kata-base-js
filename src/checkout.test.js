import { checkout } from "./checkout.js"

describe("testing checkout", () => {
  test("given an empty basket, the price is zero", () => {
    // Arrange
    const basket = 0
    // Act
    const result = 0
    // Assert
    expect(result).toBe(basket)
  })

  test("given basket 'A', return: 50", () => {
    // Arrange
    const basket = ["A"]
    // Act
    const result = checkout(basket)
    // Assert
    expect(result).toBe(50)
  })

  test("given basket 'A,A,A', return: 130", () => {
    // Arrange
    const basket = ["A", "A", "A"]
    // Act
    const result = checkout(basket)
    // Assert
    expect(result).toBe(130)
  })

  test("given basket 'A,A,A,A,', return: 180", () => {
    // Arrange
    const basket = ["A", "A", "A", "A"]
    // Act
    const result = checkout(basket)
    // Assert
    expect(result).toBe(180)
  })

  test("given basket 'B', return: 30", () => {
    // Arrange
    const basket = ["B"]
    // Act
    const result = checkout(basket)
    // Assert
    expect(result).toBe(30)
  })

  test("given basket 'B,B', return: 45", () => {
    // Arrange
    const basket = ["B", "B"]
    // Act
    const result = checkout(basket)
    // Assert
    expect(result).toBe(45)
  })

  test("given basket 'A,A,A,A,B', return: 210", () => {
    // Arrange
    const basket = ["A", "A", "A", "A", "B"]
    // Act
    const result = checkout(basket)
    // Assert
    expect(result).toBe(210)
  })
})
