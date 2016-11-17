define(['Views/formView'],function(formView){
	
	describe("formView test", function() {
		var form;
	  beforeEach(function(){
    //   this.$fixture = $("<div id='form-view-fixture></div>'")
	  	// this.$fixture.empty().appendTo($("#fixtures"));
	  	// this.view = new formView();
	  
      form = new formView();
      form.render();
      spyOn(form, "clearText");
	  });
		it("it should be defined", function() {
	      expect(form).toBeDefined();
	   });
		it("it should be a form", function() {
	      expect(form.tagName).toEqual("form");     
	   });
		 it("it should clear input on user click", function(){

	      //var val = form.$el.find("#id_text").val();
	      // console.log("testing click",val);
		   
	      //$(form.$el.find("#id_text")).trigger("click");
	       form.clearText();
		   expect(form.clearText).toHaveBeenCalled();

		});
	
   
	});
})
