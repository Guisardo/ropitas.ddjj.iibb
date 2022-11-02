import Page from "./page";

class AfipPage extends Page {

  public get misServiciosTab() {
    return $('li[title="Mis Servicios"]');
  }

  public get sifereCard() {
    return $('[title="comarb_sifereweb_ddjj"]');
  }

  public async openSifereTab() {
    await (await this.misServiciosTab).click();

    const afipPortalWindow = await driver.getWindowHandle();
    console.error({afipPortalWindow});
    
    await (await this.sifereCard).click();
    
    // get all GUID's
    let allGUIDs = []
    await driver.waitUntil(async () => {
      allGUIDs = await driver.getWindowHandles();
      return allGUIDs.length > 1;
    })
        
    let sifereWindow = '';
    // check all GUID's and see which one is the child
    for (let i = 0; i < allGUIDs.length; i++) {
      if (allGUIDs[i] !== afipPortalWindow) {
        sifereWindow = allGUIDs[i];
      }
    }
    
    // switch to child tab
    await driver.switchToWindow(
      sifereWindow
    );
  }

}

export default new AfipPage();
