import { configureStore } from "@reduxjs/toolkit";
import data from "../questions.json"
import ranksData from "../ranks.json"
import type {Rank} from "../types"

 type Answer = {
    answer: string,
    correct: boolean
}
type Answers = {
    A: Answer,
    B: Answer,
    C: Answer,
    D: Answer
}

 type Question = {
    id: string,
    question: string,
    level: number[],
    answers: Answers,
    why: string
}

type Action =
  | { type: 'nextQuestion', payload: number }
  | { type: "levelAndRankUp"}
  | { type: "removeQuestionFromList", payload:string}
  | {type: "restart"}
  | {type: "guaranteedRank", payload: Rank}

const ranks: Rank[] = ranksData

let questions = data

function getRandomInt(max: number) {
    return Math.floor(Math.random() * max);
  }

 const notFoundQuestion: Question = {
    id: "00000000-0000-0000-0000-000000000000",
    question: "Brak pytania", 
    level: [0],
    answers: {
      A: { answer: "Brak odpowiedzi", correct: false }, 
      B: { answer: "Brak odpowiedzi", correct: false },
      C: { answer: "Brak odpowiedzi", correct: false },
      D: { answer: "Brak odpowiedzi", correct: false }
    },
    why: "Brak powodu"
  }

function findQuestion(level: number): Question  {
    const questionsOfLevel = questions.filter(question => question.level.includes(level))
    if (questionsOfLevel.length === 0) return notFoundQuestion
    return questionsOfLevel[getRandomInt(questionsOfLevel.length)]
  }
  
 

  export function createInitialState(questions = data, ranks = ranksData) {
    return {
      availableQuestions: [...questions],
      currentQuestion: findQuestion(1) ,
      rank: ranks[1],
      level: 1,
      guaranteedRank: ranks[0]
    }
  }
  
  const initialState = createInitialState();

 type GameState = {
  availableQuestions: Question[];
  currentQuestion: Question
  rank: Rank;
  level: number;
  guaranteedRank: Rank; 
};
  export const reducer=(state: GameState = initialState, action: Action):GameState => {
    switch (action.type) {
      case "guaranteedRank":
        return {...state, guaranteedRank: action.payload}
      case "nextQuestion":
        return { ...state, currentQuestion: findQuestion(state.level) }
      case "levelAndRankUp": {
        const newLevel = state.level + 1;
        const newRank = ranks.find(r => r.questionLevel === newLevel) ?? state.rank;
        return { ...state, level: newLevel, rank: newRank }
      }
      case "removeQuestionFromList":
        return { ...state, availableQuestions: [...state.availableQuestions].filter(question => question.id !== action.payload) }
      case "restart":
        return createInitialState()
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
    export function restart() {
    return {
      type: "restart",
    }
  }

    export function guaranteedRank(rank:Rank){
      return {
        type:"guaranteedRank",
        payload: rank
      }
    }

export type RootState = ReturnType<typeof store.getState>;