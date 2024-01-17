import { Builder } from "selenium-webdriver";
import { Alert } from "../pages/Alert.page.js";
import { Common } from "../pages/Common.page.js";
import { expect } from "chai";

describe("Computer Database", () => {
  let driver;
  describe("Add New Data Computer (Positif Cases)", () => {
    beforeEach(async () => {
      driver = await new Builder().forBrowser("chrome").build();
      driver.manage().window().maximize();
      await Alert.openDashboard(driver);
    });
    afterEach(async () => {
      await driver.close();
    });

    it(`User click OK button with random character (123 !@# Testing) on alert textbox and will show result "You entered: 123 !@# Testing"`, async function () {
      await Alert.clickAndAcceptJSPrompt(driver, "123 !@# Testing");

      //   assertion
      const result = await Alert.checkResult(driver, "123 !@# Testing");
      expect(result).to.be.true;
      await Common.wait(driver, 2000); //to show result
    });

    it("User can cancel add new data computer by clicking cancel button and will be redirected to computer page", async function () {
      await Alert.clickAndCancelJSPrompt(driver);

      // assertion
      const result = await Alert.checkResult(driver, "null");
      expect(result).to.be.true;
      await Common.wait(driver, 2000); //to show result
    });
  });
});
