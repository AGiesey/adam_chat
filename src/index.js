import './styles/styles.scss';
import ChatRoom from './components/ChatRoom';
import $ from 'jquery';

const chatRoom = new ChatRoom({el: $('body')});
chatRoom.render();