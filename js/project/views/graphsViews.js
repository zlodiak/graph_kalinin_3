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

  render: function() {  
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
    var title = this.model.attributes.title;

    this.$el.html(title).attr('href', title);
    return this;
  }

});


APP.AddGraphModalView = Backbone.View.extend({

  tagName: 'div',

  template: _.template($('#addGraphModalTemplate').html()), 

  initialize: function() {
    this.graphSimpleKeys = APP.helper.getSimpleKeys(APP.Graph.prototype.defaults); 
  },  

  render: function() {  
    $('#indexPage').append(this.template());

    for (var key in this.graphSimpleKeys) { this.renderField(this.graphSimpleKeys[key]) };

    return this;
  }, 

  renderField: function(key) {      
    var addGraphModalFieldView = new APP.AddGraphModalFieldView();

    $('#addGraphModalFields').prepend(addGraphModalFieldView.render(key).el);
  }   

});


APP.AddGraphModalFieldView = Backbone.View.extend({

  tagName: 'p',

  template: _.template($('#addGraphFieldTemplate').html()),

  render: function(field) {  
    this.$el.html(this.template({field: field}));
    return this;
  }

});