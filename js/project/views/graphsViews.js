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
  },

  events:{
    'click #createGraphSubmit': 'createGraph'
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

    var newGraph = new APP.Graph();
    this.collection.add(newGraph);
    console.log(this.collection);
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