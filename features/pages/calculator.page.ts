import { $ } from '@wdio/globals'

class CalculatorPage {
    // Define selectors for buttons and display elements
    get buttonZero() { return $(`//*[@resource-id='com.google.android.calculator:id/digit_0']`); }
    get buttonOne() { return $(`//*[@resource-id='com.google.android.calculator:id/digit_1']`); }
    get buttonTwo() { return $(`//*[@resource-id='com.google.android.calculator:id/digit_2']`); }
    get buttonThree() { return $(`//*[@resource-id='com.google.android.calculator:id/digit_3']`); }
    get buttonFour() { return $(`//*[@resource-id='com.google.android.calculator:id/digit_4']`); }
    get buttonFive() { return $(`//*[@resource-id='com.google.android.calculator:id/digit_5']`); }
    get buttonSix() { return $(`//*[@resource-id='com.google.android.calculator:id/digit_6']`); }
    get buttonSeven() { return $(`//*[@resource-id='com.google.android.calculator:id/digit_7']`); }
    get buttonEight() { return $(`//*[@resource-id='com.google.android.calculator:id/digit_8']`); }
    get buttonNine() { return $(`//*[@resource-id='com.google.android.calculator:id/digit_9']`); }
    get buttonAdd() { return $(`//*[@resource-id='com.google.android.calculator:id/op_add']`); }
    get buttonSub() { return $(`//*[@resource-id='com.google.android.calculator:id/op_sub']`); }
    get buttonMul() { return $(`//*[@resource-id='com.google.android.calculator:id/op_mul']`); }
    get buttonDiv() { return $(`//*[@resource-id='com.google.android.calculator:id/op_div']`); }
    get buttonEquals() { return $(`//*[@resource-id='com.google.android.calculator:id/eq']`); }
    get buttonClear() { return $(`//*[@resource-id='com.google.android.calculator:id/clr']`); }
    get result() { return $(`//*[@resource-id='com.google.android.calculator:id/history_result']`); }

    // Method to perform addition operation
    async addTwoNumbers(num1: string, num2: string) {
        await $(`//*[@resource-id='com.google.android.calculator:id/digit_${num1}']`).click();
        await this.buttonAdd.click();
        await $(`//*[@resource-id='com.google.android.calculator:id/digit_${num2}']`).click();
        await this.buttonEquals.click();
    }

    // Method to perform subtraction operation
    async subTwoNumbers(num1: string, num2: string) {
        await $(`//*[@resource-id='com.google.android.calculator:id/digit_${num1}']`).click();
        await this.buttonSub.click();
        await $(`//*[@resource-id='com.google.android.calculator:id/digit_${num2}']`).click();
        await this.buttonEquals.click();
    }

    // Method to perform multiplication operation
    async mulTwoNumbers(num1: string, num2: string) {
        await $(`//*[@resource-id='com.google.android.calculator:id/digit_${num1}']`).click();
        await this.buttonMul.click();
        await $(`//*[@resource-id='com.google.android.calculator:id/digit_${num2}']`).click();
        await this.buttonEquals.click();
    }

    // Method to perform division operation
    async divTwoNumbers(num1: string, num2: string) {
        await $(`//*[@resource-id='com.google.android.calculator:id/digit_${num1}']`).click();
        await this.buttonDiv.click();
        await $(`//*[@resource-id='com.google.android.calculator:id/digit_${num2}']`).click();
        await this.buttonEquals.click();
    }

    // Method to clear the result
    async clickOnTheClearButton() {
        await this.buttonClear.click();
    }

    // Method to get the result
    async getResultText() {
        return await this.result.getText();
    }
}

export default new CalculatorPage();
