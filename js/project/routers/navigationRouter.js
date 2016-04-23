window.APP = window.APP || {};

APP.NavigationRouter = Backbone.Router.extend({
  routes: {
    "": "page_index",  
    "page_index": "page_index", 
    "page_1": "page_1", 
    "page_2": "page_2", 
    "page_graph/:graph_cid": "page_graph", 
    "*fallback": "page_error404"
  },

  initialize: function() { 
    Backbone.history.start();  
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
    if (page1View) { 
      $('#contentContainer').html(page1View.render().el);
    };
  },  

  page_2: function () {  
    this.renderNavbar(); 

    var page2View = new APP.Page2View();
    if (page2View) { 
      $('#contentContainer').html(page2View.render().el);
    };
  },     

  page_graph: function (graph_cid) {  
    this.renderNavbar(); 

    var pageGraphView = new APP.PageGraphView({graph_cid: graph_cid});
    if (pageGraphView) { 
      $('#contentContainer').html(pageGraphView.render().el);
    };
  }, 

  page_error404: function () {  
    this.renderNavbar(); 

    var pageError404View = new APP.PageError404View();
    if (pageError404View) { 
      $('#contentContainer').html(pageError404View.render().el);
    };
  }, 

  renderNavbar: function () { 
    var slug = Backbone.history.getFragment().substring(0,5);
    var navbarView = new APP.NavbarView(slug); 
    if (navbarView) { $('#mainContainer').prepend(navbarView.render().el) };  
  }            



           
        
});
