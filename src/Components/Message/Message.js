import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const Message = ({ message: {user, text}, name }) => {
  let isSentByCurrentUser = false;

  const trimName = name.trim().toLowerCase();
  if (user === trimName) {
    isSentByCurrentUser = true;
  };

  return (
    <Content>
      {isSentByCurrentUser ? (
        <MyMessageContent>
          <MyMessage>
            {text}
          </MyMessage>
        </MyMessageContent>
      ) : (
        <OtherMessageContent>
          <OtherMessage>
            {text}
          </OtherMessage>
          <p>
            {user}
          </p>
        </OtherMessageContent>
      )}
    </Content>
  );
}

const Content = styled.div`
  margin-top: 10px;
`;

const MyMessageContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;  
`;

const MyMessage = styled.div`;
  background: #29C9E9;
  border-radius: 6px;
  padding: 15px 10px;
  color: #fff;
  font-weight: bold;
  font-size: 16px;
  max-width: 40%;
  word-wrap: break-word;
`;

const OtherMessageContent = styled.div`
  display: flex;
  flex-direction: row;
`;

const OtherMessage = styled.div`
  background: #EFEEEE;
  border-radius: 6px;
  padding: 15px 10px;
  font-weight: bold;
  font-size: 16px;
  max-width: 200px;
  word-wrap: break-word;
`;

export default Message;