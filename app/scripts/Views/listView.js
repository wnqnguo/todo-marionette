define([
	'backbone',
	'backbone.marionette',
	'hbs!../templates/todoitem'
	
],

function( Backbone, Marionette, todoItem ) {
	var ToDo = Marionette.View.extend({
	  tagName: 'li',
	  template: todoItem
	});


	var listView = Marionette.CollectionView.extend({
	  tagName: 'ul',
	  childView: ToDo
	});

     return listView;
});