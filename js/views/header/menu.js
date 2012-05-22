define([
  'jquery',
  'underscore',
  'backbone',
  'text!templates/header/menu.html' 
], function($, _, Backbone, headerMenuTemplate){
  var HeaderMenuView = Backbone.View.extend({
    el: '.navbar',
    initialize: function () {
    },
    render: function () {
      $(this.el).html(headerMenuTemplate);
      $('a[href="' + window.location.hash + '"]').addClass('active');
      // note that this only functions when #s are in the URLS.
    },
    events: {
      'click a': 'highlightMenuItem'
    },
    highlightMenuItem: function (ev) {
      $('.active').removeClass('active');
      $(ev.currentTarget).addClass('active');
    }
  })

  return HeaderMenuView;
});
