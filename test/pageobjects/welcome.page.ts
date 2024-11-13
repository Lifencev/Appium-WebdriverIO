import { browser } from '@wdio/globals'
import Page from './page.js';

const newGameBtn = '~NEW GAME';
const gameCodeBtn = '//android.widget.FrameLayout[@resource-id="android:id/content"]/android.widget.FrameLayout/android.widget.FrameLayout/android.view.View/android.view.View/android.view.View/android.view.View/android.widget.Button[2]';
const settingsBtn = '//android.widget.FrameLayout[@resource-id="android:id/content"]/android.widget.FrameLayout/android.widget.FrameLayout/android.view.View/android.view.View/android.view.View/android.view.View/android.widget.Button[3]';
const helpBtn = '//android.widget.Button[@content-desc="?"]';
const okBtn = '//android.widget.Button[@content-desc="OK"]';
const gameCodeHeader = '~Game code';
const gameCodeInput = '//android.widget.EditText';
const cancelBtn = '~CANCEL';
const enterValueError = '~Enter value';

class Welcome extends Page {

    public async clickNewGameButton( element: string): Promise<void> {
        browser.isAndroid ? await this.clickElement(newGameBtn) :
        await this.clickElement(element);
    }

    public async clickGameCodeButton( element: string): Promise<void> {
        browser.isAndroid ? await this.clickElement(gameCodeBtn) :
        await this.clickElement(element);
    }

    public async clickOkButton( element: string): Promise<void> {
        browser.isAndroid ? await this.clickElement(okBtn) :
        await this.clickElement(element);
    }

    public async clickHelpButton( element: string): Promise<void> {
        browser.isAndroid ? await this.clickElement(helpBtn) :
        await this.clickElement(element);
    }

    public async isNewGameButtonDisplayed(iosBtn: string): Promise<boolean> {
        return browser.isAndroid ? await this.isElementDisplayed(newGameBtn) :
        await this.isElementDisplayed(iosBtn);
    }

    public async isOkButtonDisplayed(iosBtn: string): Promise<boolean> {
        return browser.isAndroid ? await this.isElementDisplayed(okBtn) :
        await this.isElementDisplayed(iosBtn);
    }

    public async isGameCodeButtonDisplayed(iosBtn: string): Promise<boolean> {
        return browser.isAndroid ? await this.isElementDisplayed(gameCodeBtn) :
        await this.isElementDisplayed(iosBtn);
    }

    public async isSettingsButtonDisplayed(iosBtn: string): Promise<boolean> {
        return browser.isAndroid ? await this.isElementDisplayed(settingsBtn) :
        await this.isElementDisplayed(iosBtn);
    }

    public async isHelpButtonDisplayed(iosBtn: string): Promise<boolean> {
        return browser.isAndroid ? await this.isElementDisplayed(helpBtn) :
        await this.isElementDisplayed(iosBtn);
    }

    public async isGameCodeHeaderDisplayed(iosBtn: string): Promise<boolean> {
        return browser.isAndroid ? await this.isElementDisplayed(gameCodeHeader) :
        await this.isElementDisplayed(iosBtn);
    }

    public async isEnterValueErrorDisplayed(iosBtn: string): Promise<boolean> {
        return browser.isAndroid ? await this.isElementDisplayed(enterValueError) :
        await this.isElementDisplayed(iosBtn);
    }

    public async isGameCodeInputDisplayed(element: string): Promise<boolean> {
        return browser.isAndroid ? await this.isElementDisplayed(gameCodeInput) :
        await this.isElementDisplayed(element);
    }

    public async isCancelButtonDisplayed(element: string): Promise<boolean> {
        return browser.isAndroid ? await this.isElementDisplayed(cancelBtn) :
        await this.isElementDisplayed(element);
    }
}

export default new Welcome()