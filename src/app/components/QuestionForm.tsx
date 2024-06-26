'use client'
import styled from 'styled-components';

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

const Content = styled.p`
  margin: 0;
  font-size: 1rem;
  color: white;
`;


export default function QuestionForm(headers) {
  console.log(headers)
  return (
    <>
      <QuestionTitle>{headers.title}</QuestionTitle>
      {headers.questions.questions.map((question, index) => (
        <div key={index}>
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
        </div>
      ))}
    </>
  );
}
