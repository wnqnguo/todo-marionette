define([
	'backbone',
	'backbone.marionette',
	'./Views/formView',
	'hbs!./templates/form'
],

function( Backbone, Marionette, formView, template) {
    'use strict';

	var App = new Backbone.Marionette.Application();

	/* Add application regions here */
	App.addRegions({});

	/* Add initializers here */
	App.addInitializer( function () {
		Backbone.history.start();
		var HelloWorld = Backbone.Marionette.View.extend({  // 2
			
  			render: function(){
  				 this.$el.html("Hello HelloWorld");
  				 return this;
  			}
		});

		var hello = new HelloWorld({ el: "#main"});  // 5

		hello.render();
	});
    
	return App;
});
