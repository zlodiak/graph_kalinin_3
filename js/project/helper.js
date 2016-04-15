APP.helper = {

  getInitialGraphs: function() {
    var initialGraphs = [
      { title: 'title 1', yMax: 200, yMin: 0, yPeriod: 10, xMax: 600,  xMin: 0, xPeriod: 10, dots: {} }, 
      { title: 'title 2', yMax: 200, yMin: 0, yPeriod: 10, xMax: 600,  xMin: 0, xPeriod: 10, dots: {} }, 
      { title: 'title 3', yMax: 200, yMin: 0, yPeriod: 10, xMax: 600,  xMin: 0, xPeriod: 10, dots: {} }
    ];

    return initialGraphs;
  },

  changeBorderColorElem: function(selector, borderColor) {
    $(selector).css({
      border: '1px solid ' + borderColor
    });  
  },

  getSimpleKeys: function(allKeysObj) {
    var simpleKeysArr = [];

    for(key in allKeysObj) {
      if(typeof allKeysObj[key] != 'object') { simpleKeysArr.push(key) };
    };

    return simpleKeysArr;
  }

}