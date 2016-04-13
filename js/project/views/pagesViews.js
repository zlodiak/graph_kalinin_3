APP.IndexView = Backbone.View.extend({  
  el: $('#contentContainer'), 

  initialize: function() { 
    this.render();
  },

  template: _.template($('#index').html()), 

  render: function () {  console.dir(this.collection);
    $(this.el).html(this.template());

    this.collection.each(function(model) {
      this.renderGraphLink(model);
    }, this );    

    return this;
  }, 

  renderGraphLink: function(model) { 
    var graphLink = new APP.GraphLinkView({
      model: model
    });

    this.$el.prepend(3333);
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


