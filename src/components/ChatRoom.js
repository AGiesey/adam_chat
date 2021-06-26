import Backbone from 'backbone';
import template from '../templates/chatRoomTemplate.html';
import NavBar from './NavBar';
import ChatCollection from '../collections/ChatCollection';
import ChatModel from '../models/ChatModel';
import _ from 'underscore';
import Chat from './Chat';
import $ from 'jquery';

var ChatRoom = Backbone.View.extend({
  template: _.template(template),

  initialize: function() {
    this.navBarView = new NavBar()
    this.chatsCollection = new ChatCollection([
      new ChatModel({text: 'Hello World', userName: 'Adam'}),
      new ChatModel({text: 'Hello Adam', userName: 'World'})
    ])
  },

  render: function() {
    this.$el.html(this.template());
    this.$('#nav-bar-container').html(this.navBarView.render().el);

    this.$('#chats-container').html(
      this.chatsCollection.models.map(chat => new Chat({model: chat}).render().el)
    )

    return this;
  }
});

export default ChatRoom;