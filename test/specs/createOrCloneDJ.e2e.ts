import afipPage from '../pageobjects/afip.page';
import LoginPage from  '../pageobjects/login.page';
import SecurePage from '../pageobjects/secure.page';
import siferePage from '../pageobjects/sifere.page';
import { config } from "dotenv";
config()

describe('My Login application', () => {
    it('should login with valid credentials', async () => {
        await LoginPage.open();
        await LoginPage.login(
            process.env.AFIP_CUIT,
            process.env.AFIP_PASS    
        );

        await afipPage.openSifereTab();
        
        await siferePage.openOrCreateDDJJ();
        await browser.debug();
        //await siferePage.open();

//        await expect(SecurePage.flashAlert).toBeExisting();
//        await expect(SecurePage.flashAlert).toHaveTextContaining(
//            'You logged into a secure area!');
    });
});


