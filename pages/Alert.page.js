import { By, until } from "selenium-webdriver";

export const Alert = {
  openDashboard: async (driver) => {
    await driver.get(`https://the-internet.herokuapp.com/javascript_alerts`);
    await driver.wait(
      until.elementLocated(
        By.xpath(`//h3[contains(text(), 'JavaScript Alerts')]`)
      ),
      10000
    );
  },

  clickAndAcceptJSPrompt: async (driver, text) => {
    await driver
      .findElement(By.xpath(`//button[@onclick="jsPrompt()"]`))
      .click();

    // Switch to the alert, fill and accept
    const alert = await driver.switchTo().alert();
    await alert.sendKeys(text);
    await driver.sleep(1000);
    await alert.accept();
  },

  clickAndCancelJSPrompt: async (driver, text) => {
    await driver
      .findElement(By.xpath(`//button[@onclick="jsPrompt()"]`))
      .click();

    // Switch to the alert and cancel
    const alert = await driver.switchTo().alert();
    await driver.sleep(1000);
    await alert.dismiss();
  },

  checkResult: async (driver, text) => {
    return await driver
      .findElement(
        By.xpath(`//p[@id='result' and text()='You entered: ${text}']`)
      )
      .isDisplayed();
  },
};
