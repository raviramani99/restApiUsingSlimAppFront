System.config({
    map: {
        'angular2-highcharts': 'node_modules/angular2-highcharts',
        'highcharts': 'node_modules/highcharts',
    },
    packages: {
        highcharts: {
            main: './highcharts.js',
            defaultExtension: 'js'
        },
        'angular2-highcharts': {
            main: './index.js',
            defaultExtension: 'js'
        }
    }
});