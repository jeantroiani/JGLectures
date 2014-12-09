(function (angular) {
	
	angular.module("givingLesson").config(function ($routeProvider) {
		$routeProvider
			.when("/", {
				controller: "homeController"
				templateUrl: "../views/home.html",
			})
			.when("/events", {
				controller: "lessonController"
				templateUrl: "../views/lessonList.html",
			})
			.when("/blog", {
				controller: "blogController"
				templateUrl: "../views/blog.html",
			})
			.otherwise({ redirectTo: "#/404.html",
									templateUrl: "../views/404.html"});
	});
	
}(window.angular));