GraphLinkView = Backbone.View.extend({

  tagName: 'a',

  className: 'list-group-item',

  render: function() {  
    this.$el.html(this.model.attributes.title);
    this.$el.attr('href', this.model.attributes.title);
    return this;
  }

});


GraphLinksView = Backbone.View.extend({

  el: '#graphsList',

  initialize: function(initialGraphs) { 
    this.collection = new GraphList(initialGraphs);
    this.render();  
  },

  render: function() {  
    this.collection.each(function(item) {
    this.renderGraphLink(item);
    }, this );
  }, 

  renderGraphLink: function(item) { 
    var graphLink = new GraphLinkView({
      model: item
    });

    this.$el.prepend(graphLink.render().el);
  }  

});