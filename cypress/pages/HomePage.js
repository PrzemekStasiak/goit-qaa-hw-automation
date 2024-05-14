export class HomePage { // creating new external calss
    logout( ) {
        cy.get('#open-navigation-menu-mobile').click(); //click menu
        cy.contains('Log out').click();//click Log out on open penu
    }

}