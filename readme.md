### Dependencies
```bash
npm install @wdio/cli @wdio/cucumber-framework @wdio/local-runner @wdio/spec-reporter @wdio/allure-reporter @wdio/types @wdio/sync @cucumber/cucumber @wdio/devtools-service --save-dev
npm install @types/node ts-node typescript expect-webdriverio --save-dev
npm install @wdio/appium-service appium allure-commandline --save-dev
```

### Allure Reporter
```bash
allure --version
allure serve .\allure-results\
allure generate .\allure-results\ --clean -o allure-report
allure open allure-report

del .\allure-results\*
del .\allure-report\*
```

### Running
```bash
npx wdio run wdio.conf.ts
```