GraphLinkView = Backbone.View.extend({

  tagName: 'a',

  className: 'list-group-item',

  attributes: { href: '#' },

  render: function() {
    this.$el.html(11);
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

    this.$el.append( graphLink.render().el );
  }  

});