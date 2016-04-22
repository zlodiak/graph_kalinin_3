APP.NavbarView = Backbone.View.extend({  

  tagName: 'nav',

  className: 'navbar navbar-default',

  id: 'navbar', 

  initialize: function() {
 
  },    

  template: _.template($('#navbarTemplate').html()), 

  render: function () { 
    $(this.el).html(this.template());  
    return this;
  }

});