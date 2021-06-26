import Backbone from 'backbone';
import template from '../templates/navBarTemplate.html';
import _ from 'underscore';

const NavBar = Backbone.View.extend({
  template: _.template(template),

  render: function() {
    this.$el.html(this.template());
    return this;
  }
})

export default NavBar;