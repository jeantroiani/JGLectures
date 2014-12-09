(function (angular) {
	
	var blogController = function ($scope) {
			$scope.name = "test";
		};
	angular.module("givingLesson").controller("blogController", ["$cope",blogController]);
	
}(window.angular));