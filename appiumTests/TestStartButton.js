const {remote} = require('webdriverio');

const capabilities = {
  platformName: 'iOS',
    "appium:xcodeOrgId": "DK89F2AYAE",
    "appium:xcodeSigningId": "Apple Development",
    "appium:udid": "b3356d3de1988a75602fabf515cc363fa4670e2c",
    "platformName": "iOS",
    "appium:bundleId": "org.reactjs.native.example.TicTacToeCLI",
    "appium:automationName": "XCUITest",
    "appium:clearSystemFiles": "true",
    "appium:deviceName": "TDID1171"
};

const wdOpts = {
  host: process.env.APPIUM_HOST || 'localhost',
  port: parseInt(process.env.APPIUM_PORT, 10) || 4723,
  logLevel: 'info',
  capabilities,
};

async function runTest() {
  const driver = await remote(wdOpts);
  try {
    await driver.$('~myButton').click(); 
//    const batteryItem = await driver.$('//*[@text="Battery"]');
//    await batteryItem.click();
  } finally {
    await driver.pause(1000);
    await driver.deleteSession();
  }
}

runTest().catch(console.error);