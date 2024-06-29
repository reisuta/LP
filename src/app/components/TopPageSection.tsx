'use client'
import styled, { keyframes } from 'styled-components'
import Link from 'next/link'

const Background = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: -3;
  overflow: hidden;
`

const HeaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: black;
  width: 100%;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`

const MainContent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 70vh;
  width: 100%;
  background: ${({ background }) =>
    background || 'linear-gradient(to right, #001133, #003366)'};
  position: relative;
  opacity: 0.8;
  overflow: scroll;
`

const TextContent = styled.div`
  text-align: center;
  padding: 2rem;
  color: black;
  max-width: 600px;
  z-index: 2;
`

const SubTitle = styled.h2`
  color: #800080;
  margin-bottom: 2rem;
  font-size: 2rem;
`

const List = styled.ul`
  list-style: none;
  padding: 0;
  color: #ccc000;
  text-align: center;
  margin-top: 1rem;
  font-size: 1rem;
`

const ListItem = styled.li`
  margin-bottom: 0.5rem;
  white-space: nowrap;
`

const FormSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #cc33cc;
  color: white;
  width: 100%;
  text-align: center;
`

const FooterSection = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  padding-top: 40px;
  padding-bottom: 40px;
  background: gray;
  color: black;
  width: 100%;
  box-shadow: 0 -4px 6px rgba(0, 0, 0, 0.1);
`

const FooterCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 30%;
  background: #990099;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  text-align: center;
`

const Oval = styled.div<{
  width?: string
  height?: string
  top?: string
  left?: string
  color?: string
}>`
  position: absolute;
  width: ${({ width }) => width || '200px'};
  height: ${({ height }) => height || '100px'};
  background: ${({ color }) => color || 'red'};
  border-radius: 50%;
  filter: blur(50px);
  opacity: 0.5;
  top: ${({ top }) => top || '50%'};
  left: ${({ left }) => left || '50%'};
  transform: translate(-50%, -50%);
`

const Title = styled.h1<{ size?: string; color?: string }>`
  font-size: ${({ size }) => size || '2.5rem'};
  margin: 0.5rem 0;
  color: ${({ color }) => color || 'white'};
`

const Subtitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 200;
  margin: 0.5rem 0;
  color: blue;
`

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
`

const SvgIcon = styled.svg`
  width: 80px;
  height: 80px;
  margin-bottom: 1rem;
`

export default function TopPageFv() {
  return (
    <>
      <HeaderContainer>
        <Title color="blue">恥の多い生涯を送ってきました</Title>
      </HeaderContainer>

      <MainContent>
        <Background>
          <Oval
            width="300px"
            height="150px"
            top="40%"
            left="30%"
            color="blue"
          />
          <Oval
            width="400px"
            height="200px"
            top="50%"
            left="50%"
            color="white"
          />
          <Oval width="200px" height="100px" top="65%" left="70%" color="red" />
        </Background>
        <TextContent>
          <SubTitle>自分と似ている文豪は誰か</SubTitle>
          <List>
            <ListItem>
              「誰か僕の眠つてゐるうちにそつと絞め殺してくれるものはないか？」
            </ListItem>
            <ListItem>- 芥川龍之介 歯車</ListItem>
            <ListItem>
              「男は死んでも物すごくにやりにやりと笑い続けていた。その笑い声が木村木村と聞こえた」
            </ListItem>
            <ListItem>- 有島武郎 或る女</ListItem>
            <ListItem>
              「智に働けば角が立つ。情に棹させば流される。意地を通とおせば窮屈だ。とかくに人の世は住みにくい。」
            </ListItem>
            <ListItem>- 夏目漱石 草枕</ListItem>
          </List>
        </TextContent>
      </MainContent>

      <FormSection>
        <Subtitle>文豪性格診断は未だ見ぬ文豪との出会いを提供します</Subtitle>
      </FormSection>

      <FooterSection>
        <FooterCard>
          <SvgIcon xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="10" fill="#00cc99" />
            <text
              x="12"
              y="16"
              fill="white"
              font-size="10"
              text-anchor="middle"
              alignment-baseline="middle"
            >
              GF
            </text>
          </SvgIcon>
          <Subtitle>性格診断として</Subtitle>
          <p>文豪性格診断で性格を知る</p>
        </FooterCard>
        <FooterCard>
          <SvgIcon xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="10" fill="#00cc99" />
            <path d="M12 6v6l4 2" stroke="white" stroke-width="2" fill="none" />
          </SvgIcon>
          <Subtitle>文豪探求として</Subtitle>
          <p>未だ見ぬ文豪と出会う</p>
        </FooterCard>
        <FooterCard>
          <SvgIcon xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="10" fill="#00cc99" />
            <path d="M12 14l2-2-2-2-2 2 2 2z" fill="white" />
          </SvgIcon>
          <Subtitle>自己分析として</Subtitle>
          <p>自分とは何かを思考する</p>
        </FooterCard>
      </FooterSection>
    </>
  )
}
