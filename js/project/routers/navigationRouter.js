window.APP = window.APP || {};

APP.NavigationRouter = Backbone.Router.extend({
  routes: {
    "": "index",  
    "index": "index", 
    "page1": "page1", 
    "page2": "page2", 
    "page_graph/:graph_cid": "page_graph", 
    "*fallback": "error404"
  },

  initialize: function() { 
    Backbone.history.start();  
    console.log(Backbone.history.getFragment());    
  },  

  page_graph: function (graph_cid) {  
    this.renderNavbar(); 

    var pageGraphView = new APP.PageGraphView({graph_cid: graph_cid});
    if (pageGraphView) { pageGraphView.render() };
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

/*  graph: function (graph_cid) {
    this.renderNavbar(); 

    var graphView = new APP.GraphView({graph_cid: graph_cid});
    if(graphView) { graphView.render() };
  },  */ 

  error404: function () {  
    this.renderNavbar(); 

    var error404View = new APP.Error404View();
    if (error404View) { error404View.render() };
  }, 

  renderNavbar: function () { 
    var slug = Backbone.history.getFragment().substring(0,5);
    var navbarView = new APP.NavbarView(slug); 
    if (navbarView) { $('#mainContainer').prepend(navbarView.render().el) };  
  }            



           
        
});
