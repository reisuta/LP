'use client'
import styled from 'styled-components'
import Link from 'next/link'

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
`

const HeaderLeft = styled(Link)`
  text-decoration: none;
  color: white;
  margin-left: 20px;
`

const HeaderRight = styled.div`
  display: flex;
  gap: 20px;
  margin-right: 60px;
`

const StyledLink = styled(Link)`
  color: white;
  font-size: 1rem;
  text-decoration: none;

  &:hover {
    background-color: #663366;
    border-radius: 5px;
    padding: 5px;
  }
`

export default function Header() {
  return (
    <>
      <Container>
        <HeaderLeft href="/">Home</HeaderLeft>
        <HeaderRight>
          <StyledLink href="/about">About</StyledLink>
          <StyledLink href="/diagnosis">Likes</StyledLink>
          <StyledLink href="/diagnosis">SNS</StyledLink>
        </HeaderRight>
      </Container>
    </>
  )
}
