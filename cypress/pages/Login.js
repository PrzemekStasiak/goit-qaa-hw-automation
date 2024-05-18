export class Login {  // creating external class to log in in test site
    visit(testSite) { //visit site
        cy.visit(testSite)
    }

    login(email, password) {  //login to site with test data
        cy.get('#user_email').type(email); //type email in email box
        cy.get('#user_password').type(password);// type password in password box
        cy.contains('Log in').click(); //click log in button
    }
}