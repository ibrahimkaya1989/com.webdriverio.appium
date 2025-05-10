import { Given, When, Then } from '@wdio/cucumber-framework';
import { expect } from 'expect-webdriverio';

import CalculatorPage from '../pages/calculator.page';

Given('I launch the calculator app', async () => {
    //await driver.pause(1000);  // Waiting for the app to launch
});

When('I add {string} and {string}', async (num1: string, num2: string) => {
    await CalculatorPage.addTwoNumbers(num1, num2);
});

When('I sub {string} and {string}', async (num1: string, num2: string) => {
    await CalculatorPage.subTwoNumbers(num1, num2);
});

When('I multiple {string} and {string}', async (num1: string, num2: string) => {
    await CalculatorPage.mulTwoNumbers(num1, num2);
});

When('I div {string} and {string}', async (num1: string, num2: string) => {
    await CalculatorPage.divTwoNumbers(num1, num2);
});

Then('I clear the result', async () => {
    await CalculatorPage.clickOnTheClearButton();
});

Then('the result should be {string}', async (expectedResult: string) => {
    const result = await CalculatorPage.getResultText();
    expect(result).toContain(expectedResult);
});
