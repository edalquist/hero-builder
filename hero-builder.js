var heroBuilderApp = angular.module('heroBuilderApp', [ 'ngResource' ]);
 

heroBuilderApp.controller('HeroBuilderCtrl', function ($scope, $resource) {

	var Race = $resource('/data/race');

	var races = Race.query(function() {
		$scope.race = races[0];
		$scope.races = races;
	});
});