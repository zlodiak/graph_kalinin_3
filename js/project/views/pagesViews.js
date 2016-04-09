var IndexView = Backbone.View.extend({
  el: $('#contentContainer'), 

  template: _.template($('#index').html()), 

  render: function () {   
    $(this.el).html(this.template());
    return this;
  }
});

views = { 
          indexView: new IndexView()
        };
