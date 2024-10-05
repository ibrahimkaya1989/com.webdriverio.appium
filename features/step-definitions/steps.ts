import { Given, When, Then } from '@wdio/cucumber-framework';
import { expect } from 'expect-webdriverio';

import LoginPage from '../pages/login.page';
import SecurePage from '../pages/secure.page';

//const pages = { login: LoginPage };

Given(/^I am on the (\w+) page$/, async (pageName: string) => {
    //await pages[pageName].open()
    LoginPage.open(pageName)
});

When(/^I login with (\w+) and (.+)$/, async (username: string, password: string) => {
    await LoginPage.login(username, password)
});

Then(/^I should see a flash message saying (.*)$/, async (message: string) => {
    await expect(SecurePage.flashAlert).toBeExisting();
    await expect(SecurePage.flashAlert).toHaveText(expect.stringContaining(message));
});

