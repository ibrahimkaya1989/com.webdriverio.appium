Feature: Basic Calculator Operations
  Background: Start application and clear
    Given I clear the result

  @Calculator
  Scenario: Add two numbers
    When I add "5" and "3"
    Then the result should be "8"

  @Calculator
  Scenario: Sub two numbers
    When I sub "8" and "3"
    Then the result should be "5"

  @Calculator
  Scenario: Mutiple two numbers
    When I multiple "3" and "3"
    Then the result should be "9"

  @Calculator
  Scenario: Div two numbers
    When I div "9" and "3"
    Then the result should be "3"