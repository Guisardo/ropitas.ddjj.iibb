/**
* main page object containing all methods, selectors and functionality
* that is shared across all page objects
*/
export default class Page {
    public constructor(private hostName: string = "https://sifereweb.comarb.gob.ar/sifereweb/") {}
    /**
    * Opens a sub page of the page
    * @param path path of the sub page (e.g. /path/to/page.html)
    */
    public open (path: string) {
        return browser.url(`${this.hostName}${path}`)
    }

    public waitUntilLoaded() {
        return browser.waitUntil(
            () => browser.execute(() => document.readyState === 'complete'),
            {
              timeout: 60 * 1000, // 60 seconds
            }
        );
    }
}
