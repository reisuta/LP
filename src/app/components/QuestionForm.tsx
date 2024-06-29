'use client'
import { useState } from 'react'
import styled from 'styled-components'
import Header from '../components/Header'
import { useRouter } from 'next/navigation'

const Button = styled.button<{ color?: string }>`
  background-color: ${({ color }) => color || 'black'};
  color: white;
  padding: 15px 30px;
  margin: 20px;
  font-size: 1rem;
  border: none;
  border-radius: 5px;
  text-decoration: none;
  cursor: pointer;
  margin-top: 1rem;

  &:hover {
    background-color: #333;
  }
`

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  max-width: 300px;
  margin-top: 1rem;
`

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  color: black;
  background: black;
  padding: 2rem;
  margin-top: 20px;
`

const Title = styled.h1`
  font-size: 2rem;
  font-weight: bold;
  color: white;
`

const QuestionTitle = styled.h2`
  font-size: 1.25rem;
  color: #00cc99;
  margin-bottom: 1rem;
`

const OptionList = styled.div`
  flex-wrap: wrap;
  gap: 1rem;
`

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
`

const Content = styled.p`
  margin: 0;
  font-size: 1.5rem;
  color: white;
`

export default function QuestionForm({ headers }) {
  const [currentHeaderIndex, setCurrentHeaderIndex] = useState(0)
  const [answers, setAnswers] = useState({})
  const [errors, setErrors] = useState({})
  const router = useRouter()

  const handlePrev = () => {
    if (currentHeaderIndex > 0) {
      setCurrentHeaderIndex(currentHeaderIndex - 1)
    }
  }

  const handleNext = () => {
    if (validateCurrentSection()) {
      if (currentHeaderIndex < headers.length - 1) {
        setCurrentHeaderIndex(currentHeaderIndex + 1)
        setErrors({})
      }
    }
  }

  const handleSubmit = async () => {
    if (validateCurrentSection()) {
      try {
        const response = await fetch('http://localhost:8086/diagnosis_answer', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(Object.values(answers)),
        })
        if (!response.ok) {
          throw new Error('Network response was not ok')
        }
        const responseData = await response.json()
        console.log('Successfully submitted:', responseData)
        router.push('/diagnosis/finish')
      } catch (error) {
        console.error('Error submitting answers:', error)
      }
    }
  }

  const handleChange = (
    questionId,
    questionWeighting,
    choicePoint,
    choiceTitle,
    choiceId
  ) => {
    setAnswers((prevAnswers) => ({
      ...prevAnswers,
      [questionId]: {
        point: choicePoint,
        weighting: questionWeighting,
        question_id: questionId,
        title: choiceTitle,
        choice_id: choiceId,
      },
    }))
  }

  const validateCurrentSection = () => {
    const currentHeader = headers[currentHeaderIndex]
    let isValid = true
    let newErrors = {}
    console.log(answers)
    console.log(currentHeader.questions)

    currentHeader.questions.forEach((question) => {
      if (!answers.hasOwnProperty(question.id)) {
        newErrors[question.id] = 'この質問は必須です。'
        isValid = false
      }
    })

    setErrors(newErrors)
    return isValid
  }

  const currentHeader = headers[currentHeaderIndex]

  return (
    <>
      <Header />
      <Container>
        <Title>{currentHeader.title}</Title>
        <OptionList>
          {currentHeader.questions.map((question) => (
            <div key={question.id}>
              <QuestionTitle>{question.title}</QuestionTitle>
              {question.choices.map((choice) => (
                <OptionItem key={choice.title}>
                  <input
                    type={question.type}
                    name={`question-${question.id}`}
                    value={choice.point}
                    checked={answers[question.id]?.choice_id === choice.id}
                    onChange={() =>
                      handleChange(
                        question.id,
                        question.weighting,
                        choice.point,
                        choice.title,
                        choice.id
                      )
                    }
                  />
                  <Content>{choice.title}</Content>
                </OptionItem>
              ))}
              {errors[question.id] && (
                <Content style={{ color: 'red' }}>
                  {errors[question.id]}
                </Content>
              )}
            </div>
          ))}
        </OptionList>
        <ButtonContainer>
          {currentHeaderIndex > 0 && (
            <Button color="green" onClick={handlePrev}>
              前へ
            </Button>
          )}
          {currentHeaderIndex < headers.length - 1 ? (
            <Button color="blue" onClick={handleNext}>
              次へ
            </Button>
          ) : (
            <Button color="red" onClick={handleSubmit}>
              保存
            </Button>
          )}
        </ButtonContainer>
      </Container>
    </>
  )
}
