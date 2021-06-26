import Backbone from 'backbone';

const ChatModel = Backbone.Model.extend({

  defaults: {
    text: '',
    userName: ''
  },

  validate: function(attrs) {
    if (!attrs.text){
      return 'Text body is required.';
    }
    if (!attrs.userName){
      return 'Username is required.'
    }
  }
});

export default ChatModel;