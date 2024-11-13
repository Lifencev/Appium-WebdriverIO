import { expect, browser } from '@wdio/globals'
import welcome from '../pageobjects/welcome.page.js'
import newGame from '../pageobjects/newGame.page.js'
import cards from '../pageobjects/cards.page.js'

const newGameBtnIos = "~example";
const startBtnIos = "~example";
const backBtnIos = "~example";
const addNewPlayerBtnIos = "~example";
const createBtnIos = "~example";
const addSpyBtnIos = "~example";
const closeBtnIos = "~example";

const yourCardHeaderIos = "~example";
const yourCardIos = "~example";

const nicknameInput = "~example";
const nickname = "Ivan";

describe('Testing the start of the game', () => {
    beforeEach(async () => {
        await browser.closeApp(); 
        await browser.launchApp(); 
    });

    it('create new player with valid name', async () => {
        await welcome.clickNewGameButton(newGameBtnIos);
        await newGame.clickAddNewPlayerButton(addNewPlayerBtnIos);
        await newGame.setNicknameInputValue(nicknameInput, nickname);
        await newGame.clickCreateButton(createBtnIos);

        expect(await newGame.isPlayerByNicknameDisplayed(nickname)).toBe(true);
        expect(await newGame.isBackButtonDisplayed(backBtnIos)).toBe(true);
    });

    it('start the game only with 3 created players and 2 spies', async () => {
        await welcome.clickNewGameButton(newGameBtnIos);
        for (let i = 0; i < 3; i++) {
            await newGame.clickAddNewPlayerButton(addNewPlayerBtnIos);
            await newGame.setNicknameInputValue(nicknameInput, `${i}`);
            await newGame.clickCreateButton(createBtnIos);
        }
        await newGame.clickAddSpyButton(addSpyBtnIos);
        await newGame.clickStartButton(startBtnIos);

        expect(await cards.isCloseButtonDisplayed(closeBtnIos)).toBe(true);
        expect(await cards.isYourCardHeaderDisplayed(yourCardHeaderIos)).toBe(true);
        expect(await cards.isYourCardDisplayed(yourCardIos)).toBe(true);
    });
});

