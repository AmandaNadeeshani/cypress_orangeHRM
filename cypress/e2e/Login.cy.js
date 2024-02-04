import { LoginPage } from "../Pages/login";
const loginobj = new LoginPage();
import loginData from '../fixtures/loginDtata.json'


describe('Login page verification with valid credentials', ()=>{

    it('ValidLogin', ()=>{
        loginobj.OpenURL()
        loginobj.EnterUserName(loginData.username);
        loginobj.EnterPassword(loginData.password);
        loginobj.loginclick();
    })


})