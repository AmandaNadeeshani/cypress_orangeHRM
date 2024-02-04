export class LoginPage{
     Locators={
        username:'input[name="username"]',
        password:'input[name="password"]',
        btn:".oxd-button"

     }

     OpenURL(){
        cy.visit(Cypress.env('URL'))
     }

     EnterUserName(uname){
        cy.get(this.Locators.username).type(uname)
     }

     EnterPassword(pwd){
        cy.get(this.Locators.password).type(pwd)
     }

     loginclick(){
        cy.get(this.Locators.btn).click()
     }

}