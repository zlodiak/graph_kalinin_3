/*APP.GraphLinksView = Backbone.View.extend({

  el: '#graphsList',

  initialize: function() { 
    
  },

  render: function() {  
    if(this.collection) {
      this.collection.each(function(item) {
        this.renderGraphLink(item);
      }, this );
    };
  }, 

  renderGraphLink: function(item) { 
    var graphLink = new APP.GraphLinkView({
      model: item
    });

    this.$el.prepend(graphLink.render().el);
  }, 

  createGraph: function() {
    var newGraphData = {
      title: $('#fld_title').val(),
      yMax: $('#fld_yMax').val(),
      yMin: $('#fld_yMin').val(),
      yPeriod: $('#fld_yPeriod').val(),
      xMax: $('#fld_xMax').val(),
      xMin: $('#fld_xMin').val(),
      xPeriod: $('#fld_xPeriod').val(),
      dots: {}
    };

    var newGraph = new APP.Graph(newGraphData);

    if(this.collection.add(newGraph)) { 
      $('#addGraphModal').modal('hide');      
    };

  }    

});
*/

APP.GraphLinksView = Backbone.View.extend({

  tagName: 'div',   

  className: 'list-group graphs',   

  id: 'graphsList',

  template: _.template($('#graphsListTemplate').html()),

  render: function() {  console.log(this.$el);  
    this.$el.append(this.template());

    this.collection.each(function(model) { 
      this.renderGraphLinkView(model);
    }, this ); 

    return this;
  },

  renderGraphLinkView: function(model) {  
    var graphLinkView = new APP.GraphLinkView({
      model: model
    });

    this.$el.prepend(graphLinkView.render().el);
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

  el: 'div',

  template: _.template($('#addGraphModalTemplate').html()), 

  render: function() {  
    $('#contentContainer').append(this.template());
    return this;
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