var app = angular.module('rtfmApp');

app.service('threadService', function(fb) {
	this.getComments = function(threadId) {
		return new Firebase(fb.url + '/threads/' + threadId + '/comments')
	}
});