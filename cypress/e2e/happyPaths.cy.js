const calculator = require('../support/functions/calculator.js')

beforeEach(() => {
    calculator.goTo()
})

const expectedLastResult = "98.7 + 6 - 5 × 432 ÷ 1.01 =",
expectedInputFieldValue = "-2033.91386139"

describe('happy paths', () => {
  Cypress.on('uncaught:exception', () => false)

  it('completes a calculation by button presses', () => {
    // calculate by button presses: 98.7 + 6 - 5 × 432 ÷ 1.01 = -2033.9138613861385
    calculator.getNumberKey("9").click()
    calculator.getNumberKey("8").click()
    calculator.getOperatorKey(".").click()
    calculator.getNumberKey("7").click()
    calculator.getOperatorKey("+").click()
    calculator.getNumberKey("6").click()
    calculator.getOperatorKey("−").click()
    calculator.getNumberKey("5").click()
    calculator.getOperatorKey("×").click()
    calculator.getNumberKey("4").click()
    calculator.getNumberKey("3").click()
    calculator.getNumberKey("2").click()
    calculator.getOperatorKey("÷").click()
    calculator.getNumberKey("1").click()
    calculator.getOperatorKey(".").click()
    calculator.getNumberKey("0").click()
    calculator.getNumberKey("1").click()

    // the last result is 0 since this is a fresh calculation
    expect(calculator.getLastResult().should("have.text", "Ans = 0"))

    calculator.getOperatorKey("=").click()

    expect(calculator.getLastResult().should("have.text", expectedLastResult))
    expect(calculator.getInputField().should("have.text", expectedInputFieldValue))
  })

  it('completes a calculation by keypad entry', () => {
    // calculate by keypad entry: 98.7 + 6 - 5 * 432 / 1.01 = -2033.9138613861385
    calculator.getInputField().type("98.7+6-5*432/1.01=")

    expect(calculator.getLastResult().should("have.text", expectedLastResult))
    expect(calculator.getInputField().should("have.text", expectedInputFieldValue))

    // redo the calculation, but this time finish with the Enter key
    calculator.getOperatorKey("AC").click()
    calculator.getInputField().type(`98.7+6-5*432/1.01{enter}`)

    expect(calculator.getLastResult().should("have.text", expectedLastResult))
    expect(calculator.getInputField().should("have.text", expectedInputFieldValue))
  })

  it('clears the input field using the AC button', () => {
    // clear by using the AC button
    calculator.getNumberKey("1").click()
    calculator.getNumberKey("2").click()
    calculator.getNumberKey("3").click()
    calculator.getNumberKey("4").click()
    calculator.getOperatorKey("CE").click()

    expect(calculator.getLastResult().should("have.text", "Ans = 0"))
    expect(calculator.getInputField().should("have.text", "123"))

    // clear by Backspace button presses
    calculator.getInputField().type(`{backspace}`)

    expect(calculator.getLastResult().should("have.text", "Ans = 0"))
    expect(calculator.getInputField().should("have.text", "12"))

    // add back a valid digit
    calculator.getInputField().type("5")

    expect(calculator.getLastResult().should("have.text", "Ans = 0"))
    expect(calculator.getInputField().should("have.text", "125"))
  })

  it('represents the last result with the letter input "a"', () => {
    calculator.getInputField().type("789a+6=")

    expect(calculator.getLastResult().should("have.text", "789 Ans + 6 ="))
    expect(calculator.getInputField().should("have.text", "6"))

    calculator.getInputField().type("456+7=a+8=")

    expect(calculator.getLastResult().should("have.text", "Ans + 8 ="))
    expect(calculator.getInputField().should("have.text", "471"))
  })

  it('represents a cosine function with the letter input "c"', () => {
    calculator.getInputField().type("c321=")

    expect(calculator.getLastResult().should("have.text", "cos(321) ="))
    expect(calculator.getInputField().should("have.text", "0.84855432554"))
  })

  it('represents the base of the natural log with the letter input "e"', () => {
    // Lowercase e is the base of the natural logarithm, equal to approximately 2.78.
    calculator.getInputField().type("e*e=")

    expect(calculator.getLastResult().should("have.text", "e × e ="))
    expect(calculator.getInputField().should("have.text", "7.38905609893"))
  })

  it('represents a logarithm function with the letter input "g"', () => {
    calculator.getInputField().type("157g8=")

    expect(calculator.getLastResult().should("have.text", "157 log(8) ="))
    expect(calculator.getInputField().should("have.text", "141.785127958"))

    calculator.getOperatorKey("AC").click()
    calculator.getInputField().type("157g=")

    expect(calculator.getLastResult().should("have.text", "157 log() ="))
    expect(calculator.getInputField().should("have.text", "Error"))
  })

  it('represents a natural logarithm function with the letter input "l"', () => {
    calculator.getInputField().type("157l8=")

    expect(calculator.getLastResult().should("have.text", "157 ln(8) ="))
    expect(calculator.getInputField().should("have.text", "326.472322044"))

    calculator.getOperatorKey("AC").click()
    calculator.getInputField().type("157l=")

    expect(calculator.getLastResult().should("have.text", "157 ln() ="))
    expect(calculator.getInputField().should("have.text", "Error"))
  })

  it('represents an arc cosine function with the letter input "C"', () => {
    calculator.getInputField().type("C4")
    calculator.getOperatorKey("÷").click()
    calculator.getNumberKey("5").click()
    calculator.getOperatorKey("=").click()

    expect(calculator.getLastResult().should("have.text", "arccos(4 ÷ 5) ="))
    expect(calculator.getInputField().should("have.text", "0.64350110879"))
  })
})
