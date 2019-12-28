import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';
import queryString from 'query-string';

import ChatHeader from '../../Components/ChatHeader';
import Messages from '../../Components/Messages';
import ChatInput from '../../Components/ChatInput';

let socket;

const Chat = ({ location }) => {
  const [name, setName] = useState('');
  const [room, setRoom] = useState('');
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const ENDPOINT = 'localhost:5000';
  
  useEffect(() => {
    const {name, room} = queryString.parse(location.search);
    setName(name);
    setRoom(room);
    socket = io(ENDPOINT);
    socket.emit('join', {name, room}, () => {
    });
    return () => {
      socket.emit('disconnect')
      socket.off()
    }
  }, [ENDPOINT, location.search]);

  useEffect(() => {
    socket.on('message', (message) => {
      console.log(message, 'message');
      setMessages([...messages, message]);
    })
  }, [messages]);

  const sendMessage = (e) => {
    e.preventDefault();
    if(message) {
      socket.emit('sendMessage', message, () => setMessage(''));
    }
  }

  return (
    <div>
      <ChatHeader room={room} />
      <Messages messages={messages} name={name} />
      <ChatInput message={message} setMessage={setMessage} sendMessage={sendMessage} />
    </div>
  );
}

export default Chat;

