APP.IndexView = Backbone.View.extend({  
  el: $('#contentContainer'), 

  initialize: function() {  
    this.render();
  },

  template: _.template($('#index').html()), 

  render: function () {  
    $(this.el).html(this.template());
    return this;
  }
});

APP.Page1View = Backbone.View.extend({
  el: $('#contentContainer'), 

  template: _.template($('#page1').html()), 

  render: function () {   
    $(this.el).html(this.template());
    return this;
  }
});

APP.Page2View = Backbone.View.extend({
  el: $('#contentContainer'), 

  template: _.template($('#page2').html()), 

  render: function () {   
    $(this.el).html(this.template());
    return this;
  }
});

APP.Page3View = Backbone.View.extend({
  el: $('#contentContainer'), 

  template: _.template($('#page3').html()), 

  render: function () {   
    $(this.el).html(this.template());
    return this;
  }
});

APP.Page4View = Backbone.View.extend({
  el: $('#contentContainer'), 

  template: _.template($('#page4').html()), 

  render: function () {   
    $(this.el).html(this.template());
    return this;
  }
});

APP.Page5View = Backbone.View.extend({
  el: $('#contentContainer'), 

  template: _.template($('#page5').html()), 

  render: function () {   
    $(this.el).html(this.template());
    return this;
  }
});


/*pagesViews =  { 
                indexView: new APP.IndexView(),
                page1View: new APP.Page1View(),
                page2View: new APP.Page2View(),
                page3View: new APP.Page3View(),
                page4View: new APP.Page4View(),
                page5View: new APP.Page5View()
              };*/
