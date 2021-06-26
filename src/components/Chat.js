import Backbone from 'backbone';

const Chat = Backbone.View.extend({
  render: function() {
    this.$el.html(`${this.model.get('text')}`);
    return this;
  }
});

export default Chat;