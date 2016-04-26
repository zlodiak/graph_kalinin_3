APP.Dot = Backbone.Model.extend({
  defaults: {
    idDot: undefined,
    graphId: undefined,
    xCoord: undefined,
    yCoord: undefined,
    info: undefined
  }, 

  idAttribute: 'idDot',

  validate: function(attrs) {

  }  
});