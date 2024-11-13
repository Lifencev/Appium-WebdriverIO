import { browser } from '@wdio/globals'
import Page from './page.js';

const rulesHeader = '~Rules';
const backBtn = '~Back';
const cardList = '//android.widget.HorizontalScrollView';

class Help extends Page {

    public async isRulesHeaderDisplayed(iosBtn: string): Promise<boolean> {
        return browser.isAndroid ? await this.isElementDisplayed(rulesHeader) :
        await this.isElementDisplayed(iosBtn);
    }

    public async isBackButtonDisplayed(iosBtn: string): Promise<boolean> {
        return browser.isAndroid ? await this.isElementDisplayed(backBtn) :
        await this.isElementDisplayed(iosBtn);
    }

    public async clickCardById(index: number, element: string): Promise<void> {
        const card = `${cardList}/android.view.View[@index=${index}]`;
        const cardIos = `${cardList}${element}${index}]`;
        browser.isAndroid ? await this.clickElement(card) :
        await this.clickElement(cardIos);
    }

    public async getCardById(index: number, element: string) {
        const card = `${cardList}/android.view.View[@index=${index}]`;
        const cardIos = `${cardList}${element}${index}]`;
        return browser.isAndroid ? await this.getElement(card) :
        await this.getElement(cardIos);
    }
}

export default new Help()