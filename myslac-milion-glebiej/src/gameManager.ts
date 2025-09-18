import {type Question} from "./components/QuestionAndAnswers/QuestionAndAnswers"
import { configureStore } from "@reduxjs/toolkit";
import data from "./questions.json"

type Range = {
  questionLevel: number,
  name: string
}

type Action =
  | { type: 'setQuestion', payload: Question }
  | { type: "goodAnswer", payload: Range }
  | { type: "guaranteedRangeAchived", payload: Range }

const levels: number[] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]

const ranges: Range[] = levels.map(level => {
  return {
    questionLevel: level,
    name: "jakaś tam ranga"
  }
})

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
    range: ranges[1],
    level: 1,
    guaranteedRange: ranges[0]
  }

  export const store = configureStore({
  reducer
});
  export function reducer(state = initialState, action: Action) {
    switch (action.type) {
      case "setQuestion":
        return { ...state, currentQuestion: action.payload, availableQuestions: state.availableQuestions.filter(question => question.id !== action.payload.id) }
      case "goodAnswer":
        return { ...state, range: action.payload, level: state.level + 1 }
      case "guaranteedRangeAchived":
        return { ...state, guaranteedRange: action.payload }
      default: return state
    }
  }

  export  function setQuestion(question: Question) {
    return {
      type: "setQuestion",
      payload: question
    }
  }

  export function goodAnswer(range: Range) {
    return {
      type: "goodAnswer",
      payload: range
    }
  }

  export function guaranteedRangeAchived(range: Range
  ) {
    return {
      type: "guaranteedRangeAchived",
      payload: range
    }
  }

export type RootState = ReturnType<typeof store.getState>;
    // <button onClick={() => dispatch(increment())}>Count +1</button>

// 2, 7 pytanie gwarantowane