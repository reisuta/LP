'use client'
import styled from 'styled-components';

const Container = styled.header`
  width: 100%;
  padding: 20px;
  background-color: #333;
  color: white;
  position: fixed;
  top: 0;
  z-index: 10;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const HeaderLeft = styled.div`
  margin-left: 20px;
`;

const HeaderRight = styled.div`
  display: flex;
  gap: 20px;
  margin-right: 60px;
`;


export default function Header() {
  return (
    <>
      <Container>
        <HeaderLeft>About</HeaderLeft>
        <HeaderRight>
          <div>Likes</div>
          <div>SNS</div>
        </HeaderRight>
      </Container>
    </>
  )
}
