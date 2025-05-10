Feature: Basic Calculator Operations
  Background: Start application and clear
    Given I launch the calculator app
    And I clear the result

  @Calculator
  Scenario: Add two numbers
    Given I launch the calculator app
    When I add "5" and "3"
    Then the result should be "8"

  @Calculator
  Scenario: Sub two numbers
    Given I launch the calculator app
    When I sub "8" and "3"
    Then the result should be "5"

  @Calculator
  Scenario: Mutiple two numbers
    Given I launch the calculator app
    When I multiple "3" and "3"
    Then the result should be "9"

  @Calculator
  Scenario: Div two numbers
    Given I launch the calculator app
    When I div "9" and "3"
    Then the result should be "3"