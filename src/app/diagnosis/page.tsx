'use client'
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import Header from '../components/Header';

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

const Content = styled.p`
  margin: 0;
  font-size: 1rem;
  color: white;
`;

const QuestionSection = styled.div`
  width: 100%;
  max-width: 800px;
  margin-bottom: 2rem;
`;

const QuestionTitle = styled.h2`
  font-size: 1.25rem;
  color: #00cc99;
  margin-bottom: 1rem;
`;

const OptionList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
`;

const OptionItem = styled.label`
  display: flex;
  align-items: center;
  background: #3333cc;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  cursor: pointer;

  input {
    margin-right: 0.5rem;
  }
`;

export default function DiagnosticTest() {
  const [diagnosisTitle, setDiagnosisTitle] = useState('');
  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState({});

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const response = await fetch('http://localhost:8086/diagnosis/1'); // IDは1を仮定
        const data = await response.json();
        setDiagnosisTitle(data.title);
        setQuestions(data.questions);
      } catch (error) {
        console.error('Error fetching questions:', error);
      }
    };

    fetchQuestions();
  }, []);

  const handleChange = (questionIndex, choicePoint, questionId, questionTitle) => {
    setAnswers(prevAnswers => ({
      ...prevAnswers,
      [questionIndex]: { point: choicePoint, question_id: questionId, title: questionTitle }
    }));
  };

  const handleSubmit = async () => {
    try {
      for (const key in answers) {
        const answer = answers[key];
        const response = await fetch('http://localhost:8086/diagnosis_answer', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            title: answer.title,
            point: answer.point,
            question_id: answer.question_id
          }),
        });
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const responseData = await response.json();
        console.log('Successfully submitted:', responseData);
      }
    } catch (error) {
      console.error('Error submitting answers:', error);
    }
  };

  return (
    <>
      <Header />
      <PageContainer>
        <Title>{diagnosisTitle}</Title>
        {questions.map((question, index) => (
          <QuestionSection key={index}>
            <QuestionTitle>{question.title}</QuestionTitle>
            <OptionList>
              {question.choices.map((choice, idx) => (
                <OptionItem key={idx}>
                  <input
                    type={question.type}
                    name={`question-${index}`}
                    value={choice.point}
                    onChange={() => handleChange(index, choice.point, question.id, choice.title)}
                  />
                  <Content>{choice.title}</Content>
                </OptionItem>
              ))}
            </OptionList>
          </QuestionSection>
        ))}
        <Button onClick={handleSubmit}>保存</Button>
      </PageContainer>
    </>
  );
}
