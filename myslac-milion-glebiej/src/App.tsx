import './App.css'
import { QuestionAndAnswers } from './pages/QuestionAndAnswers/QuestionAndAnswers'
import { StartScreen } from './pages/StartScreen/StartScreen'
import { GameOverScreen } from './pages/GameOverScreen/GameOverScreen'
import { Routes, Route } from "react-router-dom";


function App() {

  return <Routes>
    <Route path='/' element={<StartScreen />} />
    <Route path='/questions' element={<QuestionAndAnswers />} />
    <Route path='/game-over' element={<GameOverScreen />} />
  </Routes>
}

export default App

