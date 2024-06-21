'use client'
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #101010;
  color: white;
  position: relative;
  overflow: hidden;
`;

const Background = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: -1;
  overflow: hidden;
`;

const Oval = styled.div<{ width?: string; height?: string; top?: string; left?: string }>`
  position: absolute;
  width: ${({ width }) => width || '200px'};
  height: ${({ height }) => height || '100px'};
  background: linear-gradient(135deg, rgba(0, 255, 255, 0.2), rgba(255, 0, 255, 0.2));
  border-radius: 50%;
  filter: blur(50px);
  top: ${({ top }) => top || '50%'};
  left: ${({ left }) => left || '50%'};
  transform: translate(-50%, -50%);
`;

const Title = styled.h1`
  font-size: 2.5rem;
  margin: 0.5rem 0;
`;

const Subtitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 300;
  margin: 0.5rem 0;
`;

const Button = styled.button`
  background-color: #00cc99;
  color: white;
  border: none;
  padding: 10px 20px;
  font-size: 1rem;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 1rem;

  &:hover {
    background-color: #009977;
  }
`;

export default function Home() {
  return (
    <Container>
      <Background>
        <Oval width="300px" height="150px" top="20%" left="30%" />
        <Oval width="400px" height="200px" top="60%" left="70%" />
        <Oval width="200px" height="100px" top="50%" left="50%" />
      </Background>
      <Title>My LP</Title>
      <Subtitle>ポートフォリオ</Subtitle>
      <Button>appへ</Button>
    </Container>
  );
}
