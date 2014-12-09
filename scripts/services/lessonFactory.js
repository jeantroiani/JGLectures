(function () {
	var lessonFactory = function () {
		var lessons = [{name: "Jean", lesson: "angularJs", description: "Basics of Angular", date: "14:20 11-12-2014", where: "The Garage"}, {name: "Basem", lesson: "Responsive Design", description: "importance of Responsive design", date: "18:00 12-10-2014", where: "Big room"}, {name: "Neil", lesson: "Responsive images", description: "Fluid layout", date: "14:20 01-20-2015", where: "Secret room"}];
		var factory = {};
		factory.getLessons = function () {
			return lessons;
		};
		return factory;
	};

		angular.module("givingLessons").factory("lessonFactory",lessonFactory);
}());