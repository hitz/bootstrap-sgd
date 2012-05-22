define([
  'jquery',
  'underscore',
  'backbone',
	'events',
 ], function($, _, Backbone, Events ){
	var subfoot = '';
 	var FooterView = Backbone.View.extend({
		el: '#foot_wrapper',
	    initialize: function () {
		   self = this;
		   $.get("http://crouton.stanford.edu/cgi-bin/footer.pl?no_js=1",function(res) {
						var footer = res;
					    subfoot = footer.replace(/=\"\//g,'="http://www.yeastgenome.org/');
				        // currently there are no relative links in footer, but hey, you never know
				        // should maybe have a way of stripping out <scripts> as well.
					    self.render();
    	   });
	
    	},
 	   render: function () {
 				        $('#foot_wrapper').html(subfoot);
   	
    	}
  })

  return FooterView;
});
