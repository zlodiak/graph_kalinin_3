APP.GraphLinkView = Backbone.View.extend({

  tagName: 'a',

  className: 'list-group-item',

  render: function() {  
    this.$el.html(this.model.attributes.title);
    this.$el.attr('href', this.model.attributes.title);
    return this;
  }

});


APP.GraphLinksView = Backbone.View.extend({

  el: '#graphsList',

  initialize: function(initialGraphs) { 
    this.collection = new APP.GraphList(initialGraphs);
    this.render();  
  },

  render: function() {  
    this.collection.each(function(item) {
      this.renderGraphLink(item);
    }, this );
  }, 

  renderGraphLink: function(item) { 
    var graphLink = new APP.GraphLinkView({
      model: item
    });

    this.$el.prepend(graphLink.render().el);
  }  

});



APP.AddGraphModalView = Backbone.View.extend({

  el: '#graphsList',

  template: _.template($('#addGraphTemplate').html()),

  initialize: function(graphList) { 
    this.collection = graphList;
    this.render();  
  },  

  render: function() {  
    this.$el.append(this.template(1));

    this.collection.each(function(item) {
      this.renderAddGraphModalField(item);
    }, this );

    return this;
  }, 

  renderAddGraphModalField: function(item) { 
    var graphModalField = new APP.AddGraphModalFieldView({
      model: item
    });

    this.$el.find('#addGraphModalFields').prepend(graphModalField.render().el);
  }  

});




APP.AddGraphModalFieldView = Backbone.View.extend({

  tagName: 'p',

  template: _.template($('#addGraphFieldTemplate').html()),

  render: function() {  
    this.$el.html(this.template());
    return this;
  }

});