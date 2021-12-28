package com.automationpractice.pages;

import com.automationpractice.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.testng.Assert;

public class CreateAccountPage extends Utility {
    private static final Logger log = LogManager.getLogger(CreateAccountPage.class.getName());

    public CreateAccountPage() {
        PageFactory.initElements(driver,this);
    }

    @CacheLookup
    @FindBy(css = "#customer_firstname")
    WebElement firstNameLocator;
    @CacheLookup
    @FindBy(css = "#customer_lastname")
    WebElement lastNameLocator;
    @CacheLookup
    @FindBy(css = "#passwd")
    WebElement passwordLocator;
    @CacheLookup
    @FindBy(css = "#address1")
    WebElement addressLocator;
    @CacheLookup
    @FindBy(css = "#city")
    WebElement cityLocator;
    @CacheLookup
    @FindBy(xpath = "//select[@id='id_state']")   //dropdown
    WebElement stateLocator;
    @CacheLookup
    @FindBy(css = "#postcode")
    WebElement postcodeLocator;
    @CacheLookup
    @FindBy(css = "#id_country")    //dropdown
    WebElement countryLocator;
    @CacheLookup
    @FindBy(css = "#phone_mobile")
    WebElement phoneNumberLocator;
    @CacheLookup
    @FindBy(css = "button[id='submitAccount'] span")
    WebElement registerButtonLocator;
    @CacheLookup
    @FindBy(xpath = "//h3[normalize-space()='Create an account']")
    WebElement createAccountText;
    @CacheLookup
    @FindBy(xpath = "//h1[normalize-space()='My account']")
    WebElement myAccountTextHeading;

    @FindBy(xpath = "//div[@class='alert alert-danger']//p")
    WebElement errorHeadingText;

    public void verifyErrorMessageDisplayed(String expectedText){
        String actual = errorHeadingText.getText();
        boolean verifyError = actual.contains(expectedText);
        log.info("verifying error message: '"+errorHeadingText.getText()+"'");
        Assert.assertTrue(verifyError);
    }

    public void enterYourFirstName(String name) {

        sendTextToElement(firstNameLocator, name);
        log.info("Entering First Name : '" + name + "'");
    }

    public void enterYourLastName(String surname) {
        sendTextToElement(lastNameLocator, surname);
        log.info("Entering Last Name: '" + surname + "'");
    }

    public void enterYourPassword(String pass) {

        sendTextToElement(passwordLocator, pass);
        log.info("Entering Password : '" + pass + "'");
    }

    public void enterYourAddress(String add) {

        sendTextToElement(addressLocator, add);
        log.info("Entering address : '" + add + "'");
    }

    public void enterYourCity(String city) {
        sendTextToElement(cityLocator, city);
        log.info("Entering city: '" + city + "'");
    }

    public void selectYourState(String st) {
        selectByValueFromDropDown(stateLocator, st);
        log.info("Entering State: '" + st + "'");
    }

    public void enterYourPhoneNumber(String phone) {
        sendTextToElement(phoneNumberLocator, phone);
        log.info("Entering Phone number: '" + phone + "'");
    }

    public void enterYourPostalCode(String postal) {
        sendTextToElement(postcodeLocator, postal);
        log.info("Entering postcode: '" + postal + "'");
    }

    public void selectYourCountry(String country) {
        selectByValueFromDropDown(countryLocator, country);
        log.info("Entering Country: '" + country + "'");
    }

    public void clickOnRegisterButton() {
        clickOnElement(registerButtonLocator);
        log.info("click on register button");
    }
}
