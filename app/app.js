var app = angular.module('rtfmApp', ['ngRoute', 'firebase']);

app.constant('fb', { url:'https://shining-fire-6908.firebaseio.com/' });

app.config(function($routeProvider) {

	$routeProvider
		.when('/threads', {
			templateUrl: 'app/threads/threadsTmpl.html',
			controller: 'threadsCtrl',
			resolve: {
				threadsRef: function(threadsService) {
					return threadsService.getThreads();
				}
			}
		})
		.when('/threads/:threadId', {
			templateUrl: 'app/threads/threadTmpl.html',
			controller: 'threadCtrl',
			resolve: {
				threadRef: function(threadsService, $route) {
					return threadsService.getThread($route.current.params.threadId);
				},
				commentsRef: function(threadService, $route) {
					return threadService.getComments($route.current.params.threadId);
				}
			}
		})
		.otherwise( {
			redirectTo: '/threads'
		})


});