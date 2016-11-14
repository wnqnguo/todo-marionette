define([
	'backbone',
	'backbone.marionette'
],
function( Backbone ) {
    'use strict';

	var todo = Backbone.Model.extend({
		 defaults: {
    		assignee: '',
    		text: ''
  },

  validate: function(attrs) {
    var errors = {};
    var hasError = false;
    if (!attrs.assignee) {
      errors.assignee = 'assignee must be set';
      hasError = true;
    }
    if (!attrs.text) {
      errors.text = 'text must be set';
      hasError = true;
    }

    if (hasError) {
      return errors;
    }
  }
	});

	return new Communicator();
});
