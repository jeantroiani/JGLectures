(function (angular) {
	var lessonController = function ($scope) {
		$scope.lessons = [{name: "Jean", lesson: "angularJs", description: "Basics of Angular", date: "14:20 11-12-2014", where: "The Garage"}, {name: "Basem", lesson: "Responsive Design", description: "importance of Responsive design", date: "18:00 12-10-2014", where: "Big room"}, {name: "Neil", lesson: "Responsive images", description: "Fluid layout", date: "14:20 01-20-2015", where: "Secret room"}];
		$scope.columns = ["none","name","lesson","description"];
		$scope.filtering = function(){
			var filter = {};
			$scope.filterby = $scope.filterby || "$";
			filter[$scope.filterby] = $scope.filterEvents
			return filter
		};
	};
	angular.module("givingLesson")
		.controller("LessonController", ["$scope", lessonController]);
	
}(window.angular));