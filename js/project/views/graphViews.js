APP.GraphView = Backbone.View.extend({

  initialize: function(options) {
   this.graph_cid = options.graph_cid;
   console.log(this.graph_cid + 'gc');
   this.graphObj = APP.graphCollection.get(this.graph_cid);
   console.dir('-----');
   console.dir(this.graphObj);
  },    

  el: $('#contentContainer'), 

  template: _.template($('#graphTemplate').html()), 

  render: function () {   
     console.dir('=====');
     console.dir(this.graphObj);    
    $(this.el).html(this.template({graph_cid: this.graphObj.attributes.title}));
    return this;
  }

});