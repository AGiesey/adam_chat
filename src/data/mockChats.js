import ChatModel from '../models/ChatModel';
import ChatCollection from '../collections/ChatCollection';

export const mockChats = new ChatCollection([
  new ChatModel({text: 'Hello World', userName: 'Adam'}),
  new ChatModel({text: 'Hello Adam', userName: 'World'})
])