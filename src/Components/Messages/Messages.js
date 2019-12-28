import React from 'react';
import styled from 'styled-components';

import Message from '../Message';

const Messages = ({ messages, name }) => {
  return (
    <Content>
      {messages.map((m, i) => (
        <div key={i}>
          <Message message={m} name={name} />    
        </div>
      ))}
    </Content>
  );
}

const Content = styled.div`
  padding: 100px 4%;
`;

export default Messages;