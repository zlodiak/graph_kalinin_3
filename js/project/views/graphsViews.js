APP.GraphLinksView = Backbone.View.extend({

  initialize: function() {
    this.listenTo( this.collection, 'add', this.render );
    this.listenTo( this.collection, 'remove', this.render );
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

  initialize: function() {
    this.listenTo(this.model, 'change', this.render);
  },    

  template: _.template($('#graphsListItemTemplate').html()),  

  tagName: 'div',

  className: 'list-group-item',

  render: function() {  
    this.$el.html(this.template({
      title: this.model.attributes.title,
      id: this.model.id,
      cid: this.model.cid
    }));

    this.editFieldElem = this.$el.find('.edit_field');
    this.displayBlock = this.$el.find('.display_block');
    //this.graphTitle = this.$el.find('.graph_title');

    return this;
  },

  events:{
    'keypress .edit_field': 'EnterKeyHandler',
    'keydown .edit_field': 'EscKeyHandler',    
    'blur .edit_field': 'editEnd',
    'click .glyphicon-edit' : 'editBegin',
    'click .glyphicon-remove' : 'remove'
  },

  editEnd: function() { 
    this.editFieldElem.addClass('hide').removeClass('show');
    this.displayBlock.addClass('show').removeClass('hide');

    var title = this.$el.find('.edit_field').val(),
        title = $.trim(title);    

    if (title) {
      this.model.save({ title: title });
    }    
  },

  editBegin: function() { 
    this.editFieldElem.addClass('show').removeClass('hide').focus();
    this.displayBlock.addClass('hide').removeClass('show');    
  },

  remove: function() {  
    if(this.model.destroy()) {
      APP.graphCollection.remove(APP.graphCollection.where({cid: this.model.cid}));
    };    
  }, 

  EnterKeyHandler: function (e) { 
    if (e.which === 13) {
      this.editEnd();
    }
  },  

  EscKeyHandler: function (e) {
    if (e.which === 27) { 
      this.editFieldElem.val(this.model.get('title'))
      this.editFieldElem.addClass('hide').removeClass('show');
      this.displayBlock.addClass('show').removeClass('hide');
    }
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
      if(APP.graphCollection.add(newGraph)) { newGraph.save() };            
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