package com.automationpractice.pages;

import com.automationpractice.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import java.util.List;

public class HomePage extends Utility {
    private static final Logger log = LogManager.getLogger(HomePage.class.getName());

    public HomePage() {
        PageFactory.initElements(driver,this);
    }


    @FindBy(xpath = "//div[@id='block_top_menu']//li")
    List<WebElement> menuBarLocatorByCustomXPath;

    @FindBy(xpath = "//header[@id='header']//div[2]//div//div//div[1]//a")
    WebElement signInOrSingOutLink;

    @FindBy(xpath = "//section[@id='block_various_links_footer']//ul//li//a")
    List<WebElement> listOfInformationLinks;


    public void selectInformation(String info){
        for (WebElement e : listOfInformationLinks){
            if(e.getText().equalsIgnoreCase(info)){
                clickOnElement(e);
                break;
            }
        }}
}
