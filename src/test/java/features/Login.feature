Feature: This feature would be used to design the Login page of the application

  Background: Open the Swag Labs application
    Given User is on SauceDemo login page

  @Sainty
  Scenario Outline: To validate the positive login
    When User enters Username "<UserNameval>" and Password "<Passwordval>"
    And User clicks on Login button
    Then User lands on the Product Page

    Examples: 
      | username      | password     |
      | standard_user | secret_sauce |
      | problem_user  | secret_sauce |

  @Sainty
  Scenario Outline: To validate the negative login
    When User enters Username "<UserNameval>" and Password "<Passwordval>"
    And User clicks on Login button
    Then User gets the error message as "Epic sadface: Username and password do not match any user in this service"

    Examples: 
      | username | password     |
      | Rohit    | secret_sauce |
      | Invalid  | secret_sauce |