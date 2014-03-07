var heroBuilderApp = angular.module('heroBuilderApp', [ 'ngResource' ]);
 

heroBuilderApp.controller('HeroBuilderCtrl', function ($scope, $http) {

	$http.get('/data/race.json').success(function(races) {
		$scope.race = races[0];
		$scope.races = races;
	});

	$http.get('/data/history.json').success(function(histories) {
		$scope.histories = histories;
	});

	$scope.generate = function() {
		angular.forEach($scope.histories, function(history) {
			var roll = Math.floor(Math.random() * 100) + 1;
			for (var i = 0; i < history.options.length; i++) {
				var option = history.options[i];
				if (option.min <= roll && option.max >= roll) {
					history.selected = i;
					break;
				}
			};
		});
	};
});