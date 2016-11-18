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
      events:{
      	'click #id_text': 'clearText',
	    'click #id_assignee': 'clearAssign'
      },
	  modelEvents: {
	    change: 'render'
	  },

	  ui: {
	    assignee: '#id_assignee',
	    text: '#id_text'
	  },
	  clearText: function(){
	  	console.log("called clear text");
	  	$("#id_text").val('');
	  	console.log("done");
	  },
	  clearAssign: function(){
	  	$("#id_assignee").val('');
	  }
	});

     return FormView;
});