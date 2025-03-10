exports.config = {
    user: process.env.LT_USERNAME || 'LT_USERNAME',
    key: process.env.LT_ACCESS_KEY || 'LT_ACCESS_KEY',
  
    updateJob: false,
    exclude: [],
    maxInstances: 10,
    capabilities: [{
      //  browserName: 'chrome',
       // version: 'latest',
       // platform: 'WIN10',
        build: 'WDIO-Cucumber-Build',
        name: 'Login-feature',
        platformName: 'ios',
        isRealMobile: true,
        deviceName: '.*',
        tunnel: false,
        tunnemName: "b553e4fd-70ba-4de2-85db-bef7de73020a",
        app: 'iOSSampleApp'
      }
    //   {
    //     //  browserName: 'chrome',
    //      // version: 'latest',
    //      // platform: 'WIN10',
    //       build: 'WDIO-Cucumber-Build',
    //       name: 'Login-feature',
    //       platformName: 'android',
    //       isRealMobile: true,
    //       deviceName: '.*',
    //       app: 'AndroidSampleApp'
    //     }    
    ],
    services: [
            ['lambdatest', {
                tunnel: false
            }]
        ],
   
    screenshotPath: './errorShots/',
    baseUrl: '',
    waitforTimeout: 10000,
    connectionRetryTimeout: 90000,
    connectionRetryCount: 3,
    hostname: 'mobile-hub.lambdatest.com',
    port:80,
    specs: [
        './features/**/*.feature'
    ],
    reporters: ['spec'],
    product:"appAutomation",
    framework: 'cucumber',
    //
    // If you are using Cucumber you need to specify the location of your step definitions.
    cucumberOpts: {
        // <string[]> (file/dir) require files before executing features
        require: ['./features/step-definitions/steps.js'],
        // <boolean> show full backtrace for errors
        backtrace: false,
        // <string[]> ("extension:module") require files with the given EXTENSION after requiring MODULE (repeatable)
        requireModule: [],
        // <boolean> invoke formatters without executing steps
        dryRun: false,
        // <boolean> abort the run on first failure
        failFast: false,
        // <boolean> hide step definition snippets for pending steps
        snippets: true,
        // <boolean> hide source uris
        source: true,
        // <boolean> fail if there are any undefined or pending steps
        strict: false,
        // <string> (expression) only execute the features or scenarios with tags matching the expression
        tagExpression: '',
        // <number> timeout for step definitions
        timeout: 60000,
        // <boolean> Enable this config to treat undefined definitions as warnings.
        ignoreUndefinedDefinitions: false
    },
  
  
  
  }