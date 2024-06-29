'use client'
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import Header from '../components/Header';
import QuestionForm from '../components/QuestionForm';

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  color: black;
  background: black;
  padding: 2rem;
  margin-top: 20px;
`;

const Button = styled.button`
  background-color: #00cc99;
  color: white;
  padding: 10px 20px;
  font-size: 1rem;
  border-radius: 5px;
  text-decoration: none;
  margin-top: 1rem;
  display: inline-block;

  &:hover {
    background-color: #009977;
  }
`;

const Title = styled.h1`
  font-size: 2rem;
  font-weight: bold;
`;

const QuestionSection = styled.div`
  width: 100%;
  max-width: 800px;
  margin-bottom: 2rem;
`;

export default function DiagnosticTest() {
  const [diagnosisTitle, setDiagnosisTitle] = useState('');
  const [headers, setHeaders] = useState([]);
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const response = await fetch('http://localhost:8086/diagnosis/1'); // IDは1を仮定
        const data = await response.json();
        setDiagnosisTitle(data.title);
        setHeaders(data.headers);
        // setQuestions(data.questions);
      } catch (error) {
        console.error('Error fetching questions:', error);
      }
    };

    fetchQuestions();
  }, []);

  return (
    <>
      <Header />
      <PageContainer>
        <Title>{diagnosisTitle}</Title>
        {headers.length > 0 ? (
          <QuestionForm headers={headers} />
        ) : (
          <p>Loading...</p>
        )}
      </PageContainer>
    </>
  );
}
