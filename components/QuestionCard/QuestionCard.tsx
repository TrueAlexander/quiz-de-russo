//helpers
import { getBGColor } from "./helpers"

type Props = {
  currentQuestionIndex: number
  question: string
  answers: Array<string>
  userAnswer: string | undefined
  correctAnswer: string
  onClick: (answer: string, currentQuestionIndex: number) => void
}

const QuestionCard = ({ currentQuestionIndex, question, answers, userAnswer, correctAnswer, onClick} : Props) => {

  return (
  <div className="flex-auto flex flex-col justify-center">
    <p className="text-[20px] mt-3 max-w-[400px]" dangerouslySetInnerHTML={{__html: question}}></p>
    <div className="flex flex-col items-center pt-5">
      {answers.map(answer => (
        <div
          key={answer}
          onClick={() => onClick(answer, currentQuestionIndex)}
          className={`${getBGColor(userAnswer, correctAnswer, answer)} cursor-pointer flex items-center justify-center select-none font-bold h-[34px] max-w-[400px]  w-[250px]  px-3 my-2 rounded-[10px] overflow-hidden`}
        >
          <span className="truncate" dangerouslySetInnerHTML={{__html: answer}} />
        </div>
      ))}
    </div>
  </div>
)}

export default QuestionCard
