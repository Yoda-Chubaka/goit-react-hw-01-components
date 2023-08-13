import styled from 'styled-components';

export const FriendItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 42px;
  margin: 0 auto;
  padding: ${props => props.theme.space[3]}px;

  max-width: 100%;
  width: 360px;

  border: 1px solid grey;
  border-radius: 8px;
  background-color: #fff;
`;

export const Status = styled.span`
  display: block;
  margin-left: 1.625rem;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background-color: ${props => {
    return props.isOnline ? 'green' : 'red';
  }};
`;

export const Image = styled.img`
  display: flex;
  align-items: center;
  justify-content: center;

  height: 60px;
  width: 60px;

  border: 1px solid grey;
  border-radius: 50%;
`;

export const Name = styled.p`
  margin-left: 10px;
  color: #000;
  text-shadow: 1px 1px 1px #fff;
  font-size: 16px;
  font-weight: 700;
`;