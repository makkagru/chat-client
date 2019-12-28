import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Join = () => {
  const [name, setName] = useState('');
  const [room, setRoom] = useState('');

  return (
    <Root>
      <Content>
        <H1>Join</H1>
        <InputsContent>
          <Input placeholder='Name' onChange={(e) => setName(e.target.value)} /> 
          <Input placeholder='Room' onChange={(e) => setRoom(e.target.value)} /> 
        </InputsContent>
        <Link to={`/chat?name=${name}&room=${room}`}>
          <Button>Join!</Button>
        </Link>
      </Content>
    </Root>
  );
}

const Root = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #EFEEEE;
`;

const Content = styled.div`
  width: 90%;
  max-width: 400px;
  height: 35%;
  background: #fff;
  text-align: center;
  -webkit-box-shadow: 0px 0px 66px 0px rgba(0,0,0,0.18);
  -moz-box-shadow: 0px 0px 66px 0px rgba(0,0,0,0.18);
  box-shadow: 0px 0px 66px 0px rgba(0,0,0,0.18);
  padding: 20px 0;
  @media(min-width: 500px) {
    width: 35%;
  }
`;

const H1 = styled.div`
  color: #29C9E9;
  font-size: 2em;
  font-weight: bold;
`;

const InputsContent = styled.div`
  margin: 20px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Input = styled.input`
  width: 50%;
  padding: 10px;
  border: none;
  border-bottom: 1px solid #29C9E9;
  outline: none;
`;

const Button = styled.button`
  border: none;
  outline: none;
  width: 80px;
  height: 30px;
  background-color: #29C9E9;
  color: #fff;
  cursor: pointer;
  margin-top: 10px;
  font-weight: bold;
  transition: 0.4s all ease;

  &:hover {
    background-color: #fff;
    color: #29C9E9;
    border: 1px solid #29C9E9; 
  }
`;

export default Join;