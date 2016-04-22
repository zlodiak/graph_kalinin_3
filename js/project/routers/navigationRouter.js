window.APP = window.APP || {};

APP.NavigationRouter = Backbone.Router.extend({
  routes: {
    "": "index",  
    "index": "index", 
    "page1": "page1", 
    "page2": "page2", 
    "page3": "page3", 
    "page4": "page4", 
    "page5": "page5", 
    "graph/:graph_cid": "graph", 
    "*fallback": "error404"
  },

  initialize: function() { 
    Backbone.history.start();  
    console.log(Backbone.history.getFragment());

    
  },  

  index: function () {    
    this.renderNavbar(); 

    var indexView = new APP.IndexView();
    if (indexView) { indexView.render() };
  },

  page1: function () {  
    this.renderNavbar(); 

    var page1View = new APP.Page1View();
    if (page1View) { page1View.render() };
  },  

  page2: function () {  
    this.renderNavbar(); 

    var page2View = new APP.Page2View();
    if (page2View) { page2View.render() };
  },  

  page3: function () {  
    this.renderNavbar(); 

    var page3View = new APP.Page3View();
    if (page3View) { page3View.render() };
  },  

  page4: function () {  
    this.renderNavbar(); 

    var page4View = new APP.Page4View();
    if (page4View) { page4View.render() };
  },  

  page5: function () {  
    this.renderNavbar(); 

    var page5View = new APP.Page5View();
    if (page5View) { page5View.render() };
  }, 

  graph: function (graph_cid) {
    this.renderNavbar(); 

    var graphView = new APP.GraphView({graph_cid: graph_cid});
    if(graphView) { graphView.render() };
  },   

  error404: function () {  
    this.renderNavbar(); 

    var error404View = new APP.Error404View();
    if (error404View) { error404View.render() };
  }, 

  renderNavbar: function () { 
    var navbarView = new APP.NavbarView(); 
    if (navbarView) { $('#mainContainer').prepend(navbarView.render().el) };  
  }            



           
        
});
