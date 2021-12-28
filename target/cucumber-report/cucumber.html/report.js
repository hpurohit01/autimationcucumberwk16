$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("accounttestcreation.feature");
formatter.feature({
  "line": 1,
  "name": "Account Creation Test",
  "description": "\r\nAs a user I should be able to create account successfully",
  "id": "account-creation-test",
  "keyword": "Feature"
});
formatter.before({
  "duration": 9333475100,
  "status": "passed"
});
formatter.scenario({
  "line": 6,
  "name": "verify user is able to create account successfully",
  "description": "",
  "id": "account-creation-test;verify-user-is-able-to-create-account-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 5,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "I click on sign in link",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "I enter email for create account",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "I click on create new account button",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I enter below details in the form",
  "rows": [
    {
      "cells": [
        "firstName",
        "lastName",
        "password",
        "address",
        "city",
        "state",
        "postal",
        "country",
        "phone"
      ],
      "line": 12
    },
    {
      "cells": [
        "Max",
        "Murphy",
        "passwrod10",
        "High street",
        "New York",
        "1",
        "123456",
        "55",
        "01234538475"
      ],
      "line": 13
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I click on register button",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I verify account name \"Max\"",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.iClickOnSigningLink()"
});
formatter.result({
  "duration": 288973500,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iEnterEmailForCreateAccount()"
});
formatter.result({
  "duration": 20121507300,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//input[@id\u003d\u0027email_create\u0027]\"}\n  (Session info: chrome\u003d96.0.4664.110)\nFor documentation on this error, please visit: https://selenium.dev/exceptions/#no_such_element\nBuild info: version: \u00274.0.0\u0027, revision: \u00273a21814679\u0027\nSystem info: host: \u0027HEMAL\u0027, ip: \u0027192.168.0.41\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [16e36480b51a0ade4ee94816e85ab361, findElement {using\u003dxpath, value\u003d//input[@id\u003d\u0027email_create\u0027]}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 96.0.4664.110, chrome: {chromedriverVersion: 96.0.4664.45 (76e4c1bb2ab46..., userDataDir: C:\\Users\\HEMALP~1\\AppData\\L...}, goog:chromeOptions: {debuggerAddress: localhost:61587}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), se:cdp: ws://localhost:61587/devtoo..., se:cdpVersion: 96.0.4664.110, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 16e36480b51a0ade4ee94816e85ab361\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:53)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:184)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:139)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:559)\r\n\tat org.openqa.selenium.remote.ElementLocation$ElementFinder$2.findElement(ElementLocation.java:162)\r\n\tat org.openqa.selenium.remote.ElementLocation.findElement(ElementLocation.java:60)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:383)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:375)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:70)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:39)\r\n\tat com.sun.proxy.$Proxy23.sendKeys(Unknown Source)\r\n\tat com.automationpractice.utility.Utility.sendTextToElement(Utility.java:147)\r\n\tat com.automationpractice.pages.SigningPage.fillInEmailToCreateAccount(SigningPage.java:30)\r\n\tat com.automationpractice.cucumber.steps.Steps.iEnterEmailForCreateAccount(Steps.java:104)\r\n\tat ✽.When I enter email for create account(accounttestcreation.feature:9)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "Steps.iClickOnCreateNewAccountButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iEnterBelowDetailsInTheForm(DataTable)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iClickOnRegisterButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Max",
      "offset": 23
    }
  ],
  "location": "Steps.iVerifyAccountName(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 25100,
  "status": "passed"
});
formatter.before({
  "duration": 6637456900,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "verify user is not able to create account successfully using invalid data in form",
  "description": "",
  "id": "account-creation-test;verify-user-is-not-able-to-create-account-successfully-using-invalid-data-in-form",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 19,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 21,
  "name": "I click on sign in link",
  "keyword": "Given "
});
formatter.step({
  "line": 22,
  "name": "I enter email for create account",
  "keyword": "When "
});
formatter.step({
  "line": 23,
  "name": "I click on create new account button",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I enter below details in the form",
  "rows": [
    {
      "cells": [
        "firstName",
        "lastName",
        "password",
        "address",
        "city",
        "state",
        "postal",
        "country",
        "phone"
      ],
      "line": 25
    },
    {
      "cells": [
        "$$",
        "\u0026\u0026",
        "",
        "",
        "16784567",
        "1",
        "CODE",
        "20",
        "19234533"
      ],
      "line": 26
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "I click on register button",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "I verify the error message displayed which contains \"errors\"",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.iClickOnSigningLink()"
});
formatter.result({
  "duration": 37600,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iEnterEmailForCreateAccount()"
});
formatter.result({
  "duration": 12589079500,
  "error_message": "org.openqa.selenium.NoSuchElementException: Unable to find element with locator By.xpath: //input[@id\u003d\u0027email_create\u0027]\nFor documentation on this error, please visit: https://selenium.dev/exceptions/#no_such_element\nBuild info: version: \u00274.0.0\u0027, revision: \u00273a21814679\u0027\nSystem info: host: \u0027HEMAL\u0027, ip: \u0027192.168.0.41\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: driver.version: RemoteWebDriver\r\n\tat org.openqa.selenium.remote.ElementLocation$ElementFinder$2.findElement(ElementLocation.java:165)\r\n\tat org.openqa.selenium.remote.ElementLocation.findElement(ElementLocation.java:60)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:383)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:375)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:70)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:39)\r\n\tat com.sun.proxy.$Proxy23.sendKeys(Unknown Source)\r\n\tat com.automationpractice.utility.Utility.sendTextToElement(Utility.java:147)\r\n\tat com.automationpractice.pages.SigningPage.fillInEmailToCreateAccount(SigningPage.java:30)\r\n\tat com.automationpractice.cucumber.steps.Steps.iEnterEmailForCreateAccount(Steps.java:104)\r\n\tat ✽.When I enter email for create account(accounttestcreation.feature:22)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "Steps.iClickOnCreateNewAccountButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iEnterBelowDetailsInTheForm(DataTable)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iClickOnRegisterButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "errors",
      "offset": 53
    }
  ],
  "location": "Steps.iVerifyTheErrorMessageDisplayedWhichContains(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 24000,
  "status": "passed"
});
formatter.uri("shoppingtestcart.feature");
formatter.feature({
  "line": 1,
  "name": "Shopping cart test",
  "description": "As a user I should be able to empty shopping cart successfully",
  "id": "shopping-cart-test",
  "keyword": "Feature"
});
formatter.before({
  "duration": 6639909400,
  "status": "passed"
});
formatter.scenario({
  "line": 5,
  "name": "verify if user is able to empty the shopping cart",
  "description": "",
  "id": "shopping-cart-test;verify-if-user-is-able-to-empty-the-shopping-cart",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 4,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I select menu \"DRESSES\"",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I click on selected product \"Printed Chiffon Dress\"",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I click on add to cart button",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I click on proceed to checkout button",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I verify product is added to shopping cart",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I verify if delete button is available in shopping cart",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I click on delete button",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I verify banner message \"Your shopping cart is empty.\"",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "DRESSES",
      "offset": 15
    }
  ],
  "location": "Steps.iSelectMenu(String)"
});
formatter.result({
  "duration": 6233700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Printed Chiffon Dress",
      "offset": 29
    }
  ],
  "location": "Steps.iClickOnSelectedProduct(String)"
});
formatter.result({
  "duration": 2065850000,
  "error_message": "org.openqa.selenium.StaleElementReferenceException: stale element reference: element is not attached to the page document\n  (Session info: chrome\u003d96.0.4664.110)\nFor documentation on this error, please visit: https://selenium.dev/exceptions/#stale_element_reference\nBuild info: version: \u00274.0.0\u0027, revision: \u00273a21814679\u0027\nSystem info: host: \u0027HEMAL\u0027, ip: \u0027192.168.0.41\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [96dfcb85913c0d85e1ecad318ef5b357, getElementText {id\u003d26e3b303-0e33-41b3-87f9-21a9c30d6cfc}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 96.0.4664.110, chrome: {chromedriverVersion: 96.0.4664.45 (76e4c1bb2ab46..., userDataDir: C:\\Users\\HEMALP~1\\AppData\\L...}, goog:chromeOptions: {debuggerAddress: localhost:61646}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), se:cdp: ws://localhost:61646/devtoo..., se:cdpVersion: 96.0.4664.110, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nElement: [[ChromeDriver: chrome on WINDOWS (96dfcb85913c0d85e1ecad318ef5b357)] -\u003e xpath: //ul[@class\u003d\u0027product_list grid row\u0027]//div[@class\u003d\u0027right-block\u0027]//h5//a]\nSession ID: 96dfcb85913c0d85e1ecad318ef5b357\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:53)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:184)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:139)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:559)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:251)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.getText(RemoteWebElement.java:201)\r\n\tat com.automationpractice.pages.DressesPage.selectProduct(DressesPage.java:29)\r\n\tat com.automationpractice.cucumber.steps.Steps.iClickOnSelectedProduct(Steps.java:47)\r\n\tat ✽.When I click on selected product \"Printed Chiffon Dress\"(shoppingtestcart.feature:7)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "Steps.iClickOnAddToCartButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iClickOnProceedToCheckoutButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iVerifyProductIsAddedToShoppingCart()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iVerifyIfDeleteButtonIsAvailableInShoppingCart()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.iClickOnDeleteButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Your shopping cart is empty.",
      "offset": 25
    }
  ],
  "location": "Steps.iVerifyBannerMessage(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 90900,
  "status": "passed"
});
formatter.uri("submenunavigationtest.feature");
formatter.feature({
  "line": 1,
  "name": "Sub Menu Navigation Test",
  "description": "As a user I should be able to navigate to submenu page",
  "id": "sub-menu-navigation-test",
  "keyword": "Feature"
});
formatter.before({
  "duration": 7478199700,
  "status": "passed"
});
formatter.scenario({
  "line": 5,
  "name": "verify user is able to navigate to Summer Dresses page",
  "description": "",
  "id": "sub-menu-navigation-test;verify-user-is-able-to-navigate-to-summer-dresses-page",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 4,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I hover mouse to \"WOMEN\"",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I hover mouse and click on submenu \"Summer Dresses\"",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I verify if heading of page is \"SUMMER DRESSES\"",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "WOMEN",
      "offset": 18
    }
  ],
  "location": "Steps.iHoverMouseTo(String)"
});
formatter.result({
  "duration": 137300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Summer Dresses",
      "offset": 36
    }
  ],
  "location": "Steps.iHoverMouseAndClickOnSubmenu(String)"
});
formatter.result({
  "duration": 88200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "SUMMER DRESSES",
      "offset": 32
    }
  ],
  "location": "Steps.iVerifyIfHeadingOfPageIs(String)"
});
formatter.result({
  "duration": 151910200,
  "status": "passed"
});
formatter.after({
  "duration": 21500,
  "status": "passed"
});
formatter.before({
  "duration": 7191153400,
  "status": "passed"
});
formatter.scenario({
  "line": 11,
  "name": "verify user is able to filter price change and see the change in search results",
  "description": "",
  "id": "sub-menu-navigation-test;verify-user-is-able-to-filter-price-change-and-see-the-change-in-search-results",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 10,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 12,
  "name": "I change the price range on slider of max price to \"20.00\"",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I verify if search results are priced withing the max price range \"20.00\"",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "20.00",
      "offset": 52
    }
  ],
  "location": "Steps.iChangeThePriceRangeOnSliderOfMaxPriceTo(String)"
});
formatter.result({
  "duration": 38324675800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "20.00",
      "offset": 67
    }
  ],
  "location": "Steps.iVerifyIfSearchResultsArePricedWithingTheMaxPriceRange(String)"
});
formatter.result({
  "duration": 279134800,
  "status": "passed"
});
formatter.after({
  "duration": 20600,
  "status": "passed"
});
formatter.uri("testmap.feature");
formatter.feature({
  "line": 1,
  "name": "Stores On Map Screenshot Test",
  "description": "\r\nAs a user I should be able to drag map to targeted location and take screenshot",
  "id": "stores-on-map-screenshot-test",
  "keyword": "Feature"
});
formatter.before({
  "duration": 8185505000,
  "status": "passed"
});
formatter.scenario({
  "line": 6,
  "name": "verify user is able to drag map to targeted location and take screenshot having location in centre",
  "description": "",
  "id": "stores-on-map-screenshot-test;verify-user-is-able-to-drag-map-to-targeted-location-and-take-screenshot-having-location-in-centre",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 5,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "I click on information link \"Our stores\"",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I am able to drag map to Palm Beach Location and take screenshot",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Our stores",
      "offset": 29
    }
  ],
  "location": "Steps.iClickOnInformationLink(String)"
});
formatter.result({
  "duration": 2204860600,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iAmAbleToDragMapToPalmBeachLocationAndTakeScreenshot()"
});
formatter.result({
  "duration": 7169260900,
  "status": "passed"
});
formatter.after({
  "duration": 18800,
  "status": "passed"
});
});