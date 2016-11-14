define([
	'backbone',
	
	'backbone.marionette',
	'./Views/layoutView',
	'./models/todo'
],

function( Backbone,Marionette, LayoutView, template, todo) {
    'use strict';

	var App = new Backbone.Marionette.Application();

	/* Add application regions here */
	App.addRegions({});
    App.on('start', function(options){
    	Backbone.history.start();
    	 var todo = new LayoutView({
	      collection: new Backbone.Collection(options.initialData.items)
	      //model: new todo()
	    });
	    //todo.render();
	    //todo.triggerMethod('show');
    })
	/* Add initializers here */
	App.addInitializer( function () {
	
		// var HelloWorld = Backbone.Marionette.View.extend({  // 2

  // 			render: function(){
  // 				 this.$el.html("Hello HelloWorld");
  // 				 return this;
  // 			}
		// });

		// var hello = new HelloWorld({ el: "#main"});  // 5

		// hello.render();
	});

    
	return App;
});
