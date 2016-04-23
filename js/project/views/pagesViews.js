APP.IndexView = Backbone.View.extend({  

  el: $('#contentContainer'), 

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
    $(this.el).children().first().html(this.graphLinksView.render().el);  
    $(this.el).append(this.addGraphModalView.render().el);
    return this;
  }

});


APP.PageGraphView = Backbone.View.extend({

  initialize: function(options) {     console.log(options);
    this.graphView = new APP.GraphView(options);   
  },   

  el: $('#contentContainer'), 

  template: _.template($('#pageGraphTemplate').html()), 

  render: function () {   
    $(this.el).html(this.template());
    //$(this.el).append(this.graphView.render().el);
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


APP.Error404View = Backbone.View.extend({

  el: $('#contentContainer'), 

  template: _.template($('#error404Template').html()), 

  render: function () {   
    $(this.el).html(this.template());
    return this;
  }

});
