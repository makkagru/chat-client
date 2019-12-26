import React from 'react';
import styled from 'styled-components';

import Message from '../Message';

const Messages = ({ messages, name }) => {

  return (
    <div>
      {messages.map((m, i) => (
        <div key={i}>
          <Message message={m} name={name} />    
        </div>
      ))}
    </div>
  );
}

export default Messages;