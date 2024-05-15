function getInputField() {
    return cy.get("span#cwos", { timeout: 15000 })
}

function getLastResult() {
    return cy.get("span[jsname=ubtiRe]")
}

function getNumberKey(text) {
    let locator
    switch(text) {
        case "0":
            locator = "bkEvMb"
            break
        case "1":
            locator = "N10B9"
            break
        case "2":
            locator = "lVjWed"
            break
        case "3":
            locator = "KN1kY"
            break
        case "4":
            locator = "xAP7E"
            break
        case "5":
            locator = "Ax5wH"
            break
        case "6":
            locator = "abcgof"
            break
        case "7":
            locator = "rk7bOd"
            break
        case "8":
            locator = "T7PMFe"
            break
        default: // 9
            locator = "XoxYJ"
            break
    }
    return cy.get(`div[jsname=${locator}]`)
}

function getOperatorKey(text) {
    let locator
    switch(text) {
        case "AC":
            locator = "all clear"
            break
        case "CE":
            locator = "clear entry"
            break
        case "÷":
            locator = "divide"
            break
        case "×":
            locator = "multiply"
            break
        case "−":
            locator = "minus"
            break
        case "+":
            locator = "plus"
            break
        case "=":
            locator = "equals"
            break
        case ".":
            locator = "point"
            break
        default:
            break
    }
    return cy.get(`div[aria-label="${locator}"]`)
}

function goTo() {
    cy.visit("https://www.google.com")
    cy.get("textarea[title=Search]").clear().type(`calculator{enter}`)
    getInputField()
}

module.exports = { getInputField, getLastResult, getNumberKey, getOperatorKey, goTo }
