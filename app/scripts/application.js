define([
	'backbone',
	'backbone.marionette',
	'./Views/layoutView',
	'./models/TodoModel'
],
function( Backbone,Marionette,LayoutView,TodoModel) {
    'use strict';
 //     var initialData = {
	//   	items: [
	//     {assignee: 'Scott', text: 'Write a book about Marionette'},
	//     {assignee: 'Andrew', text: 'Do some coding'}
	//   ]
	// };
	var Application = Marionette.Application.extend({
		region: '#main',
		initialize: function(options) {
		
			//console.dir(options);
		}
	});

    var App = new Application();
	/* Add application regions here */
	//App.addRegions({});
	App.on("before:start", function(options){
     options.initialData = {
	  	items: [
	    {assignee: 'Scott', text: 'Write a book about Marionette'},
	    {assignee: 'Andrew', text: 'Do some coding'}
	  ]
	};
   });
    App.on('start', function(options){
    	Backbone.history.start();
    	console.log("in start");
    	console.dir(options);
    	 var todo = new LayoutView({
	      collection: new Backbone.Collection(options.initialData.items),
	      model: new Backbone.Model(TodoModel)
	    });
   
	    todo.render();
	    console.log("todo is ");
	    console.dir(todo);
	    //todo.triggerMethod('show');
    })
	/* Add initializers here */
	// App.addInitializer( function () {
	
	// 	// var HelloWorld = Backbone.Marionette.View.extend({  // 2

 //  // 			render: function(){
 //  // 				 this.$el.html("Hello HelloWorld");
 //  // 				 return this;
 //  // 			}
	// 	// });

	// 	// var hello = new HelloWorld({ el: "#main"});  // 5

	// 	// hello.render();
	// });

    
	return App;
});
