import rgbHex from 'rgb-hex';

const calculator = require('../support/functions/calculator.js'),
colors = require('../support/functions/colors.js')

before(() => {
    calculator.goTo()
})

describe('styling verifications', () => {
  Cypress.on('uncaught:exception', () => false)
  it('styling verifications', () => {
    // defaults to 0 in the input field on page load
    expect(calculator.getInputField().should('have.text', '0'))

    // displays all the operator keys
    expect(calculator.getOperatorKey("all clear").should('be.visible'))
    calculator.getOperatorKey('all clear').invoke('css', 'background-color').then((color) => {
          expect(rgbHex(color)).to.eq(colors.gray)
        })
    calculator.getOperatorKey('all clear').invoke('css', 'border-color').then((color) => {
          expect(rgbHex(color)).to.eq(colors.gray)
        })
    expect(calculator.getOperatorKey("divide").should('be.visible'))
    calculator.getOperatorKey('divide').invoke('css', 'background-color').then((color) => {
          expect(rgbHex(color)).to.eq(colors.gray)
        })
        calculator.getOperatorKey('divide').invoke('css', 'border-color').then((color) => {
          expect(rgbHex(color)).to.eq(colors.gray)
        })
    expect(calculator.getOperatorKey("multiply").should('be.visible'))
    calculator.getOperatorKey('multiply').invoke('css', 'background-color').then((color) => {
          expect(rgbHex(color)).to.eq(colors.gray)
        })
        calculator.getOperatorKey('multiply').invoke('css', 'border-color').then((color) => {
          expect(rgbHex(color)).to.eq(colors.gray)
        })
    expect(calculator.getOperatorKey("minus").should('be.visible'))
    calculator.getOperatorKey('minus').invoke('css', 'background-color').then((color) => {
          expect(rgbHex(color)).to.eq(colors.gray)
        })
        calculator.getOperatorKey('minus').invoke('css', 'border-color').then((color) => {
          expect(rgbHex(color)).to.eq(colors.gray)
        })
    expect(calculator.getOperatorKey("plus").should('be.visible'))
    calculator.getOperatorKey('plus').invoke('css', 'background-color').then((color) => {
          expect(rgbHex(color)).to.eq(colors.gray)
        })
        calculator.getOperatorKey('plus').invoke('css', 'border-color').then((color) => {
          expect(rgbHex(color)).to.eq(colors.gray)
        })
    expect(calculator.getOperatorKey("equals").should('be.visible'))
    calculator.getOperatorKey('equals').invoke('css', 'background-color').then((color) => {
      expect(rgbHex(color)).to.eq(colors.blue)
    })
    calculator.getOperatorKey('equals').invoke('css', 'border-color').then((color) => {
      expect(rgbHex(color)).to.eq(colors.blue)
    })
    expect(calculator.getOperatorKey("point").should('be.visible'))
    calculator.getOperatorKey('point').invoke('css', 'background-color').then((color) => {
          expect(rgbHex(color)).to.eq(colors.white)
        })
        calculator.getOperatorKey('point').invoke('css', 'border-color').then((color) => {
          expect(rgbHex(color)).to.eq(colors.white)
        })

    // displays all the number keys
    expect(calculator.getNumberKey("0").should('be.visible'))
    calculator.getNumberKey('0').invoke('css', 'background-color').then((color) => {
          expect(rgbHex(color)).to.eq(colors.white)
        })
        calculator.getNumberKey('0').invoke('css', 'border-color').then((color) => {
          expect(rgbHex(color)).to.eq(colors.white)
        })
    expect(calculator.getNumberKey("1").should('be.visible'))
    calculator.getNumberKey('1').invoke('css', 'background-color').then((color) => {
          expect(rgbHex(color)).to.eq(colors.white)
        })
        calculator.getNumberKey('1').invoke('css', 'border-color').then((color) => {
          expect(rgbHex(color)).to.eq(colors.white)
        })
    expect(calculator.getNumberKey("2").should('be.visible'))
    calculator.getNumberKey('2').invoke('css', 'background-color').then((color) => {
          expect(rgbHex(color)).to.eq(colors.white)
        })
    calculator.getNumberKey('2').invoke('css', 'border-color').then((color) => {
      expect(rgbHex(color)).to.eq(colors.white)
    })
    expect(calculator.getNumberKey("3").should('be.visible'))
    calculator.getNumberKey('3').invoke('css', 'background-color').then((color) => {
      expect(rgbHex(color)).to.eq(colors.white)
    })
    calculator.getNumberKey('3').invoke('css', 'border-color').then((color) => {
      expect(rgbHex(color)).to.eq(colors.white)
    })
    expect(calculator.getNumberKey("4").should('be.visible'))
    calculator.getNumberKey('4').invoke('css', 'background-color').then((color) => {
      expect(rgbHex(color)).to.eq(colors.white)
    })
    calculator.getNumberKey('4').invoke('css', 'border-color').then((color) => {
      expect(rgbHex(color)).to.eq(colors.white)
    })
    expect(calculator.getNumberKey("5").should('be.visible'))
    calculator.getNumberKey('5').invoke('css', 'background-color').then((color) => {
      expect(rgbHex(color)).to.eq(colors.white)
    })
    calculator.getNumberKey('5').invoke('css', 'border-color').then((color) => {
      expect(rgbHex(color)).to.eq(colors.white)
    })
    expect(calculator.getNumberKey("6").should('be.visible'))
    calculator.getNumberKey('6').invoke('css', 'background-color').then((color) => {
      expect(rgbHex(color)).to.eq(colors.white)
    })
    calculator.getNumberKey('6').invoke('css', 'border-color').then((color) => {
      expect(rgbHex(color)).to.eq(colors.white)
    })
    expect(calculator.getNumberKey("7").should('be.visible'))
    calculator.getNumberKey('7').invoke('css', 'background-color').then((color) => {
      expect(rgbHex(color)).to.eq(colors.white)
    })
    calculator.getNumberKey('7').invoke('css', 'border-color').then((color) => {
      expect(rgbHex(color)).to.eq(colors.white)
    })
    expect(calculator.getNumberKey("8").should('be.visible'))
    calculator.getNumberKey('8').invoke('css', 'background-color').then((color) => {
      expect(rgbHex(color)).to.eq(colors.white)
    })
    calculator.getNumberKey('8').invoke('css', 'border-color').then((color) => {
      expect(rgbHex(color)).to.eq(colors.white)
    })
    expect(calculator.getNumberKey("9").should('be.visible'))
    calculator.getNumberKey('9').invoke('css', 'background-color').then((color) => {
      expect(rgbHex(color)).to.eq(colors.white)
    })
    calculator.getNumberKey('9').invoke('css', 'border-color').then((color) => {
      expect(rgbHex(color)).to.eq(colors.white)
    })
  })
})