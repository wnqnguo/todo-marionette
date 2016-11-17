
define(['models/TodoModel'],function(TodoModel){
	todo = new TodoModel({
		assignee: "Faye",
 		text: "write tests"
	});
	describe("TodoModel test", function() {
    console.log("test");
    describe('when not present', function() {
        it('to do should be valid', function() {
           expect(todo).toBeDefined();
        });
       
      });
});
})


