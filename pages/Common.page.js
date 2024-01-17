export const Common = {
  wait: async (driver, duration) => {
    await driver.sleep(duration);
  },
};
