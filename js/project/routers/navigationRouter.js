window.APP = window.APP || {};

APP.NavigationRouter = Backbone.Router.extend({
  routes: {
    "": "index", 
    "!/": "index", 
    "!/index": "index", 
    "!/page1": "page1", 
    "!/page2": "page2", 
    "!/page3": "page3", 
    "!/page4": "page4", 
    "!/page5": "page5"
  },

  initialize: function() { 
    Backbone.history.start();
  },  

  index: function () {  
    var indexView = new APP.IndexView();

    if (indexView) {  
      var initialGraphs = APP.helper.getInitialGraphs();
      new APP.GraphLinksView(initialGraphs);                               
 
      var graphSimpleKeys = APP.helper.getSimpleKeys(APP.Graph.prototype.defaults);     
      new APP.AddGraphModalView(graphSimpleKeys);   
    };
  },

  page1: function () {  
    var page1View = new APP.Page1View();

    if (page1View) {  
      page1View.render();
    }
  },  

  page2: function () {  
    var page2View = new APP.Page2View();

    if (page2View) {  
      page2View.render();
    }
  },  

  page3: function () {  
    var page3View = new APP.Page3View();

    if (page3View) {  
      page3View.render();
    }
  },  

  page4: function () {  
    var page4View = new APP.Page4View();

    if (page4View) {  
      page4View.render();
    }
  },  

  page5: function () {  
    var page5View = new APP.Page5View();

    if (page5View) {  
      page5View.render();
    }
  }        
        
});
