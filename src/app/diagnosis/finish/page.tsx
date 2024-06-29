'use client'
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import DiagnosisResult from '../../components/DiagnosisResult'
import Header from '../../components/Header';

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  color: black;
  background: none;
  padding: 2rem;
  margin-top: 20px;
`;

const result = ['太宰治タイプ', '芥川龍之介タイプ'];

export default function DiagnosisFinish() {
  return (
    <>
      <Header />
      <DiagnosisResult result={result} />
    </>
  );
}
