define(['Views/layoutView'],function(layoutView){
	
	describe("layoutView test", function() {
	var layout;
	  beforeEach(function(){
	  this.$fixture = $("<div id= 'layout-view-fixture'>");
	  this.$fixture.empty().appendTo($("#fixtures"));
      layout = new layoutView({
      	el: this.$fixture
      });
      layout.render();
   
	  });
		it("it should be defined", function() {
	      expect(layout).toBeDefined();
	   });
   
	});
})
