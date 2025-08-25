import './App.css'
import { QuestionAndAnswers } from './components/QuestionAndAnswers/QuestionAndAnswers'


function App() {
  const testData = {
    question: "Iloma szopami w fartuchu jest osoba znana jako meh guy?",
    answerA: "Trzema",
    answerB: "Czterema",
    answerC: "Sześcioma",
    answerD: "Dwoma"
  }
  return (
    <QuestionAndAnswers question={testData.question} answerA={testData.answerA} answerB={testData.answerB} answerC={testData.answerC} answerD={testData.answerD} />
  )
}

export default App
