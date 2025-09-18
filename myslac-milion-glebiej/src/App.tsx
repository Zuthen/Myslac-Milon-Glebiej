import './App.css'
import { QuestionAndAnswers } from './components/QuestionAndAnswers/QuestionAndAnswers'
import questions from "./questions.json"


function App() {
  const testData = questions[3]
  console.log("test")
  return (
    <QuestionAndAnswers question={testData} />
  )
}

export default App
