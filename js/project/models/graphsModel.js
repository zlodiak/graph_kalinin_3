APP.Graph = Backbone.Model.extend({
  defaults: {
    title: undefined,
    yMax: undefined,
    yMin: undefined,
    yPeriod: undefined,
    xMax: undefined,
    xMin: undefined,
    xPeriod: undefined,
    dots: {}
  }, 

  idAttribute: 'cid',

  validate: function(attrs) {
    var errorsArr = [],
        title = $.trim(attrs.title),
        yMax = $.trim(attrs.yMax);
        yMin = $.trim(attrs.yMin);
        yPeriod = $.trim(attrs.yPeriod);
        xMax = $.trim(attrs.xMax);
        xMin = $.trim(attrs.xMin);
        xPeriod = $.trim(attrs.xPeriod);

    // check type and length
    if(title.length == 0) { errorsArr.push('title'); };
    if(isNaN(yMax) == true || yMax.length == 0) { errorsArr.push('yMax') };
    if(isNaN(yMin) == true || yMin.length == 0) { errorsArr.push('yMin') };
    if(isNaN(yPeriod) == true || yPeriod.length == 0) { errorsArr.push('yPeriod') };
    if(isNaN(xMax) == true || xMax.length == 0) { errorsArr.push('xMax') };
    if(isNaN(xMin) == true || xMin.length == 0) { errorsArr.push('xMin') };
    if(isNaN(xPeriod) == true || xPeriod.length == 0) { errorsArr.push('xPeriod') };   

    // check range 
    if(parseInt(yMax, 10) <= parseInt(yMin, 10) ) { errorsArr.push('yMax', 'yMin') };
    if(parseInt(xMax, 10) <= parseInt(xMin, 10) ) { errorsArr.push('xMax', 'xMin') };

    // check period
    if(parseInt(yPeriod, 10) <= 0 ) { errorsArr.push('yPeriod') };
    if(parseInt(xPeriod, 10) <= 0 ) { errorsArr.push('xPeriod') };

    if(errorsArr.length != 0) { return errorsArr };
  }  
});