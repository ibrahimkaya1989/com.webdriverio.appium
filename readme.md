# WebdriverIO Appium Tests

WebdriverIO 10, Cucumber, Appium 3 and Android UiAutomator2 test project.

## Project Purpose

This project provides an automated test foundation for validating Android applications through WebdriverIO and Appium. Its active test flow opens the Google Calculator application on a connected Android device and verifies addition, subtraction, multiplication, and division scenarios written in Cucumber.

The project is intended to demonstrate a maintainable test structure with:

- Behavior-driven scenarios written in Gherkin
- Reusable page objects for application interactions
- TypeScript-based step definitions and configuration
- Appium-based Android device automation
- Allure test reporting

The repository also contains browser-oriented login scenarios as an extension point. They are not part of the active calculator test configuration.

## General Definitions

- **WebdriverIO:** The test automation framework used to configure, run, and control WebDriver sessions.
- **Appium:** The automation server that exposes mobile device actions through the WebDriver protocol.
- **UiAutomator2:** The Android automation driver used by Appium to interact with native Android UI elements.
- **Cucumber:** The behavior-driven development framework used to describe scenarios and connect them to step definitions.
- **Gherkin:** The human-readable syntax used in `.feature` files with keywords such as `Feature`, `Scenario`, `Given`, `When`, and `Then`.
- **Feature file:** A `.feature` file containing business-readable test scenarios.
- **Step definition:** TypeScript code that implements a Gherkin step and calls page object methods or assertions.
- **Page Object Model:** A design pattern that keeps selectors and screen interactions in dedicated page classes.
- **Capability:** A set of session parameters describing the target platform, device, application, and automation driver.
- **Allure:** The reporting tool used to collect test results, steps, screenshots, and execution details.

## Project Structure

```text
.
├── features/
│   ├── calculator.feature             # Active Android calculator scenarios
│   ├── login.feature                  # Browser-oriented login scenarios
│   ├── pages/                         # Page Object Model classes
│   │   ├── calculator.page.ts
│   │   ├── login.page.ts
│   │   ├── page.ts
│   │   └── secure.page.ts
│   └── step-definitions/              # Cucumber step implementations
│       ├── calculator.steps.ts
│       └── steps.ts
├── allure-results/                    # Generated Allure test results
├── package.json                       # Scripts and dependency ranges
├── package-lock.json                  # Locked dependency tree
├── tsconfig.json                      # TypeScript and ESM settings
├── wdio.conf.ts                       # WebdriverIO and Appium configuration
└── readme.md
```

## Versions

| Component | Version |
| --- | --- |
| Node.js | 24.x (local environment) |
| npm | 11.x (local environment) |
| WebdriverIO packages | 10.x |
| Cucumber | 13.3.0 |
| Appium | 3.8.0 |
| UiAutomator2 driver | 8.7.0 |
| TypeScript | 7.0.2 |
| expect-webdriverio | 8.0.0 |
| Allure Commandline | 2.46.1 |

The exact installed dependency tree is locked in `package-lock.json`. Dependency ranges and project scripts are defined in `package.json`.

## Requirements

- Node.js 24 or newer
- Android SDK Platform Tools (`adb`)
- An authorized Android device or emulator
- Appium 3

Verify the Android device connection:

```powershell
adb devices
```

The active configuration targets device `R6CT400PWGR`, Android 14 and the Google Calculator app. Update the capability values in `wdio.conf.ts` when using another device.

## Installation

Install the locked dependency versions:

```powershell
npm ci
```

The project includes the Appium UiAutomator2 driver. If it is not available in the local Appium installation, install it with:

```powershell
npx appium driver install uiautomator2
```

## Running Tests

Start Appium on the endpoint configured in `wdio.conf.ts`:

```powershell
npx appium --base-path /wd/hub --port 4723
```

In a second terminal, run the test suite:

```powershell
npm test
```

Equivalent direct command:

```powershell
npx wdio run wdio.conf.ts
```

The active feature is:

```text
features/calculator.feature
```

The calculator capability is:

```ts
platformName: 'Android',
'appium:udid': 'R6CT400PWGR',
'appium:deviceName': 'R6CT400PWGR',
'appium:appPackage': 'com.google.android.calculator',
'appium:appActivity': 'com.android.calculator2.Calculator',
'appium:platformVersion': '14',
'appium:automationName': 'UiAutomator2'
```

## Type Checking

```powershell
npx tsc --noEmit
```

## Allure Reports

Run the configured Allure server:

```powershell
npm run test:allure
```

Generate and open a static report:

```powershell
allure generate .\allure-results\ --clean -o allure-report
allure open allure-report
```

Clean generated reports in PowerShell:

```powershell
Remove-Item .\allure-results\* -Force
Remove-Item .\allure-report\* -Force -ErrorAction SilentlyContinue
```

## Other Features

`features/login.feature` contains browser-oriented login scenarios, but it is not part of the active configuration. To run it, update `specs`, `tags`, and `capabilities` in `wdio.conf.ts` for the target browser before starting WebdriverIO.