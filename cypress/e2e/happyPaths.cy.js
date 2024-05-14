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
})
