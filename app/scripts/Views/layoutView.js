define([
	'backbone',
	'backbone.marionette',
	'./formView',
	'./listView',
	'hbs!../templates/layout'
],
function( Backbone, Marionette, FormView, ListView, template) {
    var layoutView = Marionette.View.extend({
  	el: '#main',
  	template: template,
    initialize: function(){
		//_.bindAll(this);
		this.render();
				
	},
  	regions: {
    form: '.form',
    list: '.list'
  	},

	  collectionEvents: {
	    add: 'itemAdded'
	  },

	  onRender: function() {
	  	//Marionette.View.prototype.render.call(this);
	    var formView = new FormView({model: this.model});
	    var listView = new ListView({collection: this.collection});
	    var that = this;
        console.log("called on show model is");
        console.dir(that.model);
        //console.dir(that.form);
	    this.showChildView('form', formView);
	    this.showChildView('list', listView);
	  },

	  onChildviewAddTodoItem: function(child) {
	  	console.log("model is ");
	  	var that = this;
	  	console.dir(that);
	  	console.log("collection is: ");
	  	console.dir(that.collection);
	    this.model.set({
	      assignee: child.ui.assignee.val(),
	      text: child.ui.text.val()
	    }, {validate: true});
       
	    var items = this.model.pick('assignee', 'text');

	    this.collection.add(items);
	  },

	  itemAdded: function() {
	    this.model.set({
	      assignee: '',
	      text: ''
	    });
	  },
	   onChildviewFinishedTodo: function(child){
	   		console.log("clicked done");
	   	
	   }
	});
     return layoutView;
});