<img src="docs/kameleo-logo.png" width="150" align="right" />

# Kameleo Local API Client
[Kameleo](https://kameleo.io) is a complete and integrated solution for browser fingerprinting protection, and also for easy browser automation using W3C WebDriver. This JavaScript/TypeScript package provides convenient access to the [Local API](https://app.swaggerhub.com/apis/kameleo-team/kameleo-local-api/2.0) REST interface of the Kameleo Client.


# Features
- Protection from Selenium/WebDriver detection
- Start unlimited number of profiles with different browser fingerprints
- Use authenticated HTTP/SOCKS/SSH proxies in browsers
- Create isolated browsing environments simultaneously
- Use real browser profiles of Chrome, Firefox, Safari and Edge
- Edit, Import or Export browser cookies
- Modify WebRTC parameters
- Modify Geolocation settings
- Modify WebGL fingerprint
- Modify 2D Canvas fingerprint
- Modify Navigator properties
- Modify Screen resolution


# Quickstart Guide

## 1. Install package
```
npm install @kameleo/local-api-client
```

## 2. Start the Kameleo.CLI on your computer
```
./Kameleo.CLI.exe email="your@email.com" password="Pa$$w0rd"
```
> Note: _You need [Automation package](https://kameleo.io/pricing) of Kameleo to access the features described below._

## 3. Start a browser with out-of-the-box fingerprinting protection 
```javascript
const { KameleoLocalApiClient, BuilderForCreateProfile } = require('@kameleo/local-api-client');

(async () => {
    const client = new KameleoLocalApiClient();
    const baseProfiles = await client.searchBaseProfiles({
        deviceType: 'desktop',
        browserProduct: 'chrome'
    });

    // Create a new profile with recommended settings
    // for browser fingerprinting protection
    const requestBody = BuilderForCreateProfile
        .forBaseProfile(baseProfiles[0].id)
        .setRecommendedDefaults()
        .build();
    const profile = await client.createProfile({ body: requestBody });

    // Start the browser
    await client.startProfile(profile.id);
})();
```

# Automate browsers with W3C WebDriver
Kameleo uses a WebDriver compatible server to control the browser. WebDriver is a W3C specification and industry standard which provides a platform and HTTP protocol to interact with a browser.

```javascript
const { KameleoLocalApiClient, BuilderForCreateProfile } = require("@kameleo/local-api-client");
const { Builder, By } = require('selenium-webdriver');

(async () => {
    const kameleoBaseUrl = "http://localhost:5050";

    const client = new KameleoLocalApiClient({
        baseUri: kameleoBaseUrl,
        noRetryPolicy: true,
    });

    // Search Chrome Base Profiles
    const baseProfiles = await client.searchBaseProfiles({
        deviceType: 'desktop',
        browserProduct: 'chrome'
    });

    // Create a new profile with recommended settings
    // for browser fingerprint protection
    const requestBody = BuilderForCreateProfile
        .forBaseProfile(baseProfiles[0].id)
        .setRecommendedDefaults()
        .build();
    
    const profile = await client.createProfile({ body: requestBody });

    // Start the browser
    await client.startProfile(profile.id);

    // Connect to the running browser instance using WebDriver
    const builder = new Builder()
        .usingServer(`${kameleoBaseUrl}/webdriver`)
        .withCapabilities({
            "kameleo:profileId": profile.id,
            "browserName": "Kameleo",
        });
    const webdriver = await builder.build();
    
    // Use any WebDriver command to drive the browser
    // and enjoy full protection from Selenium detection methods
    await webdriver.get("https://google.com");
    await webdriver.findElement(By.name('q')).sendKeys("Kameleo\n");
    const title = await webdriver.getTitle();
    console.log(`The title is ${title}`);

    // Stop the browser by stopping the Kameleo profile
    await client.stopProfile(profile.id);
})();
```

# Example codes
Several [examples](https://github.com/kameleo-io/local-api-examples) have been prepared in a different repository to showcase the most interesting features. Feel free to create a pull request to add new example codes.

- Finding base profiles
- Creating profiles with custom options
- Updating profiles with new settings
- How to start a profile
- Using WebDriver with Local API
- Adding an HTTP, SOCKS or SSH proxy to profile
- Saving/Loading a browsing session to/from a .kameleo file
- Modify and Delete browser cookies
- Hooking up Kameleo with an external browser (Puppeteer)


# Endpoints
Available API endpoints with exhaustive descriptions and example values are documented on this [SwaggerHub](https://app.swaggerhub.com/apis/kameleo-team/kameleo-local-api/2.0) page. This package has built-in [IntelliSense](https://code.visualstudio.com/docs/editor/intellisense) support in Visual Studio Code, no extra package installation needed.


# License
This project is released under MIT License. Please refer the LICENSE.txt for more details.
