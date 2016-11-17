// Karma configuration
// Generated on Tue Nov 15 2016 13:14:00 GMT-0800 (PST)

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine','requirejs'],


    // list of files / patterns to load in the browser
    files: [
      'test-main.js',
      'app/scripts/init.js',
        {pattern: 'app/bower_components/jquery/jquery.js', included:false, watching: false},
          {pattern: 'app/bower_components/underscore/underscore.js', included:false, watching: false},
          {pattern: 'app/bower_components/backbone/backbone.js', included:false, watching: false},
          {pattern: 'app/bower_components/requirejs-text/text.js', included:false, watching: false},
          {pattern: 'app/bower_components/backbone.marionette/lib/backbone.marionette.js', included:false, watching: false},
        {pattern: 'app/bower_components/require-handlebars-plugin/hbs.js', included: false},
        {pattern: 'app/bower_components/require-handlebars-plugin/Handlebars.js', included: false},
        {pattern: 'app/bower_components/require-handlebars-plugin/hbs/i18nprecompile.js', included: false},
        {pattern: 'app/bower_components/require-handlebars-plugin/hbs/json2.js', included: false},
        {pattern: 'app/bower_components/backbone.radio/build/backbone.radio.js', included: false},
      {pattern:'app/scripts/**/*.js', included:false}, //to load sub-directory level js files
        {pattern: 'app/scripts/**/*.hbs', included: false},//hbs template
      {pattern:'test/**/*spec.js',included:false}

    ],


    // list of files to exclude
    exclude: [
        '/base/app/scripts/main.js'

    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
    },


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress','html','dots'],
     htmlReporter: {
      outputDir: 'karma_html', // where to put the reports  
      templatePath: null, // set if you moved jasmine_template.html 
      focusOnFailures: true, // reports show failures on start 
      namedFiles: false, // name files instead of creating sub-directories 
      pageTitle: null, // page title for reports; browser info by default 
      urlFriendlyName: false, // simply replaces spaces with _ for files/dirs 
      reportName: 'report-summary-filename', // report summary filename; browser info by default 
      
      
      // experimental 
      preserveDescribeNesting: false, // folded suites stay folded  
      foldAll: false, // reports start folded (only with preserveDescribeNesting) 
    },

    browserDisconnectTolerance: 10,
    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,
     
     browserNoActivityTimeout: 100000,

    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: 'LOG_DEBUG',


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: false,
  

    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['Chrome'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity,
    plugins:[
     "karma-requirejs",
     "karma-jasmine",
     'karma-chrome-launcher',
     'karma-html-reporter',
     'karma-mocha'
    ]
  })
}
