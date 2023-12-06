exports.config = {
    user: process.env.LT_USERNAME || 'mobileQA',
    key: process.env.LT_ACCESS_KEY || 'bS1U63NB0xhfHhmhxmUI2eYO2UIEwvyeCmwz4YnEqZBx9CH3J3',
  
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
        visual: true,
        network:true,
        tunnel: true,
        devicelog: true,
        tunnelName: "test1",
        app: 'lt://APP10160241051701868548376149'
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
                tunnel: true,
                lambdatestOpts: {
                          logFile: "tunnel.log",
                          tunnelName: "test1",
                        },             
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