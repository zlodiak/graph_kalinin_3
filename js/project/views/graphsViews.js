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


APP.GraphLinkView = Backbone.View.extend({

  tagName: 'a',

  className: 'list-group-item',

  render: function() {  
    this.$el.html(this.model.attributes.title);
    this.$el.attr('href', this.model.attributes.title);
    return this;
  }

});


APP.AddGraphModalView = Backbone.View.extend({

  el: '#graphsList',

  template: _.template($('#addGraphModalTemplate').html()),

  initialize: function(graphSimpleKeys) { 
    this.graphSimpleKeys = graphSimpleKeys;
    this.render();  
  },  

  render: function() {  
    this.$el.append(this.template());

    for(var i = 0; i < this.graphSimpleKeys.length; i++) { 
      this.renderAddGraphModalField(this.graphSimpleKeys[i]);
    };

    return this;
  }, 

  renderAddGraphModalField: function(field) { 
    var fieldView = new APP.AddGraphModalFieldView(field);
    this.$el.find('#addGraphModalFields').append(fieldView.render().el);
  }  

});


APP.AddGraphModalFieldView = Backbone.View.extend({

  initialize: function(field) {
    this.field = field;    
  },  

  tagName: 'p',

  template: _.template($('#addGraphFieldTemplate').html()),

  render: function() {  
    this.$el.html(this.template({field: this.field}));
    return this;
  }

});