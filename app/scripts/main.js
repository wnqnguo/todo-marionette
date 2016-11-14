require([
	'backbone',
	'backbone.marionette',
	'application',
	'./Views/layoutView'

	
],
function ( Backbone, Marionette, App, LayoutView) {
    'use strict';
    var initialData = {
	  	items: [
	    {assignee: 'Scott', text: 'Write a book about Marionette'},
	    {assignee: 'Andrew', text: 'Do some coding'}
	  ]
	};
	App.start();
});
