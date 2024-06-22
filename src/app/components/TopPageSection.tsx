'use client'
import styled from 'styled-components';

const PageContainer = styled.div<{ background?: string }>`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 100vh;
  color: white;
  background: ${({ background }) => background || 'black'};
  z-index: -1;
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
`;

const Background = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 3;
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

export default function TopPageSection() {
  return (
    <>
      <PageContainer background="gray">
        <Container>
          <Background>
            <Oval width="100%" height="400px" top="60%" left="70%" color="white"/>
          </Background>
          <Title>日本酒</Title>
          <Subtitle>管理アプリ</Subtitle>
        </Container>
      </PageContainer>
    </>
  )
}
