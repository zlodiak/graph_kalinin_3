APP.GraphCollection = Backbone.Collection.extend({

  model: APP.Graph,

  localStorage: new Backbone.LocalStorage('GraphList')

});
