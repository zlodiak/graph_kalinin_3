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
    var errorsArr = [],
        xCoord = parseInt($.trim(attrs.xCoord), 10),
        yCoord = parseInt($.trim(attrs.yCoord), 10),
        info = $.trim(attrs.info),
        graphId = $.trim(attrs.graphId),
        yMax = parseInt($.trim(attrs.yMax), 10),
        yMin = parseInt($.trim(attrs.yMin), 10),
        xMax = parseInt($.trim(attrs.xMax), 10),
        xMin = parseInt($.trim(attrs.xMin), 10);    

    // check type and length
    if(isNaN(xCoord) == true || xCoord.length == 0) { errorsArr.push('xCoord') };
    if(isNaN(yCoord) == true || yCoord.length == 0) { errorsArr.push('yCoord') };  

    // check range 
    if(parseInt(yCoord, 10) < parseInt(yMin, 10) ) { errorsArr.push('yCoord') };
    if(parseInt(yCoord, 10) > parseInt(yMax, 10) ) { errorsArr.push('yCoord') };
    if(parseInt(xCoord, 10) < parseInt(xMin, 10) ) { errorsArr.push('xCoord') };
    if(parseInt(xCoord, 10) > parseInt(xMax, 10) ) { errorsArr.push('xCoord') };

    if(errorsArr.length != 0) { return errorsArr };
  }  
});