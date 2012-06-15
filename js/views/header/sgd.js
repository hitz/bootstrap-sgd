define([
  'jquery',
  'underscore',
  'backbone',
  'libs/jquery/jquery-ui-autocomplete'
], function($, _, Backbone, jQui){
  var subhead = '';
  var HeaderSGDView = Backbone.View.extend({
    el: '#head_wrapper',
    initialize: function () {
    	   var self = this;
    	   $.get("http://crouton.stanford.edu/cgi-bin/toolbar.pl",function(res) {
				var header = res;
				subhead = header.replace(/=\"\//g,'="http://www.yeastgenome.org/');
				self.render();

    });

    },
    render: function () {
      //$(this.el).html(headerSGDTemplate);
      //$('a[href="' + window.location.hash + '"]').addClass('active');
	        $('#head_wrapper').html(subhead);
            $('#txt_search').autocomplete({ source: 'http://crouton.stanford.edu/cgi-bin/search/searchSuggest.fpl', 
		                                	select: function(event, ui) { 
		                                         $(this).val(ui.item.value);
					                 			 $('#searchform').submit()
				                      		} 
                });
    },
    events: {
      'click a': 'highlightMenuItem'
    },
    highlightMenuItem: function (ev) {
      $('.active').removeClass('active');
      $(ev.currentTarget).addClass('active');
    }
  })

  return HeaderSGDView;
});
