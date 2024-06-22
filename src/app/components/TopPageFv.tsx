'use client'
import styled from 'styled-components';
import Link from 'next/link';

const PageContainer = styled.div<{ background?: string }>`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 100vh;
  color: white;
  background: ${({ background }) => background || 'black'};
  position: relative;
  overflow: hidden;
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
  z-index: -1;
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
  z-index: 2;

  &:hover {
    background-color: #009977;
  }
`;

export default function TopPageFv() {
  return (
    <>
      <PageContainer>
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
