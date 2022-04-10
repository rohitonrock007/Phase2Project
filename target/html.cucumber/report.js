$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/java/features/Login.feature");
formatter.feature({
  "name": "This feature would be used to design the Login page of the application",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "To validate the positive login",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Sainty"
    }
  ]
});
formatter.step({
  "name": "User enters Username \"\u003cusername\u003e\" and Password \"\u003cpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "User clicks on Login button",
  "keyword": "And "
});
formatter.step({
  "name": "User lands on the Product Page",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ]
    },
    {
      "cells": [
        "standard_user",
        "secret_sauce"
      ]
    },
    {
      "cells": [
        "problem_user",
        "secret_sauce"
      ]
    }
  ]
});
formatter.background({
  "name": "Open the Swag Labs application",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User is on SauceDemo login page",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginSteps.user_is_on_sauce_demo_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "To validate the positive login",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Sainty"
    }
  ]
});
formatter.step({
  "name": "User enters Username \"standard_user\" and Password \"secret_sauce\"",
  "keyword": "When "
});
formatter.match({
  "location": "LoginSteps.user_enters_username_and_password(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Login button",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.user_clicks_on_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User lands on the Product Page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.user_lands_on_the_product_page()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "Open the Swag Labs application",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User is on SauceDemo login page",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginSteps.user_is_on_sauce_demo_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "To validate the positive login",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Sainty"
    }
  ]
});
formatter.step({
  "name": "User enters Username \"problem_user\" and Password \"secret_sauce\"",
  "keyword": "When "
});
formatter.match({
  "location": "LoginSteps.user_enters_username_and_password(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Login button",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.user_clicks_on_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User lands on the Product Page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.user_lands_on_the_product_page()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "To validate the negative login",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Sainty"
    }
  ]
});
formatter.step({
  "name": "User enters Username \"\u003cusername\u003e\" and Password \"\u003cpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "User clicks on Login button",
  "keyword": "And "
});
formatter.step({
  "name": "User gets the error message as \"Epic sadface: Username and password do not match any user in this service\"",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ]
    },
    {
      "cells": [
        "Rohit",
        "secret_sauce"
      ]
    },
    {
      "cells": [
        "Invalid",
        "secret_sauce"
      ]
    }
  ]
});
formatter.background({
  "name": "Open the Swag Labs application",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User is on SauceDemo login page",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginSteps.user_is_on_sauce_demo_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "To validate the negative login",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Sainty"
    }
  ]
});
formatter.step({
  "name": "User enters Username \"Rohit\" and Password \"secret_sauce\"",
  "keyword": "When "
});
formatter.match({
  "location": "LoginSteps.user_enters_username_and_password(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Login button",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.user_clicks_on_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User gets the error message as \"Epic sadface: Username and password do not match any user in this service\"",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.user_gets_the_error_message_as(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "Open the Swag Labs application",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User is on SauceDemo login page",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginSteps.user_is_on_sauce_demo_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "To validate the negative login",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Sainty"
    }
  ]
});
formatter.step({
  "name": "User enters Username \"Invalid\" and Password \"secret_sauce\"",
  "keyword": "When "
});
formatter.match({
  "location": "LoginSteps.user_enters_username_and_password(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Login button",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.user_clicks_on_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User gets the error message as \"Epic sadface: Username and password do not match any user in this service\"",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.user_gets_the_error_message_as(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});