import { ChainablePromiseElement } from 'webdriverio';

import Page from './page';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {
    public constructor() {
        super("https://auth.afip.gob.ar/contribuyente_/")
    }
    /**
     * define selectors using getter methods
     */
    public get inputUsername () {
        return $('#F1\\:username');
    }

    public get inputPassword () {
        return $('#F1\\:password');
    }

    public get btnNext () {
        return $('#F1\\:btnSiguiente');
    }

    public get btnSubmit () {
        return $('#F1\\:btnIngresar');
    }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    public async login (username: string, password: string) {        
        await this.inputUsername.setValue(username);
        await (await this.btnNext).click();
        await this.inputPassword.setValue(password);
        await this.btnSubmit.click();
    }

    /**
     * overwrite specific options to adapt it to page object
     */
    public open () {
        return super.open('login.xhtml');
    }
}

export default new LoginPage();
