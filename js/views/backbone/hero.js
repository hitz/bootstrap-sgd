define([
  'jquery',
  'underscore',
  'backbone',
  'bootstrap',
  'text!templates/backbone/hero.html',

], function($, _, Backbone, heroTemplate){
  var BackboneHero = Backbone.View.extend({
    el: '#hero',
    render: function () {
      this.$el.html(heroTemplate);
    }
  });
  return BackboneHero;
});
