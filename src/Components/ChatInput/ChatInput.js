import React from 'react';
import styled from 'styled-components';

const ChatInput = ({message, setMessage, sendMessage}) => {
  return (
    <Content>
      <InputContent>
        <Input
         value={message} 
         onChange={(e) => setMessage(e.target.value)} 
         onKeyPress={(e) => e.key === 'Enter' ? sendMessage(e) : null}
         placeholder="Type your message" />
      </InputContent>
      <SendButtonContent>
        <SendButton>Send</SendButton>
      </SendButtonContent>
    </Content>
  );
}

const Content = styled.div`
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 10vh;
  display: flex;
  flex-direction: row;
`;

const InputContent = styled.div`
  width: 85%;
`;

const Input = styled.textarea`
  border: #29C9E9 1px solid;
  outline: none;
  resize: none;
  width: 100%;
  height: 100%;
`;

const SendButtonContent = styled.div`
  width: 15%;
`;

const SendButton = styled.button`
  width: 100%;
  height: 100%;
  border: none;
  outline: none;
  background-color: #29C9E9;
  color: #fff;
  font-weight: bold;
  font-size: 20px;
`;

export default ChatInput;