describe("Player", function() {
  var formView = require('../../app/scripts/Views/formView');
  describe("formView",function(){
      beforeEach(function(){
        this.view = new formView();
      });
  describe("Instantiation", function(){
    it("should create a form", function(){
      expect(this.view.el.tagName).toEqual("form");
    });
  });
  });
});
