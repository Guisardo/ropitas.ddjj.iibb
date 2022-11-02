import Page from "./page";

class SiferePage extends Page {
  public get btnCuitSelector () {
    return $('.boton1');
  }

  public get btnDDJJMensuales() {
    return $('#Listado\\ DDJJ\\ mensuales');
  }

  public get menuDDJJNueva() {
    return $('[href="MostrarNuevaDDJJController.do"]');
  }

  public async getLastDJCell(cellIndex: number) {
    const rows = await $$('#gridbox table tr')[4];
    return await rows.$$('td')[cellIndex];
  }
  public async getLastDJActions(actionIndex: number) {
    const lastDJCell = await this.getLastDJCell(0);
    const actions = await lastDJCell.$$('a')[actionIndex];
    return actions;
  }
  public get lastDDJJMensual() {
    return this.getLastDJCell(1);
  }
  public get cloneLastDDJJMensual() {
    return this.getLastDJActions(0);
  }

  public async openOrCreateDDJJ() {
    await (await this.btnCuitSelector).click();

    await super.waitUntilLoaded();
    if ((await this.btnCuitSelector).isExisting()) {
      await (await this.btnCuitSelector).click();
    }

    await (await this.btnDDJJMensuales).click();
    await super.waitUntilLoaded();
    await browser.pause(5000);

    const lastDDJJDate = (await (await this.lastDDJJMensual).getText()).split('-')[0].trim();
    const today = new Date();
    const neededDDJJDate = `${today.getFullYear()}${today.getMonth()}`;
    if (lastDDJJDate !== neededDDJJDate) {
      console.log("New DJ needed");
    } else {
      console.log("DJ already present");
    }
  }

  public async createDDJJ() {
    await (await this.menuDDJJNueva).click();
  }
  public async openDDJJ() {
    await (await this.cloneLastDDJJMensual).click();
  }
}

export default new SiferePage();
