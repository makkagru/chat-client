import React from 'react';
import styled from 'styled-components';

const ChatHeader = ({ room }) => {
  return (
    <Content>
      <RoomName>
        {room}
      </RoomName>
    </Content>
  );
}

const Content = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  background-color: #29C9E9;
  height: 10vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const RoomName = styled.div`
  color: #fff;
  font-weight: bold;
  font-size: 25px;
`;

export default ChatHeader;