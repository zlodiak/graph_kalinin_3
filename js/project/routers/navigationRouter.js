var NavigationRouter = Backbone.Router.extend({
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

  index: function () {  console.log('index');
    if (views.indexView != null) {  
      views.indexView.render();
    }
  },

  page1: function () {  console.log('page1');
    if (views.indexView != null) {  
      views.page1View.render();
    }
  },  

  page2: function () {  console.log('page2');
    if (views.indexView != null) {  
      views.page2View.render();
    }
  },  

  page3: function () {  console.log('page3');
    if (views.indexView != null) {  
      views.page3View.render();
    }
  },  

  page4: function () {  console.log('page4');
    if (views.indexView != null) {  
      views.page4View.render();
    }
  },  

  page5: function () {  
    if (views.indexView != null) {  
      views.page5View.render();
    }
  }          
});

var navigationRouter = new NavigationRouter(); 

Backbone.history.start();  




