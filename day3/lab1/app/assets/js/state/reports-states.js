'use strict';

/**
 * Configure our application to give us basic routing
 **/
app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
	$urlRouterProvider.when('/lemonaide/reports', '/lemonaide/reports/sales');

	$stateProvider
		//Report state ... /report //lemonaide/reports/donors
		.state('reports', {
			url: '/reports',
			parent: 'lemonaide',
			templateUrl: 'app/views/reports/reports.html',
			controller: 'ReportController',
			abstract: true
		})
			//Report: Sales sub-state ... /report/sales
			.state('reports.sales', {
				url: '/sales',
				templateUrl: 'app/views/reports/sales.html',
				controller: 'ReportSalesController'
			});
}]);
