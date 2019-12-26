import React from 'react';
import styled from 'styled-components';

const Message = ({ message: {user, text}, name }) => {
  let isSentByCurrentUser = false;
  const trimName = name.trim().toLowerCase();

  if (user.name === name) {
    isSentByCurrentUser = true;
  }

  return (
    <div>
      {isSentByCurrentUser ? (
        <MyMessage>
          {text}
        </MyMessage>
      ) : (
        <OtherMessageContent>
          <OtherMessage>
            {text}
          </OtherMessage>
          <p>
            {name}
          </p>
        </OtherMessageContent>
      )}
    </div>
  );
}

const MyMessage = styled.div`;
`;

const OtherMessageContent = styled.div``;

const OtherMessage = styled.div``;

export default Message;