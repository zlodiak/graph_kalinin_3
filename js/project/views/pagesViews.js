APP.IndexView = Backbone.View.extend({  

  el: $('#contentContainer'), 

  initialize: function() {
    if(!APP.graphCollection) {
      APP.graphCollection = new APP.GraphCollection(APP.helper.getInitialGraphs());
    };    

    this.graphLinksView = new APP.GraphLinksView({collection: APP.graphCollection});         
    this.addGraphModalView = new APP.AddGraphModalView();    
  },    

  template: _.template($('#indexTemplate').html()), 

  render: function () { 
    $(this.el).html(this.template());  
    $(this.el).children().first().html(this.graphLinksView.render().el);  
    $(this.el).append(this.addGraphModalView.render().el);
    return this;
  }

});

APP.Page1View = Backbone.View.extend({

  el: $('#contentContainer'), 

  template: _.template($('#page1Template').html()), 

  render: function () {   
    $(this.el).html(this.template());
    return this;
  }

});

APP.Page2View = Backbone.View.extend({

  el: $('#contentContainer'), 

  template: _.template($('#page2Template').html()), 

  render: function () {   
    $(this.el).html(this.template());
    return this;
  }

});

APP.Page3View = Backbone.View.extend({

  el: $('#contentContainer'), 

  template: _.template($('#page3Template').html()), 

  render: function () {   
    $(this.el).html(this.template());
    return this;
  }

});

APP.Page4View = Backbone.View.extend({

  el: $('#contentContainer'), 

  template: _.template($('#page4Template').html()), 

  render: function () {   
    $(this.el).html(this.template());
    return this;
  }

});

APP.Page5View = Backbone.View.extend({

  el: $('#contentContainer'), 

  template: _.template($('#page5Template').html()), 

  render: function () {   
    $(this.el).html(this.template());
    return this;
  }

});


