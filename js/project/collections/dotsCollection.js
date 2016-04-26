APP.DotCollection = Backbone.Collection.extend({

  model: APP.Dot,

  localStorage: new Backbone.LocalStorage('DotList'),

  getNewIdDot: function() {
    var idDotMax = 0, 
        idDotCurrent;

    APP.dotCollection.each(function(model) { 
      idDotCurrent = parseInt(model.attributes.idDot, 10);
      if(idDotCurrent >= idDotMax) { idDotMax = idDotCurrent + 1 };
    }, this ); 

    console.log('dot id ', idDotMax);

    return idDotMax;
  }

});
