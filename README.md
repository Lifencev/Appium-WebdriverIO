# Appium, WebdirverIO, BrowserStack

This is a project to test an Android application using the tools mentioned above.

After each push to the main branch, tests are launched on the BrowserStack cloud service, based on which an Allure report is created, which is hosted on GitHub Action. 

Of course, the Page Object template is used.

## Setup

### Install the software and check out the project

- Download and install Node.JS ( at least 16.17 )
- Typescript 5+ version
- Install Visual Studio Code
- Clone and checkout the github project
- npm install

### Setup with BrowserStack

- Add .env file with next variables `BROWSERSTACK_USERNAME`, `BROWSERSTACK_ACCESS_KEY`, `BROWSERSTACK_ANDROID_APP_ID` and `BROWSERSTACK_IOS_APP_ID`
- Sign in inside BrowserStack and upload your mobile apps (.apk and .ipa)
- Update the `.env` file
- `npm run test:android:bs`
