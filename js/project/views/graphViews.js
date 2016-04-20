APP.GraphView = Backbone.View.extend({

  initialize: function(options) {
   this.graph_cid = options.graph_cid;
   this.graphObj = APP.graphCollection.get(this.graph_cid);    
  },    

  el: $('#contentContainer'), 

  template: _.template($('#graphTemplate').html()), 

  render: function() {     
    $(this.el).html(this.template(this.graphObj.toJSON()));
    this.canvasInit();
    this.renderGuides();
    return this;
  }, 

  canvasInit: function() {  
    this.canvasGraphElem = document.getElementById("canvasGraph");
    this.ctx = this.canvasGraphElem.getContext('2d');
    this.canvasOffset = 40;
    this.xMax = parseInt(this.graphObj.attributes.xMax, 10);
    this.yMax = parseInt(this.graphObj.attributes.yMax, 10);

    this.canvasGraphElem.width = this.xMax + (this.canvasOffset * 2);
    this.canvasGraphElem.height = this.yMax + (this.canvasOffset * 2); 
  }, 

  renderGuides: function() {  


/*    console.dir(this.graphObj.toJSON());  
    console.log(xMax);  
    console.log(yMax);  
    console.log(canvasGraphElem.width);  
    console.log(canvasGraphElem.height);  */

    this.ctx.translate(this.canvasOffset, this.yMax + this.canvasOffset);
    this.ctx.beginPath();

    this.ctx.moveTo(0, 0);
    this.ctx.lineTo(this.xMax, 0);

    this.ctx.moveTo(0, 0);
    this.ctx.lineTo(0, -this.yMax);

    this.ctx.lineWidth = 1;
    this.ctx.strokeStyle = '#000';

    this.ctx.stroke(); 
  }, 

  renderScaleMarks: function() {  

  },

  renderScaleValues: function() {  

  }    

});