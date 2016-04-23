APP.NavbarView = Backbone.View.extend({  

  tagName: 'nav',

  className: 'navbar navbar-default',

  id: 'navbar', 

  initialize: function(slug) {
    this.slug = slug;
  },    

  template: _.template($('#navbarTemplate').html()), 

  render: function () { 
    $('#navbar').remove();

    $(this.el).html(this.template());  

    this.toggleStateAddDotButton();
    this.changeActivePunkt();

    return this;
  },

  changeActivePunkt: function () { 
    $(this.el).find('li').removeClass('active');
    $(this.el).find("[data-punkt='" + this.slug + "']").addClass('active');
  },

  toggleStateAddDotButton: function () { 
    var addDotButtonPunkt = $(this.el).find('#addDotButton').parent();
    if(this.slug == 'page_graph') {
      addDotButtonPunkt.show();
    } else {
      addDotButtonPunkt.hide();
    };
  }

});