### Dependencies

npm install @wdio/cli @wdio/cucumber-framework @wdio/local-runner @wdio/spec-reporter @wdio/allure-reporter @wdio/types @wdio/sync @cucumber/cucumber @wdio/devtools-service --save-dev

npm install @types/node ts-node typescript expect-webdriverio --save-dev

npm install @wdio/appium-service appium allure-commandline --save-dev

### Allure Reporter

allure --version
allure serve .\allure-results\
del .\allure-results\*
allure generate .\allure-results\ --clean -o allure-report
allure open allure-report

### Running

npx wdio run wdio.conf.ts
