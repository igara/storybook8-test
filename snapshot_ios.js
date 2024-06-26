const { Simctl } = require('node-simctl');
const wdio = require('webdriverio');
const { readFileSync, mkdirSync } = require('fs');
const { exec, execSync } = require('child_process')

const targetIOSSDKVerdion = '17.5';
const targetIPhoneName = 'iPhone SE (3rd generation)';


const main = async () => {
  const storiesJSONFile = readFileSync('./storybook-static/index.json', 'utf-8');
  const storiesJSON = JSON.parse(storiesJSONFile);
  const stories = storiesJSON.entries;


  const simctl = new Simctl();
  const devicesBySDK = await simctl.getDevices();


  let udid;
  try {
    if (!devicesBySDK[targetIOSSDKVerdion]) {
      throw new Error(`targetIOSSDKVerdion: ${targetIOSSDKVerdion} がありませんでした`);
    }


    const devices = devicesBySDK[targetIOSSDKVerdion];
    const device = devices.find(d => d.name === targetIPhoneName);


    if (!device) {
      throw new Error(`device: ${targetIPhoneName} がありませんでした`);
    }


    udid = device.udid;
  } catch (e) {
    console.error(e);


    process.exit(1);
  }

  exec(`sudo /Applications/Xcode.app/Contents/Developer/Applications/Simulator.app/Contents/MacOS/Simulator -CurrentDeviceUDID ${udid} &`)

  await new Promise(resolve => setTimeout(resolve, 30000));

  const browser = await wdio.remote({
    port: 4723,
    capabilities: {
      browserName: 'AppiumSafari',
      platformName: 'iOS',
      'appium:automationName': 'safari',
      'safari:useSimulator': true,
      // 'safari:platformVersion': targetIOSSDKVerdion,
      // 'safari:deviceName': targetIPhoneName,
      'appium:udid': udid,
    },
  });


  for (var key in stories) {
    const story = stories[key];


    const name = story.name;
    if (name === 'Docs') continue;


    const id = story.id;
    const title = story.title;
    const url = `http://localhost:6006/iframe.html?viewMode=story&id=${id}`;


    await browser.navigateTo(url);


    await browser.waitUntil(async () => {
      const elem = await browser.$('.sb-preparing-story');
      const displayCSSValue = await browser.getElementCSSValue(elem.elementId, 'display');
      return displayCSSValue === 'none';
    }, {
      timeout: 100000,
    });
    await browser.pause(5000);


    const dir = `./__ios_screenshots__/${title}`;
    mkdirSync(dir, { recursive: true });
    await browser.saveScreenshot(`${dir}/screenshot.png`);
  }


  await browser.deleteSession();

  execSync("sudo kill -9 `pgrep -f 'Simulator' `")

  process.exit(0);
}


main();
