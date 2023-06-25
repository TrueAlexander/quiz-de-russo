//utils
import { shuffleArray } from "@/utils/arrayUtils"
//Components
import Quiz from "./Quiz"
//Types 
import { Difficulty, QuestionsState, Question } from "@/types/quiz"

const TOTAL_QUESTIONS = 5

const getQuestions = async (amount: number, difficulty: Difficulty): Promise<QuestionsState> => {
  const endpoint = `https://opentdb.com/api.php?amount=${amount}&difficulty=${difficulty}&type=multiple`

  const data: {results: Array<Question> } = await (await fetch(endpoint, { cache: 'no-store'})).json()

  return data.results.map(question => ({
    ...question,
    answers: shuffleArray([...question.incorrect_answers, question.correct_answer])
  }))
}

//////
const getQuestionsFirebase = async () => {
  const endpoint = 'https://exercises-russian-lang-default-rtdb.firebaseio.com/exercises.json'
  await (fetch(endpoint)).then((res) => {
    return res.json()
  }).then((results) => {
    return results
  })
}
////////


const QuizPage = async () => {
  ////
  const newQuestions = getQuestionsFirebase()
  console.dir(newQuestions)



  /////
  const questions =await getQuestions(TOTAL_QUESTIONS, Difficulty.EASY)
  
  return <Quiz questions={questions} totalQuestions={TOTAL_QUESTIONS}/>
}

export default QuizPage
