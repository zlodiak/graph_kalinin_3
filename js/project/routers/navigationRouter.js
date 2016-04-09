var NavigationRouter = Backbone.Router.extend({
  routes: {
    "": "index", 
    "!/": "index", 
    "!/page1": "page1", 
    "!/page2": "page2", 
    "!/page3": "page3", 
    "!/page4": "page4", 
    "!/page5": "page5"
  },

  index: function () {
    if (Views.indexView != null) {  
      Views.ndexView.render();
    }
  }
});

var navigationRouter = new NavigationRouter(); 

Backbone.history.start();  




