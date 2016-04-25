APP.GraphCollection = Backbone.Collection.extend({

  model: APP.Graph,

  localStorage: new Backbone.LocalStorage('GraphList'),

  getNewIdGraph: function() {
    var idGraphMax = 0, 
        idGraphCurrent;

    APP.graphCollection.each(function(model) { 
      idGraphCurrent = parseInt(model.attributes.idGraph, 10);
      if(idGraphCurrent >= idGraphMax) { idGraphMax = idGraphCurrent + 1 };
    }, this ); 

    return idGraphMax;

  }

});
