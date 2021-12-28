package com.automationpractice.cucumber;

import com.automationpractice.propertyreader.PropertyReader;
import com.automationpractice.utility.Utility;
import cucumber.api.java.After;
import cucumber.api.java.Before;

public class Hooks extends Utility {

        @Before
        public void setUp(){
            selectBrowser(PropertyReader.getInstance().getProperty("browser"));

        }

        @After
        public void tearDown(){
            //   closeBrowser();
        }
    }



