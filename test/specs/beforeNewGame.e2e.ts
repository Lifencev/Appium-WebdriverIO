import { expect, browser } from '@wdio/globals'
import welcome from '../pageobjects/welcome.page.js'
import help from '../pageobjects/help.page.js'

const newGameBtnIos = "~example";
const gameCodeBtnIos = "~example";
const settingsBtnIos = "~example";
const cancelBtnIos = "~example";
const backBtnIos = "~example";
const helpBtnIos = "~example";
const okBtnIos = "~example"

const gameCodeHeaderIos = "~example";
const rulesHeaderIos = "~example";

const gameCodeInputIos = "~example";
const enterValueErrorIos = "~example";
const cardIos = "~example";
const cardNames: string[] = ["About\nTab 1 of 10", "Start\nTab 2 of 10", "Spy\nTab 3 of 10", "Not a spy\nTab 4 of 10"];

describe('Testing of welcome page', () => {
    beforeEach(async () => {
        await browser.closeApp(); 
        await browser.launchApp(); 
    });
    
    it('check that all buttons on the welcome page are present', async () => {
        expect(await welcome.isNewGameButtonDisplayed(newGameBtnIos)).toBe(true);
        expect(await welcome.isSettingsButtonDisplayed(settingsBtnIos)).toBe(true);
        expect(await welcome.isHelpButtonDisplayed(helpBtnIos)).toBe(true);
        expect(await welcome.isGameCodeButtonDisplayed(gameCodeBtnIos)).toBe(true);
    });

    it('connect to the game with an empty key (-)', async () => {
        await welcome.clickGameCodeButton(gameCodeBtnIos);
        expect(await welcome.isGameCodeHeaderDisplayed(gameCodeHeaderIos)).toBe(true);
        expect(await welcome.isGameCodeInputDisplayed(gameCodeInputIos)).toBe(true);
        expect(await welcome.isCancelButtonDisplayed(cancelBtnIos)).toBe(true);
        await welcome.clickOkButton(okBtnIos);
        expect(await welcome.isEnterValueErrorDisplayed(enterValueErrorIos)).toBe(true); 
    });

    it('check first 4 card names in the help section', async () => {
        await welcome.clickHelpButton(helpBtnIos);
        expect(await help.isBackButtonDisplayed(backBtnIos)).toBe(true);
        expect(await help.isRulesHeaderDisplayed(rulesHeaderIos)).toBe(true);

        for (let i = 0; i < 4; i++) {
            await help.clickCardById(i, cardIos);
            const card = await help.getCardById(i, cardIos);
            const cardName = await card.getAttribute('content-desc');
            expect(cardName).toBe(cardNames[i]);
        }
    });
});