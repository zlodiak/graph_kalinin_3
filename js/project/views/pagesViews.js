var IndexView = Backbone.View.extend({  
  el: $('#contentContainer'), 

  template: _.template($('#index').html()), 

  render: function () {   
    $(this.el).html(this.template());
    return this;
  }
});

var Page1View = Backbone.View.extend({
  el: $('#contentContainer'), 

  template: _.template($('#page1').html()), 

  render: function () {   
    $(this.el).html(this.template());
    return this;
  }
});

var Page2View = Backbone.View.extend({
  el: $('#contentContainer'), 

  template: _.template($('#page2').html()), 

  render: function () {   
    $(this.el).html(this.template());
    return this;
  }
});

var Page3View = Backbone.View.extend({
  el: $('#contentContainer'), 

  template: _.template($('#page3').html()), 

  render: function () {   
    $(this.el).html(this.template());
    return this;
  }
});

var Page4View = Backbone.View.extend({
  el: $('#contentContainer'), 

  template: _.template($('#page4').html()), 

  render: function () {   
    $(this.el).html(this.template());
    return this;
  }
});

var Page5View = Backbone.View.extend({
  el: $('#contentContainer'), 

  template: _.template($('#page5').html()), 

  render: function () {   
    $(this.el).html(this.template());
    return this;
  }
});


views = { 
          indexView: new IndexView(),
          page1View: new Page1View(),
          page2View: new Page2View(),
          page3View: new Page3View(),
          page4View: new Page4View(),
          page5View: new Page5View()
        };
