import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';
import queryString from 'query-string';

let socket;

const Chat = ({ location }) => {
  const [name, setName] = useState('');
  const [room, setRoom] = useState('');
  const ENDPOINT = 'localhost:5000';
  useEffect(() => {
    const {name, room} = queryString.parse(location.search);
    setName(name);
    setRoom(room);
    socket = io(ENDPOINT);

    console.log(socket);
  }, [ENDPOINT, socket])

  return (
    <h1>Chat</h1>
  );
}

export default Chat;

