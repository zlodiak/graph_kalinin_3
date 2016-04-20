APP.GraphView = Backbone.View.extend({

  initialize: function(options) {
   this.graph_cid = options.graph_cid;
   this.graphObj = APP.graphCollection.get(this.graph_cid);
  },    

  el: $('#contentContainer'), 

  template: _.template($('#graphTemplate').html()), 

  render: function() {   
     //console.dir('=====');  
     //console.log(this.graphObj.toJSON());    
    $(this.el).html(this.template(this.graphObj.toJSON()));
    this.renderGuides();
    return this;
  }, 

  renderGuides: function() {  
    var canvasGraphElem = document.getElementById("canvasGraph"), 
        ctx = canvasGraphElem.getContext('2d'),
        canvasOffset = 40,
        xMax = parseInt(this.graphObj.attributes.xMax, 10),
        yMax = parseInt(this.graphObj.attributes.yMax, 10);

    canvasGraphElem.width = xMax + (canvasOffset * 2);
    canvasGraphElem.height = yMax + (canvasOffset * 2);  

/*    console.dir(this.graphObj.toJSON());  
    console.log(xMax);  
    console.log(yMax);  
    console.log(canvasGraphElem.width);  
    console.log(canvasGraphElem.height);  */

    ctx.translate(canvasOffset, yMax + canvasOffset);
    ctx.beginPath();

    ctx.moveTo(0, 0);
    ctx.lineTo(xMax, 0);

    ctx.moveTo(0, 0);
    ctx.lineTo(0, -yMax);

    ctx.lineWidth = 1;
    ctx.strokeStyle = '#000';

    ctx.stroke(); 
  }  

});