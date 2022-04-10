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
  "name": "User enters Username \"\u003cUserNameval\u003e\" and Password \"\u003cPasswordval\u003e\"",
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
formatter.step({
  "name": "User is on SauceDemo login page",
  "keyword": "Given "
});
formatter.match({});
formatter.result({
  "status": "undefined"
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
  "name": "User enters Username \"\u003cUserNameval\u003e\" and Password \"\u003cPasswordval\u003e\"",
  "keyword": "When "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "User clicks on Login button",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "User lands on the Product Page",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.background({
  "name": "Open the Swag Labs application",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "User is on SauceDemo login page",
  "keyword": "Given "
});
formatter.match({});
formatter.result({
  "status": "undefined"
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
  "name": "User enters Username \"\u003cUserNameval\u003e\" and Password \"\u003cPasswordval\u003e\"",
  "keyword": "When "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "User clicks on Login button",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "User lands on the Product Page",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
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
  "name": "User enters Username \"\u003cUserNameval\u003e\" and Password \"\u003cPasswordval\u003e\"",
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
formatter.step({
  "name": "User is on SauceDemo login page",
  "keyword": "Given "
});
formatter.match({});
formatter.result({
  "status": "undefined"
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
  "name": "User enters Username \"\u003cUserNameval\u003e\" and Password \"\u003cPasswordval\u003e\"",
  "keyword": "When "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "User clicks on Login button",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "User gets the error message as \"Epic sadface: Username and password do not match any user in this service\"",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.background({
  "name": "Open the Swag Labs application",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "User is on SauceDemo login page",
  "keyword": "Given "
});
formatter.match({});
formatter.result({
  "status": "undefined"
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
  "name": "User enters Username \"\u003cUserNameval\u003e\" and Password \"\u003cPasswordval\u003e\"",
  "keyword": "When "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "User clicks on Login button",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "User gets the error message as \"Epic sadface: Username and password do not match any user in this service\"",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
});