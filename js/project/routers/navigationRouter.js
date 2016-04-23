window.APP = window.APP || {};

APP.NavigationRouter = Backbone.Router.extend({
  routes: {
    "": "page_index",  
    "page_index": "page_index", 
    "page_1": "page_1", 
    "page_2": "page_2", 
    "page_graph/:graph_cid": "page_graph", 
    "*fallback": "error404"
  },

  initialize: function() { 
    Backbone.history.start();  
    console.log(Backbone.history.getFragment());    
  },   

  page_index: function () {    
    this.renderNavbar(); 

    var indexView = new APP.IndexView();
    if (indexView) { 
      $('#contentContainer').html(indexView.render().el);
    };
  },

  page_1: function () {  
    this.renderNavbar(); 

    var page1View = new APP.Page1View();
    if (page1View) { page1View.render() };
  },  

  page_2: function () {  
    this.renderNavbar(); 

    var page2View = new APP.Page2View();
    if (page2View) { page2View.render() };
  },     

  page_graph: function (graph_cid) {  
    this.renderNavbar(); 

    var pageGraphView = new APP.PageGraphView({graph_cid: graph_cid});
    if (pageGraphView) { pageGraphView.render() };
  }, 

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
