import { Given, When, Then } from '@wdio/cucumber-framework';
import { expect } from 'expect-webdriverio';

import CalculatorPage from '../pages/calculator.page';

Given('I launch the calculator app', async () => {
    //await driver.pause(1000);  // Waiting for the app to launch
});

When('I add {string} and {string}', async (num1: string, num2: string) => {
    await CalculatorPage.addTwoNumbers(num1, num2);
});

Then('the result should be {string}', async (expectedResult: string) => {
    const result = await CalculatorPage.getResultText();
    expect(result).toContain(expectedResult);
});
