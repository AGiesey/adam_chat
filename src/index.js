import './styles/styles.css';
import Backbone from 'backbone'

const ChatModel = Backbone.Model.extend();

const firstChat = new ChatModel({msg: 'hello world'})
console.log('App is working', firstChat, firstChat.get('msg'));