APP.GraphView = Backbone.View.extend({

  initialize: function(options) { 
   this.graph_cid = options.graph_cid;
   this.graphObj = APP.graphCollection.get(this.graph_cid); 

   this.xMin = parseInt(this.graphObj.attributes.xMin, 10);   
   this.xMax = parseInt(this.graphObj.attributes.xMax, 10);   
   this.xPeriod = parseInt(this.graphObj.attributes.xPeriod, 10); 
   this.yMin = parseInt(this.graphObj.attributes.yMin, 10);   
   this.yMax = parseInt(this.graphObj.attributes.yMax, 10);   
   this.yPeriod = parseInt(this.graphObj.attributes.yPeriod, 10);    
  },    

  tagName: 'div',

  className: 'graph',

  id: 'graph',

  template: _.template($('#graphTemplate').html()), 

  render: function() {     
    $(this.el).html(this.template(this.graphObj.toJSON()));

    this.canvasInit();
    this.renderGuides();
    this.renderScaleMarks();
    this.renderScaleValues();

    return this;
  }, 

  canvasInit: function() {  
    this.canvasGraphElem = $(this.el).find("#canvasGraph")[0];
    this.ctx = this.canvasGraphElem.getContext('2d');
    this.canvasOffset = 40;
    this.scaleMarkSize = 3;
    this.yValuesOffset = 4;
    this.xValuesOffset = -4;
    this.xMax = parseInt(this.graphObj.attributes.xMax, 10);
    this.yMax = parseInt(this.graphObj.attributes.yMax, 10);    

    this.canvasGraphElem.width = (this.xMax - this.xMin) + (this.canvasOffset * 2);
    this.canvasGraphElem.height = (this.yMax - this.yMin) + (this.canvasOffset * 2); 

    this.ctx.translate(this.canvasOffset, (this.yMax - this.yMin) + this.canvasOffset);
  }, 

  renderGuides: function() {      
    this.ctx.beginPath();

    this.ctx.moveTo(0, 0);
    this.ctx.lineTo((this.xMax - this.xMin), 0);

    this.ctx.moveTo(0, 0);
    this.ctx.lineTo(0, -(this.yMax - this.yMin));

    this.ctx.lineWidth = 1;
    this.ctx.strokeStyle = '#000';

    this.ctx.stroke(); 
  }, 

  renderScaleMarks: function() {  
    this.ctx.beginPath();

    for(var i = 0; i <= (this.xMax - this.xMin); i += this.xPeriod) {
      this.ctx.moveTo(i, -this.scaleMarkSize);
      this.ctx.lineTo(i, this.scaleMarkSize);
    };

    for(var i = this.yMin; i <= this.yMax; i += this.yPeriod) {
      this.ctx.moveTo(-this.scaleMarkSize, this.yMin - i);
      this.ctx.lineTo(this.scaleMarkSize, this.yMin - i);
    };    

    this.ctx.lineWidth = 1;
    this.ctx.strokeStyle = '#000';

    this.ctx.stroke();
  },

  renderScaleValues: function() {  
    for(var i = this.yMin; i <= this.yMax; i += this.yPeriod * 3) {
      this.ctx.font = "10px Arial";
      this.ctx.textAlign = "right";
      this.ctx.fillText(i, -10, (this.yMin - i) + this.yValuesOffset);
    }; 

    for(var i = this.xMin; i <= this.xMax; i += this.xPeriod * 4) {
      this.ctx.font = "10px Arial";
      this.ctx.textAlign = "left";
      this.ctx.fillText(i, (i - this.xMin) + this.xValuesOffset, 20);
    };    
  }    

});


APP.AddDotModalView = Backbone.View.extend({

  initialize: function(options) { 
    this.model = APP.graphCollection.get(options.graph_cid);
  },  

  tagName: 'div',

  template: _.template($('#addDotModalTemplate').html()), 

  events:{
    'click #createDotSubmit' : 'createDot'
  },  

  render: function() {  
    this.$el.html(this.template());
      
    return this;
  }, 

  createDot: function(e) {
    e.preventDefault();
  
    console.log(this.model);
  }

});
