(function (angular) {
	
	angular.module("givingLesson").config(function ($routeProvider) {
		$routeProvider
			.when("/", {
				templateUrl: "../views/home.html",
				controller: "homeController"
			})
			.when("/events", {
				templateUrl: "../views/lessonList.html",
				controller: "lessonController"
			})
			.when("/blog", {
				templateUrl: "../views/blog.html",
				controller: "blogController"
			})
			.otherwise({ redirectTo: "#/404.html",
									templateUrl: "../views/404.html"});
	});
	
}(window.angular));