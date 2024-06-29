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
  const [score, setScore] = useState(0);

  useEffect(() => {
    const fetchEvaluations = async () => {
      try {
        // TODO: idを動的に設定する
        const response = await fetch('http://localhost:8086/evaluation/1');
        const data = await response.json();
        setScore(data.score)

      } catch (error) {
        console.error('Error fetching evaluations:', error);
      }
    }

    fetchEvaluations();
  }, []);

  return (
    <>
      <Header />
      <DiagnosisResult result={score} />
    </>
  );
}
