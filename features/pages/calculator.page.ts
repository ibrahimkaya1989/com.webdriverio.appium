import { $ } from '@wdio/globals'

class CalculatorPage {
    // Define selectors for buttons and display elements
    get buttonFive() { return $(`//android.widget.Button[@text="5"]`); }
    get buttonThree() { return $(`//android.widget.Button[@text="3"]`); }
    get buttonAdd() { return $(`//android.widget.Button[@text="+"]`); }
    get buttonEquals() { return $(`//android.widget.Button[@text="="]`); }
    get result() { return $("//*[@resource-id='com.sec.android.app.popupcalculator:id/calc_edt_formula']"); }

    // Method to perform addition operation
    async addTwoNumbers(num1: string, num2: string) {
        await $(`//android.widget.Button[@text="${num1}"]`).click();
        await this.buttonAdd.click();
        await $(`//android.widget.Button[@text="${num2}"]`).click();
        await this.buttonEquals.click();
    }

    // Method to get the result
    async getResultText() {
        return await this.result.getText();
    }
}

export default new CalculatorPage();
