'use client'
import styled, { keyframes } from 'styled-components';
import Link from 'next/link';

const waveAnimation1 = keyframes`
  0% {
    transform: translateX(0) translateY(0);
  }
  50% {
    transform: translateX(-50%) translateY(15px);
  }
  100% {
    transform: translateX(-100%) translateY(0);
  }
`;

const waveAnimation2 = keyframes`
  0% {
    transform: translateX(0) translateY(0);
  }
  50% {
    transform: translateX(-50%) translateY(-15px);
  }
  100% {
    transform: translateX(-100%) translateY(0);
  }
`;

const hexagonAnimation = keyframes`
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-20px);
  }
  100% {
    transform: translateY(0);
  }
`;

const PageContainer = styled.div<{ background?: string }>`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 100vh;
  color: white;
  background: ${({ background }) => background || 'black'};
  opacity: 0.9;
  position: relative;
  overflow: hidden;
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 200%;
    height: 100%;
    background: url('/wave.svg') repeat-x;
    animation: ${waveAnimation1} 30s linear infinite;
    opacity: 0.5;
    z-index: -2;
  }
  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 200%;
    height: 100%;
    background: url('/wave2.svg') repeat-x;
    animation: ${waveAnimation2} 15s linear infinite;
    opacity: 0.8;
    z-index: -1;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 50%;
  position: relative;
  overflow: hidden;
  z-index: 1;
`;

const VerticalContainer = styled(Container)`
  writing-mode: vertical-rl;
  text-orientation: upright;
`;

const Background = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: -3;
  overflow: hidden;
`;

const Oval = styled.div<{ width?: string; height?: string; top?: string; left?: string, color?: string }>`
  position: absolute;
  width: ${({ width }) => width || '200px'};
  height: ${({ height }) => height || '100px'};
  background: ${({ color }) => color || 'red'};
  border-radius: 50%;
  filter: blur(50px);
  top: ${({ top }) => top || '50%'};
  left: ${({ left }) => left || '50%'};
  transform: translate(-50%, -50%);
`;

const Hexagon = styled.div`
  position: absolute;
  width: 60px;
  height: 60px;
  background-color: rgba(255, 255, 255, 0.1);
  clip-path: polygon(
    25% 6.7%, 
    75% 6.7%, 
    100% 50%, 
    75% 93.3%, 
    25% 93.3%, 
    0% 50%
  );
  animation: ${hexagonAnimation} 4s ease-in-out infinite;
  z-index: -4;

  &:nth-child(1) {
    top: 10%;
    left: 20%;
    animation-delay: 0s;
  }
  &:nth-child(2) {
    top: 30%;
    left: 40%;
    animation-delay: 1s;
  }
  &:nth-child(3) {
    top: 50%;
    left: 60%;
    animation-delay: 2s;
  }
  &:nth-child(4) {
    top: 70%;
    left: 80%;
    animation-delay: 3s;
  }
  &:nth-child(5) {
    top: 80%;
    left: 20%;
    animation-delay: 3s;
  }
  &:nth-child(6) {
    top: 80%;
    left: 60%;
    animation-delay: 3s;
  }
`;

const Title = styled.h1`
  font-size: 2.5rem;
  margin: 0.5rem 0;
`;

const Title2 = styled.h2<{ color?: string, size?: number }>`
  font-size: ${({ size }) => size || '30px'};
  font-family: cursive;
  color: ${({ color }) => color || 'white'};
  margin: 0.5rem 0;
`;

const Subtitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 300;
  margin: 0.5rem 0;
`;

const StyledLink = styled(Link)`
  background-color: #00cc99;
  color: white;
  padding: 10px 20px;
  font-size: 1rem;
  border-radius: 5px;
  text-decoration: none;
  margin-top: 1rem;
  display: inline-block;
  z-index: 10;

  &:hover {
    background-color: #009977;
  }
`;

export default function TopPageFv() {
  return (
    <>
      <PageContainer>
        <Hexagon />
        <Hexagon />
        <Hexagon />
        <Hexagon />
        <Hexagon />
        <Hexagon />
        <Container>
          <Background>
            <Oval width="300px" height="150px" top="40%" left="30%" color="blue"/>
            <Oval width="400px" height="200px" top="50%" left="50%" color="white"/>
            <Oval width="200px" height="100px" top="65%" left="70%" color="red"/>
          </Background>
          <Title>reisuta</Title>
          <Subtitle>フルスタックLinuxプログラミング</Subtitle>
          <StyledLink href="/diagnosis">文豪性格診断</StyledLink>
          <Link href="/diagnosis">test</Link>
        </Container>

        <VerticalContainer>
          <Background>
            <Oval width="300px" height="150px" top="50%" left="30%" color="gray"/>
            <Oval width="400px" height="200px" top="60%" left="70%" color="white"/>
            <Oval width="200px" height="100px" top="50%" left="50%" color="blue"/>
          </Background>
          <Title2 size="40px" color="red">「人生を幸福にするためには</Title2>
          <Title2 size="30px" color="gray">日常の瑣事を愛さなければならぬ」</Title2>
          <Subtitle>芥川龍之介</Subtitle>
        </VerticalContainer>
      </PageContainer>
    </>
  );
}
