const report = require('multiple-cucumber-html-reporter');

report.generate({
	jsonDir: 'cypress/cucumber-json',
	reportPath: './reports/cucumber-htmlReport.html',
	metadata:{
        browser: {
            name: 'chrome',
            version: '107'
        },
        device: 'Local test machine',
        platform: {
            name: 'ubuntu',
            version: '16.04'
        }
    },
    customData: {
        title: 'Run info',
        data: [
            {label: 'Project', value: 'Custom project'},
            {label: 'Release', value: '1.2.3'},
            {label: 'Cycle', value: 'B11221.34321'},
            {label: 'Execution Start Time', value: 'Nov 12th 2022, 12:05 PM IST'},
            {label: 'Execution End Time', value: 'Nov 12th 2022, 12:10 PM IST'}
        ]
    }
});