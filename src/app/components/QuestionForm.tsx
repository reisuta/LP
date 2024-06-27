'use client'
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import Link from 'next/link';

const Button = styled.button`
  background-color: #000;
  color: white;
  padding: 15px 30px;
  font-size: 1rem;
  border: none;
  border-radius: 5px;
  text-decoration: none;
  cursor: pointer;
  margin-top: 1rem;

  &:hover {
    background-color: #333;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  color: black;
  background: black;
  padding: 2rem;
  margin-top: 20px;
`;


const Title = styled.h1`
  font-size: 2rem;
  font-weight: bold;
  color: white;
`;

const QuestionTitle = styled.h2`
  font-size: 1.25rem;
  color: #00cc99;
  margin-bottom: 1rem;
`;

const OptionList = styled.div`
  flex-wrap: wrap;
  gap: 1rem;
`;


const OptionItem = styled.label`
  display: flex;
  align-items: center;
  background: #3333cc;
  margin: 4px;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  cursor: pointer;

  input {
    margin-right: 0.5rem;
    height: 20px;
    width: 20px;
  }
`;

const Content = styled.p`
  margin: 0;
  font-size: 1.5rem;
  color: white;
`;



export default function QuestionForm(headers) {
  const [currentHeaderIndex, setCurrentHeaderIndex] = useState(0);
  const handleNext = () => {
    if (currentHeaderIndex < headers.headers.length - 1) {
      setCurrentHeaderIndex(currentHeaderIndex + 1);
    }
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

  const currentHeader = headers.headers[currentHeaderIndex];

  const [answers, setAnswers] = useState({});
  const handleChange = (questionIndex, choicePoint, questionId, choiceTitle) => {
    setAnswers(prevAnswers => ({
      ...prevAnswers,
      [questionIndex]: { point: choicePoint, question_id: questionId, title: choiceTitle }
    }));
  };
  console.log(headers.headers)

  return (
    <>
        <Title>{currentHeader.title}</Title>
      <Container>
        <OptionList>
          {currentHeader.questions.map((question, index) => (
            <div key={index}>

              <Title>{question.title}</Title>
              {question.choices.map((choice, idx) => (
                <OptionItem key={idx}>
                  <input
                    type={question.type}
                    name={`question-${question.id}`}
                    value={choice.point}
                    onChange={() => handleChange(index, choice.point, question.id, choice.title)}
                  />
                  <Content>{choice.title}</Content>
                </OptionItem>
              ))}
            </div>
          ))}
        </OptionList>
        {currentHeaderIndex < headers.headers.length - 1 ? (
          <Button onClick={handleNext}>次へ</Button>
        ) : (
          <Button onClick={handleSubmit}>保存</Button>
        )}
      </Container>
    </>
  );
}
