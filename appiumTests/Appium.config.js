module.exports = {
    platformName: 'iOS',
   // platformVersion: '14.0',
    deviceName: 'TDID1171',
    app: '/path/to/your/app.ipa', // Path to the app file
    bundleId: 'org.reactjs.native.example.TicTacToeCLI',
    automationName: 'XCUITest',
    // Add any additional desired capabilities
  };

  desiredCaps = {
    xcodeOrgId: "DK89F2AYAE",
    xcodeSigningId: "Apple Development",
    udid: "b3356d3de1988a75602fabf515cc363fa4670e2c",
    platformName: "iOS",
    bundleId: "org.reactjs.native.example.TicTacToeCLI",
    automationName: "XCUITest",
    clearSystemFiles: "true",
    deviceName: "TDID1171"
  }
  module.exports = { desiredCaps };