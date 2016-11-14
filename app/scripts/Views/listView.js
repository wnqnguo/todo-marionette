define([
	'underscore',
	'backbone',
	'backbone.marionette',
	'hbs!../templates/todoitem'
	
],

function( _,Backbone, Marionette, todoItem ) {
	var ToDo = Marionette.View.extend({
	  tagName: 'li',
	  template: todoItem,
	  triggers: {
	    'click #finish': 'finish:todo:item'
	  }
	});
    


	var listView = Marionette.CollectionView.extend({
	  tagName: 'ul',
	  childView: ToDo,
	  onChildviewFinishTodoItem: function(child){
	   		console.log("clicked done");
	   },
	   childViewEvents: {
    	'finish:todo:item': 'itemSelected'
  		},
  		itemSelected: function(childView){
  			console.log("finished");
  		
  			var m = _.filter(this.collection.models, function(element, index){
  					if(element.cid == childView.model.cid){
    					return element;
  					}
  			});
  			this.collection.remove(m);
  			this.trigger("finished:todo", ["test"]);
  		}
	  
	});

     return listView;
});