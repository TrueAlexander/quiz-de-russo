'use client'

import React, { useState } from "react"
import { useRouter } from 'next/navigation'
//Components
import Button from "@/components/Button/Button"
import QuestionCard from "@/components/QuestionCard/QuestionCard"

//Types
import { QuestionsState } from "@/types/quiz"

type Props = {
  questions: QuestionsState
  totalQuestions: number
}

const Quiz = ({questions, totalQuestions} : Props) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [score, setScore] = useState(0)
  const [userAnswers, setUserAnswers] = useState<Record<number, string>>({})

  const isQuestionAnswered = userAnswers[currentQuestionIndex] ? true : false

  const router = useRouter()

  const handleOnAnswerClick = (answer: string, currentQuestionIndex: number) => {
    //if user has already answered, do nothing
    if (isQuestionAnswered) return
    //check answer against correct answer
    const isCorrect = questions[currentQuestionIndex].correct_answer === answer
    //add score if answer is correct
    if (isCorrect) setScore(prev => prev + 1)
    //save the answer in the object for user answer
    setUserAnswers(prev => ({...prev, [currentQuestionIndex]: answer}))
  }

  const handleChangeQuestion = (step: number) => {
    const newQuestionIndex = currentQuestionIndex + step
    if (newQuestionIndex < 0 || newQuestionIndex >= totalQuestions) return

    setCurrentQuestionIndex(newQuestionIndex)
  }

  return (
    <div className="text-white text-center">
      <p className="p-6 pb-4 font-bold text-[20px]">Resultado: {score}</p>
      <p className="text-[#9f50ac] font-bold pb-2 text-[18px]">
        Pergunta {currentQuestionIndex + 1} de {totalQuestions}
      </p>
      <QuestionCard 
        currentQuestionIndex={currentQuestionIndex}
        question={questions[currentQuestionIndex].question}
        answers={questions[currentQuestionIndex].answers}
        userAnswer={userAnswers[currentQuestionIndex]}
        correctAnswer={questions[currentQuestionIndex].correct_answer}
        onClick={handleOnAnswerClick}
      />
      <div className="flex justify-between mt-9">
        <Button text="Anterior" onClick={() => handleChangeQuestion(-1)} />
        <Button 
          text={currentQuestionIndex === totalQuestions - 1 ? 'Fim' : 'Próxima'} 
          onClick={currentQuestionIndex === totalQuestions - 1 ? () => router.push('/') : () => handleChangeQuestion(1)} />
      </div>
    </div>
  )
}

export default Quiz