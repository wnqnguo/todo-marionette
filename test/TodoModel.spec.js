// describe('TodoModel', function(){
// 	var test = new Backbone.Model({
// 		assignee:'Faye',
// 		text:'Write tests with Karma'
// 	});
// 	expect(test.get("text")).toEqual("Faye");
// })
define(['models/TodoModel'],function(TodoModel){
	todo = new TodoModel({
		assignee: "Faye",
 		text: "write tests"
	});
	describe("simple test", function() {
    console.log("test");
    describe('when not present', function() {
        it('to do should be valid', function() {
           expect(todo).toBeDefined();
        });
       
      });
});
})


