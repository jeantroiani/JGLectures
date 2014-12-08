(function (angular) {
	
	angular.module("givingLesson").config(function ($routeProvider) {
		$routeProvider.when("/", {
			templateUrl: "../../index.html",
			controller: "lessonController"
		})
		.when("/events",{
			templateUrl:"../../Routes/more_events.html",
			controller: ""
		})
		.when("/blog",{
			templateUrl:"../../Routes/more_events.html",
			controller: ""
		})
	});
	
	var lessonController = function ($scope) {
		$scope.lessons = [{name: "Jean", lesson: "angularJs", description: "Basics of Angular", date: "14:20 11-12-2014", where: "The Garage"}, {name: "Basem", lesson: "Responsive Design", description: "importance of Responsive design", date: "18:00 12-10-2014", where: "Big room"}, {name: "Neil", lesson: "Responsive images", description: "Fluid layout", date: "14:20 01-20-2015", where: "Secret room"}];
		$scope.columns = ["name", "lesson", "description"];
		$scope.filtering = function () {
			var filter = {};
			$scope.filterby = $scope.filterby || "$";
			filter[$scope.filterby] = $scope.filterEvents;
			return filter;
		};
		$scope.sort = function (name) {
			$scope.orderBy = name;
			$scope.reverse = !$scope.reverse;
		};
	};
	
	angular.module("givingLesson")
		.controller("LessonController", ["$scope", lessonController]);
	
}(window.angular));