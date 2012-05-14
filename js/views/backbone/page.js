define([
  'jquery',
  'underscore',
  'backbone',
	'vm',
  'text!templates/backbone/page.html',
  'views/backbone/sidemenu',
  'views/backbone/hero'
], function($, _, Backbone, Vm, backbonePageTemplate, SidemenuView, SectionView){
  var BackbonePage = Backbone.View.extend({
    el: '.page',
    render: function () {
      this.$el.html(backbonePageTemplate);
      
      var sidemenuView = Vm.create(this, 'BackboneSideMenuView', SidemenuView);
      sidemenuView.render();
      
      var sectionView = Vm.create(this, 'BackboneHeroView', SectionView, {section: this.options.section});
      sectionView.render();
    }
  });
  return BackbonePage;
});
