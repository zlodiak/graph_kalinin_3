APP.IndexView = Backbone.View.extend({  

  tagName: 'div',

  className: 'page_index',

  id: 'pageIndex',

  initialize: function() {
    if(!APP.graphCollection) {
      APP.graphCollection = new APP.GraphCollection();
    };    

    APP.graphCollection.fetch();

    this.graphLinksView = new APP.GraphLinksView({collection: APP.graphCollection});         
    this.addGraphModalView = new APP.AddGraphModalView();    
  },    

  template: _.template($('#indexTemplate').html()), 

  render: function () { 
    $(this.el).html(this.template());  
    $(this.el).html(this.graphLinksView.render().el);  
    $(this.el).append(this.addGraphModalView.render().el);
    return this;
  }

});


APP.PageGraphView = Backbone.View.extend({  

  initialize: function(options) {    
    this.graphView = new APP.GraphView(options);   
    this.addDotModalView = new APP.AddDotModalView(options);  
  },   

  tagName: 'div',

  className: 'page_graph',

  id: 'pageGraph',

  template: _.template($('#pageGraphTemplate').html()), 

  render: function () {   
    $(this.el).html(this.template());
    $(this.el).append(this.graphView.render().el);
    $(this.el).append(this.addDotModalView.render().el);
    return this;
  }

});


APP.Page1View = Backbone.View.extend({

  tagName: 'div',

  className: 'page_1',

  id: 'page1',

  template: _.template($('#page1Template').html()), 

  render: function () {   
    $(this.el).html(this.template());
    return this;
  }

});


APP.Page2View = Backbone.View.extend({

  tagName: 'div',

  className: 'page_2',

  id: 'page1',

  template: _.template($('#page2Template').html()), 

  render: function () {   
    $(this.el).html(this.template());
    return this;
  }

});


APP.PageError404View = Backbone.View.extend({

  tagName: 'div',

  className: 'page_error404',

  id: 'pageError404',

  template: _.template($('#pageError404Template').html()), 

  render: function () {   
    $(this.el).html(this.template());
    return this;
  }

});
