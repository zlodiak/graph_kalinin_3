APP.NavbarView = Backbone.View.extend({  

  tagName: 'nav',

  className: 'navbar navbar-default',

  id: 'navbar', 

  initialize: function() {
 
  },    

  template: _.template($('#navbarTemplate').html()), 

  render: function () { 
    $('#navbar').remove();

    $(this.el).html(this.template());  

    var addDotButtonPunkt = $(this.el).find('#addDotButton').parent();
    if(Backbone.history.getFragment().substring(0,5) == 'graph') {
      addDotButtonPunkt.show();
    } else {
      addDotButtonPunkt.hide();
    };

    return this;
  }

});