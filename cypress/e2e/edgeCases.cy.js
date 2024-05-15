const calculator = require('../support/functions/calculator.js')

beforeEach(() => {
    calculator.goTo()
})

describe('edge cases', () => {
  Cypress.on('uncaught:exception', () => false)

  it('ignores a leading 0 when the last result is 0', () => {
    calculator.getInputField().type("0123")

    expect(calculator.getLastResult().should("have.text", "Ans = 0"))
    expect(calculator.getInputField().should("have.text", "123"))
  })

  it('represents the result as an exponent when it is very large', () => {
    let entry = "99999999999999×999999999999="
    calculator.getInputField().type(entry)

    expect(calculator.getLastResult().should("have.text", "99999999999999999999999999 ="))
    expect(calculator.getInputField().should("have.text", "1e+26"))
  })

  it('takes a very long input', () => {
    // length of 250 chars
    let entry = "1234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890"

    calculator.getInputField().type(entry)

    expect(calculator.getLastResult().should("have.text", "Ans = 0"))
    expect(calculator.getInputField().should("have.text", entry))
  })

  it('ignores the first of two successive operators', () => {
    let entry = "456+-123="
    calculator.getInputField().type(entry)

    expect(calculator.getLastResult().should("have.text", "456 - 123 ="))
    expect(calculator.getInputField().should("have.text", "333"))
  })

  it('clears the input when the page is refreshed', () => {
    cy.reload()

    expect(calculator.getLastResult().should("have.text", "  "))
    expect(calculator.getInputField().should("have.text", "0"))
  })
})
