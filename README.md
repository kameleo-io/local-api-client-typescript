<img src="docs/kameleo-logo.png" width="150" align="right" />

# Kameleo Local API Client
With [Kameleo](https://kameleo.io), you can easily create multiple virtual browser profiles to work with multiple accounts. It helps you hide your actual timezone, geolocation, language, IP address and creates natural browser fingerprints to prevent detection by anti-bot systems. Kameleo is compatible with [Selenium](https://www.selenium.dev/), [Playwright](https://playwright.dev/), and [Puppeteer](https://pptr.dev/) frameworks for automating web scraping tasks. This JavaScript/TypeScript package provides convenient access to the [Local API](https://app.swaggerhub.com/apis/kameleo-team/kameleo-local-api/) REST interface of the Kameleo Client. See the [article](https://help.kameleo.io/hc/en-us/articles/4418166326417) in our knowledge base for Getting Started with Kameleo Automation.


# Features
- Stay completely undetected, so websites won't be able to detect that you are using automation tools
- Start unlimited number of profiles with different natural browser fingerprints
- Use authenticated HTTP/SOCKS/SSH proxies in browsers
- Create isolated browsing environments simultaneously
- Use real browser profiles of Chrome, Firefox, Safari and Edge
- Edit, Import or Export browser cookies
- Modify WebRTC parameters
- Modify Geolocation settings
- Modify Timezone and Language settings
- Modify WebGL fingerprint
- Modify 2D Canvas fingerprint
- Modify Navigator properties
- Modify Screen resolution

> Note: _You need [Automation package](https://kameleo.io/learn-more/automation/) of Kameleo to access the features described below._


# Quickstart Guide

## 1. Install package
```
npm install @kameleo/local-api-client
```

## 2. Start the Kameleo.CLI on your computer
```
./Kameleo.CLI.exe email="your@email.com" password="Pa$$w0rd"
```

## 3. Start a browser with out-of-the-box fingerprinting protection
```javascript
const { KameleoLocalApiClient, BuilderForCreateProfile } = require('@kameleo/local-api-client');

(async () => {
    const client = new KameleoLocalApiClient();
    const baseProfiles = await client.searchBaseProfiles({
        deviceType: 'desktop',
        browserProduct: 'chrome',
    });

    // Create a new profile with recommended settings
    // for browser fingerprinting protection
    const requestBody = BuilderForCreateProfile
        .forBaseProfile(baseProfiles[0].id)
        .setName('example profile')
        .setRecommendedDefaults()
        .build();
    const profile = await client.createProfile({
        body: requestBody,
    });

    // Start the browser
    await client.startProfile(profile.id);

    // At this point you can automate the browser with your favorite framework
})();
```

# Automate Kameleo profiles with Selenium
Kameleo gives you the ability to control any supported browser using Selenium. It uses the WebDriver protocol, a W3C specification, and industry-standard to interact with a browser.

You need to import the official [Selenium library](https://www.npmjs.com/package/selenium-webdriver).
```javascript
const { Builder } = require('selenium-webdriver');
```

```javascript
// Connect to the running browser instance using WebDriver
const kameleoPort = 5050;
const builder = new Builder()
    .usingServer(`http://localhost:${kameleoPort}/webdriver`)
    .withCapabilities({
        'kameleo:profileId': profile.id,
        browserName: 'Kameleo',
    });
const webdriver = await builder.build();

// Use any WebDriver command to drive the browser
// and enjoy full protection from bot detection products
await webdriver.get('https://google.com');
```

The full example can be found [here](https://github.com/kameleo-io/local-api-examples/blob/master/nodejs/connect_to_selenium/index.js).

# Automate Kameleo profiles with Puppeteer (Chromium-based)
Kameleo lets you control Chromium-based browsers (sorry Firefox fans) using the official [Puppeteer library](https://www.npmjs.com/package/puppeteer). In this simple example you can see how to connect to the browser that Kameleo starts.

You need to import the official [Puppeteer library](https://www.npmjs.com/package/puppeteer).

```javascript
const puppeteer = require('puppeteer');
```

```javascript
// Connect to the browser through CDP
const kameleoPort = 5050;
const browserWSEndpoint = `ws://localhost:${kameleoPort}/puppeteer/${profile.id}`;
const browser = await puppeteer.connect({
    browserWSEndpoint, defaultViewport: null,
});
const page = await browser.newPage();

// Use any Puppeteer command to drive the browser
// and enjoy full protection from bot detection products
await page.goto('https://google.com');
```

The full example can be found [here](https://github.com/kameleo-io/local-api-examples/blob/master/nodejs/connect_with_puppeteer/index.js).

# Automate Kameleo profiles with Playwright
Kameleo allows you to control the browser with the official [Playwright library](https://www.npmjs.com/package/playwright). It works little bit different with Chromium-based browsers and Firefox, so we provide an example for both. Here we showcase how you can connect to the browser that is already started by Kameleo.

You need to import the official [Playwright library](https://www.npmjs.com/package/playwright).

```javascript
const playwright = require('playwright');
```

You can find more details here: [Using Kameleo with Playwright framework – Kameleo Support Center](https://help.kameleo.io/hc/en-us/articles/4419471627793-Using-Kameleo-with-Playwright-framework).

## Chromium-based profiles with Playwright

```javascript
// Connect to the browser with Playwright through CDP
const kameleoPort = 5050;
const browserWSEndpoint = `ws://localhost:${kameleoPort}/playwright/${profile.id}`;
const browser = await playwright.chromium.connectOverCDP(browserWSEndpoint);
const context = browser.contexts()[0]; // It is recommended to work on the default context. New context will work in incognito mode without spoofing.
const page = await context.newPage();

// Use any Playwright command to drive the browser
// and enjoy full protection from bot detection products
await page.goto('https://google.com');
```

The full example can be found [here](https://github.com/kameleo-io/local-api-examples/blob/master/nodejs/connect_with_playwright_to_chrome/index.js).

## Firefox-based profiles with Playwright

```javascript
// Connect to the browser with Playwright
const kameleoPort = 5050;
const browserWSEndpoint = `ws://localhost:${kameleoPort}/playwright/${profile.id}`;
// The exact path to the bridge executable is subject to change. Here, we use %LOCALAPPDATA%\Programs\Kameleo\pw-bridge.exe
const localAppDataPath = process.env.LOCALAPPDATA;
const executablePathExample = `${localAppDataPath}\\Programs\\Kameleo\\pw-bridge.exe`;
const browser = await playwright.firefox.launchPersistentContext('', {
    // The Playwright framework is not designed to connect to already running
    // browsers. To overcome this limitation, a tool bundled with Kameleo, named
    // pw-bridge.exe will bridge the communication gap between the running Firefox
    // instance and this playwright script.
    executablePath: executablePathExample,
    args: [`-target ${browserWSEndpoint}`],
    persistent: true,
    viewport: null,
});

// Kameleo will open the a new page in the default browser context.
// NOTE: We DO NOT recommend using multiple browser contexts, as this might interfere
//       with Kameleo's browser fingerprint modification features.
const page = await browser.newPage();

// Use any Playwright command to drive the browser
// and enjoy full protection from bot detection products
await page.goto('https://google.com');
```

The full example can be found [here](https://github.com/kameleo-io/local-api-examples/blob/master/nodejs/connect_with_playwright_to_firefox/index.js).

# Automate mobile profiles
Kameleo can emulate mobile devices in the custom built Chromium.

```javascript
// Search for a mobile Base Profiles
const baseProfileList = await client.searchBaseProfiles({
	deviceType: 'mobile',
	osFamily: 'ios',
	browserProduct: 'safari',
	language: 'en-us',
});

// Create a new profile with recommended settings
// Choose one of the Base Profiles
// Set the launcher to 'chromium' so the mobile profile will be started in Chroma browser
const createProfileRequest = BuilderForCreateProfile
	.forBaseProfile(baseProfileList[0].id)
    .setName('automate mobile profiles on desktop example')
	.setRecommendedDefaults()
	.setLauncher('chromium')
	.build();
const profile = await client.createProfile({
    body: createProfileRequest,
});

// Start the profile
await client.startProfileWithOptions(profile.id, {
	body: {
		// This allows you to click on elements using the cursor when emulating a touch screen in the brower.
		// If you leave this out, your script may time out after clicks and fail.
		additionalOptions: [
			{
				key: 'disableTouchEmulation',
				value: true,
			},
		],
	},
});

// At this point you can automate the browser with your favorite framework
```
The full example can be found [here](https://github.com/kameleo-io/local-api-examples/blob/master/nodejs/automate_mobile_profiles_on_desktop/index.js).

# Example codes
[Several examples](https://github.com/kameleo-io/local-api-examples) have been prepared in a different repository to showcase the most interesting features. Feel free to create a pull request to add new example codes.

- Finding base profiles
- Creating profiles with custom options
- Updating profiles with new settings
- How to start a profile
- Using Selenium with Local API
- Using Playwright with Kameleo
- Using Puppeteer with Kameleo
- How to emulate mobile devices
- Adding an HTTP, SOCKS or SSH proxy to profile
- Saving/Loading a browsing session to/from a .kameleo file
- Modify and Delete browser cookies
- Start profile with extra WebDriver capabilities
- How to duplicate virtual browser profiles
- Refresh the browser of the emulated profiles

> Note: _If you are interested in more information about Kameleo, or have encountered an issue with using it, please check out our [Help Center](https://help.kameleo.io/)._


# Endpoints
Available API endpoints with exhaustive descriptions and example values are documented on this [SwaggerHub](https://app.swaggerhub.com/apis/kameleo-team/kameleo-local-api/) page. This package has built-in [IntelliSense](https://code.visualstudio.com/docs/editor/intellisense) support in Visual Studio Code, no extra package installation needed.

# Package
This package can be found on npm here: [@kameleo/local-api-client](https://www.npmjs.com/package/@kameleo/local-api-client?activeTab=readme).

# License
This project is released under MIT License. Please refer the LICENSE.txt for more details.
