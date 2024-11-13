import { browser } from '@wdio/globals'
import Page from './page.js';

const startBtn = "~START";
const addNewPlayerBtn = '//android.widget.ImageView[@content-desc="Players"]/android.view.View/android.view.View/android.view.View/android.view.View';
const nicknameInput = '//android.widget.EditText';
const createBtn = '//android.widget.Button[@content-desc="Create"]';
const backBtn = '~Back';
const addSpyBtn = "//android.widget.ImageView[contains(@content-desc, 'Number of spies')]/android.view.View[2]";

class NewGame extends Page {

    public async clickStartButton( element: string): Promise<void> {
        browser.isAndroid ? await this.clickElement(startBtn) :
        await this.clickElement(element);
    }

    public async clickAddNewPlayerButton( element: string): Promise<void> {
        browser.isAndroid ? await this.clickElement(addNewPlayerBtn) :
        await this.clickElement(element);
    }

    public async clickCreateButton( element: string): Promise<void> {
        browser.isAndroid ? await this.clickElement(createBtn) :
        await this.clickElement(element);
    }

    public async clickAddSpyButton( element: string): Promise<void> {
        browser.isAndroid ? await this.clickElement(addSpyBtn) :
        await this.clickElement(element);
    }

    public async setNicknameInputValue(element: string, value: string): Promise<void> {
        browser.isAndroid ? await this.setElementInputValue(nicknameInput, value) :
        await this.setElementInputValue(element, value);
    }

    public async isPlayerByNicknameDisplayed(nickname: string): Promise<boolean> {
        return await this.isElementDisplayed('~' + nickname);
    }

    public async isBackButtonDisplayed(element: string): Promise<boolean> {
        return browser.isAndroid ? await this.isElementDisplayed(backBtn) :
        await this.isElementDisplayed(element);
    } 

}

export default new NewGame()