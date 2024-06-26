'use client'
import styled from 'styled-components'
import Link from 'next/link'
import Header from './components/Header'
import TopPageFv from './components/TopPageFv.tsx'
import TopPageSection from './components/TopPageSection.tsx'
import TopPageBottom from './components/TopPageBottom.tsx'
import Divider from './components/Divider.tsx'

export default function Home() {
  return (
    <>
      <Header />
      <TopPageFv />
      <Divider />
      <TopPageSection />
      <Divider />
      <TopPageBottom />
    </>
  )
}
