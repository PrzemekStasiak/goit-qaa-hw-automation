export class HomePage { // creating new external calss
    logout( ) {
        cy.get('#open-navigation-menu-mobile').scrollIntoView().click(); //scrol / find on page menu and click it
        cy.contains('Log out').scrollIntoView().click();//find /scroll on opened menu LogOut and click it
    }

}