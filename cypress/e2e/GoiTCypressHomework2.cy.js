const testSite = "https://www.edu.goit.global/account/login"
const testEmail1 = "user888@gmail.com"
const testPass1 = "1234567890"

describe("Homework 2 testing GoIT webaplication", ()=>{
  it("visit testing Webapp with fisrt data - Test 1",()=>{
    cy.visit("https://www.edu.goit.global/account/login")// ener site
    cy.get("#user_email").type("user888@gmail.com");// find user email field and type "user888@gmail.com"
    cy.get("#user_password").type("1234567890");// find usser_password and type "1234567890")
    cy.get(".eckniwg2").click();// click login button
    cy.get('#open-navigation-menu-mobile').scrollIntoView().click();// scrolpage to see rightcorner button and click it
    cy.get(':nth-child(12) > .next-bve2vl').scrollIntoView().click();// scrolpage to see Logout button and click it
  });
  it("visit testing Webapp with fisrt data - Test 2", ()=>{
    cy.visit("https://www.edu.goit.global/account/login")// ener site
    cy.logIn("testowyqa@qa.team", "QA!automation-1");// use external funkcjon to log inn writed in commands.js
    cy.get('#open-navigation-menu-mobile').scrollIntoView().click();// scrolpage to see rightcorner button and click it
    cy.get(':nth-child(8) > .next-bve2vl').scrollIntoView().click();// scrolpage to see Logout and click it
  });
})

