import {type Question} from "../pages/QuestionAndAnswers/QuestionAndAnswers"
import { configureStore } from "@reduxjs/toolkit";
import data from "../questions.json"
import ranksData from "../ranks.json"

export type Rank = {
  questionLevel: number,
  name: string,
  guaranteedRank: boolean
}

type Action =
  | { type: 'nextQuestion', payload: number }
  | { type: "levelAndRankUp"}
  | { type: "removeQuestionFromList", payload:string}

const ranks: Rank[] = ranksData

let questions = data

function getRandomInt(max: number) {
    return Math.floor(Math.random() * max);
  }

// trzeba obsłużyć tego undefinda
function findQuestion(level: number): Question | undefined {
    const questionsOfLevel = questions.filter(question => question.level.includes(level))
    const foundQuestion = questionsOfLevel[getRandomInt(questionsOfLevel.length)]
    return foundQuestion
  }

    const initialState = {
    availableQuestions: questions,
    currentQuestion: findQuestion(1),
    rank: ranks[0],
    level: 1
  }


  export const reducer=(state = initialState, action: Action) => {
    switch (action.type) {
      case "nextQuestion":
        return { ...state, currentQuestion: findQuestion(state.level)}
      case "levelAndRankUp":
        return {...state, level: state.level + 1, rank:ranks[state.level]}
      case "removeQuestionFromList":
        return {...state, availableQuestions: state.availableQuestions.filter(question => question.id !== action.payload)} 
      default: return state
    }
  }

  export const store = configureStore({reducer});

  export  function nextQuestion(level:number) {
    return {
      type: "nextQuestion",
      payload: level
    }
  }
  export function levelAndRankUp() {
    return {
      type: "levelAndRankUp",
    }
  }
  export function removeQuestionFromList(id:string){
    return{
      type: "removeQuestionFromList",
      payload:id
    }
  }

export type RootState = ReturnType<typeof store.getState>;