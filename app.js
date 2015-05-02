angular.module('myApp', [])
	.controller('MultiplicationCtrl', function($scope){
		
		// Function that returns a range of numbers in an array.
		$scope.numRange = function(start, end){
			$scope.arr = [];
			for(var n = start; n <= end; n++){
				$scope.arr.push(n);
			}
			return $scope.arr;
		}
		$scope.numbers = $scope.numRange(1, 10);
	});