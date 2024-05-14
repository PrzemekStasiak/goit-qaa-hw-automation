import { Login } from "../pages/Login"; // import Login.js 
import { HomePage } from "../pages/HomePage";//import HomePage.js

const loginPage = new Login(); //constructor of ne class Login
const homePage = new HomePage();///constructor of ne class HomePage

const testSite = "https://www.edu.goit.global/account/login" // constnt of page to be tested

const testEmail1 = "user888@gmail.com";  //test data 1
const testPass1 = "1234567890"; //test data 1

const testEmail2 = "testowyqa@qa.team";//test data 2
const testPass2 = "QA!automation-1";//test data 2

describe('Testing the login page', () =>{
    beforeEach(()=>{
        loginPage.visit(testSite);// before every test enetr site using external class to visit tets page
    })
    afterEach(()=>{
        homePage.logout();//after every test logout using external data to logout to homepage
    })
    it ('test 1: shold login and logout with test data 1',() =>{
        loginPage.login (testEmail1, testPass1);//using external class login with test data 1 
    })

    it ('test 2: shold login and logout with test data 2',() =>{
        loginPage.login (testEmail2, testPass2);//using external class login with test data 2
    })
}) 