import { By, until } from "selenium-webdriver";

export const ComputerDatabase = {
  openDashboard: async (driver) => {
    await driver.get(`https://computer-database.gatling.io/computers`);
    await driver.wait(
      until.elementLocated(By.xpath(`//a[text()='Computer database']`)),
      10000
    );
  },

  clickAddNew: async (driver) => {
    await driver.findElement(By.xpath(`//a[@id='add']`)).click();
    await driver.wait(
      until.elementLocated(By.xpath(`//h1[text()='Add a computer']`)),
      10000
    );
  },

  fillComputerName: async (driver, text) => {
    await driver.findElement(By.xpath(`//input[@id='name']`)).sendKeys(text);
  },

  fillIntroduced: async (driver, text) => {
    await driver
      .findElement(By.xpath(`//input[@id='introduced']`))
      .sendKeys(text);
  },

  fillDiscontinued: async (driver, text) => {
    await driver
      .findElement(By.xpath(`//input[@id='discontinued']`))
      .sendKeys(text);
  },

  chooseCompany: async (driver) => {
    await driver.findElement(By.xpath(`//select[@id='company']`)).click();
    await driver.findElement(By.xpath(`//option[@value='3']`)).click();
  },

  clickSave: async (driver, text) => {
    await driver.findElement(By.xpath(`//input[@type='submit']`)).click();
    await driver.wait(
      until.elementLocated(
        By.xpath(`//div[contains(text(), 'Computer ${text} has been created')]`)
      ),
      10000
    );
  },

  clickCancel: async (driver, text) => {
    await driver.findElement(By.xpath(`//a[text()='Cancel']`)).click();
    await driver.wait(until.elementLocated(By.xpath(`//a[@id='add']`)), 10000);
  },

  checkDoneMessage: async (driver, text) => {
    return await driver
      .findElement(
        By.xpath(`//div[contains(text(), 'Computer ${text} has been created')]`)
      )
      .isDisplayed();
  },

  checkAddButton: async (driver, text) => {
    return await driver.findElement(By.xpath(`//a[@id='add']`)).isDisplayed();
  },
};
