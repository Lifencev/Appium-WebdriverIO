import { browser } from '@wdio/globals'
import Page from './page.js';

const closeBtn = '//android.widget.Button';
const yourCardHeader = "//android.view.View[contains(@content-desc, ', your card')]";
const yourCard = '//android.view.View[@scrollable="true"]';
const yourCardRole = '//android.widget.ImageView[@clickable="true" and @focusable="true"]';

class Cards extends Page {

    public async clickCard( element: string): Promise<void> {
        browser.isAndroid ? await this.clickElement(yourCard) :
        await this.clickElement(element);
    }

    public async dragAndDropCard(): Promise<void> {
        const card = await this.getElement(yourCardRole);
        const location = card.getLocation();
        const startX = location.x + 10; 
        const startY = location.y + 10;
        await card.dragAndDrop({ x: 0, y: -200 });
        await card.touchAction([
            { action: 'press', x: startX, y: startY },
            { action: 'moveTo', x: startX, y: startY - 100 },
            { action: 'release' }
        ]);
    }

    public async waitUntilElementDisplayed(element: string) {
        return browser.isAndroid ? await this.waitUntilElementDisplayed(yourCardRole) :
        await this.waitUntilElementDisplayed(element);
    }

    public async isCloseButtonDisplayed(iosHeader: string): Promise<boolean> {
        return browser.isAndroid ? await this.isElementDisplayed(closeBtn) :
        await this.isElementDisplayed(iosHeader);
    }

    public async isYourCardHeaderDisplayed(iosHeader: string): Promise<boolean> {
        return browser.isAndroid ? await this.isElementDisplayed(yourCardHeader) :
        await this.isElementDisplayed(iosHeader);
    }

    public async isYourCardDisplayed(iosHeader: string): Promise<boolean> {
        return browser.isAndroid ? await this.isElementDisplayed(yourCard) :
        await this.isElementDisplayed(iosHeader);
    }

    public async isYourCardByNameHeaderDisplayed(name: string, element: string): Promise<boolean> {
        const yourCardByNameHeader = `//android.view.View[contains(@content-desc, "${name}, your card")]`;
        return browser.isAndroid ? await this.isElementDisplayed(yourCardByNameHeader) :
        await this.isElementDisplayed(element);
    }

}

export default new Cards()