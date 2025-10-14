import { useState } from 'react'
import './App.css'
import { QuestionAndAnswers } from './components/QuestionAndAnswers/QuestionAndAnswers'
import { StartScreen } from './components/StartScreen/StartScreen'


function App() {
  const [startScreen, setStartScreen] = useState(true)
  return startScreen ? <StartScreen nextPage={() => setStartScreen(false)} /> : <QuestionAndAnswers />
}

export default App

