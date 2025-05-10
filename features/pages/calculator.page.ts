import { $ } from '@wdio/globals'

class CalculatorPage {
    // Define selectors for buttons and display elements
    get buttonZero() { return $(`//android.widget.Button[@text="0"]`); }
    get buttonOne() { return $(`//android.widget.Button[@text="1"]`); }
    get buttonTwo() { return $(`//android.widget.Button[@text="2"]`); }
    get buttonThree() { return $(`//android.widget.Button[@text="3"]`); }
    get buttonFour() { return $(`//android.widget.Button[@text="4"]`); }
    get buttonFive() { return $(`//android.widget.Button[@text="5"]`); }
    get buttonSix() { return $(`//android.widget.Button[@text="6"]`); }
    get buttonSeven() { return $(`//android.widget.Button[@text="7"]`); }
    get buttonEight() { return $(`//android.widget.Button[@text="8"]`); }
    get buttonNine() { return $(`//android.widget.Button[@text="9"]`); }
    get buttonAdd() { return $(`//android.widget.Button[@text="+"]`); }
    get buttonSub() { return $(`//android.widget.Button[@text="−"]`); }
    get buttonMul() { return $(`//android.widget.Button[@text="×"]`); }
    get buttonDiv() { return $(`//android.widget.Button[@text="÷"]`); }
    get buttonEquals() { return $(`//android.widget.Button[@text="="]`); }
    get buttonClear() { return $(`//android.widget.Button[@text="C"]`); }
    get result() { return $(`//*[@resource-id='com.sec.android.app.popupcalculator:id/calc_edt_formula']`); }

    // Method to perform addition operation
    async addTwoNumbers(num1: string, num2: string) {
        await $(`//android.widget.Button[@text="${num1}"]`).click();
        await this.buttonAdd.click();
        await $(`//android.widget.Button[@text="${num2}"]`).click();
        await this.buttonEquals.click();
    }

    // Method to perform subtraction operation
    async subTwoNumbers(num1: string, num2: string) {
        await $(`//android.widget.Button[@text="${num1}"]`).click();
        await this.buttonSub.click();
        await $(`//android.widget.Button[@text="${num2}"]`).click();
        await this.buttonEquals.click();
    }

    // Method to perform multiplication operation
    async mulTwoNumbers(num1: string, num2: string) {
        await $(`//android.widget.Button[@text="${num1}"]`).click();
        await this.buttonMul.click();
        await $(`//android.widget.Button[@text="${num2}"]`).click();
        await this.buttonEquals.click();
    }

    // Method to perform division operation
    async divTwoNumbers(num1: string, num2: string) {
        await $(`//android.widget.Button[@text="${num1}"]`).click();
        await this.buttonDiv.click();
        await $(`//android.widget.Button[@text="${num2}"]`).click();
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
