Feature: Basic Calculator Operations

  @Calculator
  Scenario: Add two numbers
    Given I launch the calculator app
    When I add "5" and "3"
    Then the result should be "8"
