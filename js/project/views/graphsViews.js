APP.GraphLinksView = Backbone.View.extend({

  initialize: function() {
    this.listenTo( this.collection, 'add', this.render );
  }, 

  tagName: 'div',   

  className: 'list-group graphs',   

  id: 'graphsList',

  template: _.template($('#graphsListTemplate').html()),

  render: function() {  
    this.$el.html(this.template());

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

  initialize: function() {
    this.graphSimpleKeys = APP.helper.getSimpleKeys(APP.Graph.prototype.defaults); 
  },  

  tagName: 'div',

  template: _.template($('#addGraphModalTemplate').html()), 

  events:{
    'click #createGraphSubmit' : 'createGraph'
  },  

  render: function() {  
    this.$el.html(this.template());

    for (var key in this.graphSimpleKeys) { this.renderField(this.graphSimpleKeys[key]) };
      
    return this;
  }, 

  renderField: function(key) {      
    var addGraphModalFieldView = new APP.AddGraphModalFieldView();

    this.$el.find('#addGraphModalFields').append(addGraphModalFieldView.render(key).el);
  }, 

  createGraph: function(e) {
    e.preventDefault();

    var newGraphData = {
      title: this.$el.find('#fld_title').val(),
      yMax: this.$el.find('#fld_yMax').val(),
      yMin: this.$el.find('#fld_yMin').val(),
      yPeriod: this.$el.find('#fld_yPeriod').val(),
      xMax: this.$el.find('#fld_xMax').val(),
      xMin: this.$el.find('#fld_xMin').val(),
      xPeriod: this.$el.find('#fld_xPeriod').val(),
      dots: {}
    };

    var newGraph = new APP.Graph(newGraphData);

    if (newGraph.isValid()) {
      APP.graphCollection.add(newGraph);      
      this.$el.find('#addGraphModal').modal('hide');      
      this.$el.find('#addGraphModal input.form-control').val('');   
      APP.helper.changeBorderColorElem('#addGraphModal input.form-control', '#ccc');   
    } else {
      var errorsFeildsArr = newGraph.validationError;

      APP.helper.changeBorderColorElem('#addGraphModal input.form-control', '#ccc');
      for(var i in errorsFeildsArr) { APP.helper.changeBorderColorElem('#fld_' + errorsFeildsArr[i], '#f00') };
    };   
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