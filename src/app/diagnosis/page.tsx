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

const VerticalContainer = styled(Container)`
  writing-mode: vertical-rl;
  text-orientation: upright;
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

const Header = styled.header`
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

const Divider = styled.div`
  width: 100%;
  overflow: hidden;
  line-height: 0;
  transform: rotate(180deg);

  svg {
    position: relative;
    display: block;
    width: calc(100% + 1.3px);
    height: 120px;
  }

  .shape-fill {
    fill: gray;
  }
`;

export default function Home() {
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
          <Button>文豪性格診断</Button>
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

      <Divider>
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill"></path>
        </svg>
      </Divider>
    </>
  );
}
