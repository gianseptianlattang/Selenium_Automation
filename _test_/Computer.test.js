import { Builder } from "selenium-webdriver";
import { ComputerDatabase } from "../pages/Computer.page.js";
import { Common } from "../pages/Common.page.js";
import { expect } from "chai";

describe("Computer Database", () => {
  let driver;
  describe("Add New Data Computer (Positif Cases)", () => {
    beforeEach(async () => {
      driver = await new Builder().forBrowser("chrome").build();
      driver.manage().window().maximize();
      await ComputerDatabase.openDashboard(driver);
    });
    afterEach(async () => {
      await driver.close();
    });

    it("User will be redirected to computer page and will show a success message after clicking save button and when all data is valid", async function () {
      await ComputerDatabase.clickAddNew(driver);
      await ComputerDatabase.fillComputerName(driver, "123!@# Testing");
      await ComputerDatabase.fillIntroduced(driver, "2000-01-01");
      await ComputerDatabase.fillDiscontinued(driver, "2005-01-01");
      await ComputerDatabase.chooseCompany(driver);
      await ComputerDatabase.clickSave(driver, "123!@# Testing");

      //   assertion
      const doneMessage = await ComputerDatabase.checkDoneMessage(
        driver,
        "123!@# Testing"
      );
      expect(doneMessage).to.be.true;
      await Common.wait(driver, 2000); //to show result
    });

    it("User can cancel add new data computer by clicking cancel button and will be redirected to computer page", async function () {
      await ComputerDatabase.clickAddNew(driver);
      await ComputerDatabase.clickCancel(driver);

      // assertion
      const addButton = await ComputerDatabase.checkAddButton(driver);
      expect(addButton).to.be.true;
      await Common.wait(driver, 2000); //to show result
    });
  });
});
