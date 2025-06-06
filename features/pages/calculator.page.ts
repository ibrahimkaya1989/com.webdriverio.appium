import { $ } from '@wdio/globals'

class CalculatorPage {
    // Define selectors for buttons and display elements
    get buttonZero() { return $(`//*[contains(@resource-id,'0')]`); }
    get buttonOne() { return $(`//*[contains(@resource-id,'1')]`); }
    get buttonTwo() { return $(`//*[contains(@resource-id,'2')]`); }
    get buttonThree() { return $(`//*[contains(@resource-id,'3')]`); }
    get buttonFour() { return $(`//*[contains(@resource-id,'4')]`); }
    get buttonFive() { return $(`//*[contains(@resource-id,'5')]`); }
    get buttonSix() { return $(`//*[contains(@resource-id,'6')]`); }
    get buttonSeven() { return $(`//*[contains(@resource-id,'7')]`); }
    get buttonEight() { return $(`//*[contains(@resource-id,'8')]`); }
    get buttonNine() { return $(`//*[contains(@resource-id,'9')]`); }
    get buttonAdd() { return $(`//*[contains(@resource-id,'op_add')]`); }
    get buttonSub() { return $(`//*[contains(@resource-id,'op_sub')]`); }
    get buttonMul() { return $(`//*[contains(@resource-id,'op_mul')]`); }
    get buttonDiv() { return $(`//*[contains(@resource-id,'op_div')]`); }
    get buttonEquals() { return $(`//*[contains(@resource-id,'eq')]`); }
    get buttonClear() { return $(`//*[contains(@resource-id,'cl')]`); }
    get result() { return $(`//*[contains(@resource-id,'result_final')]`); }

    // Method to perform addition operation
    async addTwoNumbers(num1: string, num2: string) {
        await $(`//*[contains(@resource-id,"${num1}")]`).click();
        await this.buttonAdd.click();
        await $(`//*[contains(@resource-id,"${num2}")]`).click();
        await this.buttonEquals.click();
    }

    // Method to perform subtraction operation
    async subTwoNumbers(num1: string, num2: string) {
        await $(`//*[contains(@resource-id,"${num1}")]`).click();
        await this.buttonSub.click();
        await $(`//*[contains(@resource-id,"${num2}")]`).click();
        await this.buttonEquals.click();
    }

    // Method to perform multiplication operation
    async mulTwoNumbers(num1: string, num2: string) {
        await $(`//*[contains(@resource-id,"${num1}")]`).click();
        await this.buttonMul.click();
        await $(`//*[contains(@resource-id,"${num2}")]`).click();
        await this.buttonEquals.click();
    }

    // Method to perform division operation
    async divTwoNumbers(num1: string, num2: string) {
        await $(`//*[contains(@resource-id,"${num1}")]`).click();
        await this.buttonDiv.click();
        await $(`//*[contains(@resource-id,"${num2}")]`).click();
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
