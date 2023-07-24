'use client'
//utils
import { shuffleArray } from "@/utils/arrayUtils"
//Components
import Quiz from "../../../components/Quiz/Quiz"

//Types 
import { Difficulty, QuestionsState, Question } from "@/types/quiz"

const TOTAL_QUESTIONS = 5

// const getQuestions = async (amount: number, difficulty: Difficulty): Promise<QuestionsState> => {
//   const endpoint = `https://opentdb.com/api.php?amount=${amount}&difficulty=${difficulty}&type=multiple`

//   const data: {results: Array<Question> } = await (await fetch(endpoint, { cache: 'no-store'})).json()

//   return data.results.map(question => ({
//     ...question,
//     answers: shuffleArray([...question.incorrect_answers, question.correct_answer])
//   }))
// }

//////
const getQuestionsFirebase = async (): Promise<QuestionsState> => {
  const endpointF = 'https://exercises-russian-lang-default-rtdb.firebaseio.com/cases.json'
  const dataFirebase : Array<Question> = await (await fetch(endpointF, { cache: 'no-store'})).json()
 
  return dataFirebase.map(question => ({
    ...question,
    answers: shuffleArray([...question.incorrect_answers, question.correct_answer])
  })) 
}
////////


const QuizPage = async () => {

  ////
  const newQuestions = await getQuestionsFirebase()
  
  /////
  // const questions = await getQuestions(TOTAL_QUESTIONS, Difficulty.EASY)
  
  return ( 
    <Quiz questions={newQuestions} totalQuestions={TOTAL_QUESTIONS}/>
  )
}

export default QuizPage
