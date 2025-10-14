import {type Question} from "./components/QuestionAndAnswers/QuestionAndAnswers"
import { configureStore } from "@reduxjs/toolkit";
import data from "./questions.json"
import ranksData from "./ranks.json"

type Rank = {
  questionLevel: number,
  name: string,
  guaranteedRank: boolean
}

type Action =
  | { type: 'nextQuestion', payload: Question }
  | { type: "goodAnswer" }
  | { type: "guaranteedRangeAchived", payload: Rank }

const ranks: Rank[] = ranksData

let questions = data

function getRandomInt(max: number) {
    return Math.floor(Math.random() * max);
  }

// trzeba obsłużyć tego undefinda
function findQuestion(level: number): Question | undefined {
    const questionsOfLevel = questions.filter(question => question.level.includes(level))
    const foundQuestion = questionsOfLevel[getRandomInt(questionsOfLevel.length)]
    questions = questions.filter(question => question.id !== foundQuestion?.id)
    return foundQuestion
  }

    const initialState = {
    availableQuestions: questions,
    currentQuestion: findQuestion(1),
    rank: ranks[1],
    level: 1
  }


  export const reducer=(state = initialState, action: Action) => {
    switch (action.type) {
      case "nextQuestion":
        return { ...state, currentQuestion: action.payload, availableQuestions: state.availableQuestions.filter(question => question.id !== action.payload.id) }
      case "goodAnswer":
        return { ...state, rank: ranks.find(range => range.questionLevel === state.level+1) ?? state.rank, level: state.level + 1 }
      case "guaranteedRangeAchived":
        return { ...state, guaranteedRange: action.payload }
      default: return state
    }
  }

    export const store = configureStore({reducer});

  export  function nextQuestion(question: Question) {
    return {
      type: "nextQuestion",
      payload: question
    }
  }

  export function goodAnswer() {
    return {
      type: "goodAnswer",
    }
  }

  export function guaranteedRangeAchived(range: Rank
  ) {
    return {
      type: "guaranteedRangeAchived",
      payload: range
    }
  }


export type RootState = ReturnType<typeof store.getState>;