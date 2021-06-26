import Backbone from 'backbone';
import ChatModel from '../models/ChatModel';

const ChatCollection = Backbone.Collection.extend({
  model: ChatModel
})

export default ChatCollection;