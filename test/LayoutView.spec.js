define(['Views/layoutView','Views/formView','Views/listView','models/TodoModel'],function(layoutView, todo){
	
	describe("layoutView test", function() {
	 var layout;
	  beforeEach(function(){
	  this.$fixture = $("<div id= 'layout-view-fixture'>");
	  this.$fixture.empty().appendTo($("#fixtures"));
      layout = new layoutView({
      	el: this.$fixture,
      	collection: new Backbone.Collection([]),
      	model: new Backbone.Model(todo)
      });
      layout.render();
   
	  });
		it("it should be defined", function() {
	      expect(layout).toBeDefined();

	   });
		it("it should have no todos", function(){
			expect(layout.collection.length).toEqual(0);
		});
		it("it should have two items", function(){
			var todo1 = new todo({assignee: "Faye", text: "write tests"});
			var todo2 = new todo({assignee: "Faye", text: "get spy working"});
			layout.collection.add(todo1);
			layout.collection.add(todo2);
			console.log("length of collection "+ layout.collection.length);
			expect(layout.collection.length).toEqual(2);
		});
		 it("collection length should increate when add a todo", function(){
		 	var original = layout.collection.length;
		 	layout.$("#btn-add").click();
		 	expect(layout.collection.length).toEqual(original+1);
	    	
	    });
		  it("should add a new todo when click add", function(){
		  	var text = "new test";
		  	var assignee = "faye"
		  	var temp = new todo({text: text, assignee: assignee});
		 	layout.$("#id_text").val(text);
		 	layout.$("#id_assignee").val(assignee);
		 	layout.$("#btn-add").click();
		 	console.log("collection is "+ layout.collection);
		 	expect(layout.collection.where({text: text})).toBeDefined();
	    	
	    });
		  it("should clear input after user add a todo", function(){
		  	var text = "new test";
		  	var assignee = "faye"
	
		 	layout.$("#id_text").val(text);
		 	layout.$("#id_assignee").val(assignee);
		 	layout.$("#btn-add").click();
		 
		 	expect(layout.$("#id_text").val()).toEqual("enter todo");
		 	expect(layout.$("#id_assignee").val()).toEqual("enter name");
		  })
	
   
	});
})
