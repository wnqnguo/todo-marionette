define([
	'backbone',
	'backbone.marionette',
	'hbs!../templates/form'
	
],

function( Backbone, Marionette, template ) {
	var FormView = Marionette.View.extend({
	  tagName: 'form',
	  template: template,

	  triggers: {
	    submit: 'add:todo:item'
	  },

	  modelEvents: {
	    change: 'render'
	  },

	  ui: {
	    assignee: '#id_assignee',
	    text: '#id_text'
	  }
	});

     return FormView;
});