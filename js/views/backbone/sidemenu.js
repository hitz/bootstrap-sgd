define([
  'jquery',
  'underscore',
  'backbone',
  'bootstrap',
  'text!templates/backbone/sidemenu.html',
], function($, _, Backbone, sidemenuTemplate){
  var Sidemenu = Backbone.View.extend({
    el: '#submenu',
    render: function () {
      $(this.el).html(sidemenuTemplate);
      $('.typeahead').typeahead();
			/* Default class modification */

    }
  });
  return Sidemenu;
});
