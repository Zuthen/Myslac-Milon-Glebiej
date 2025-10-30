import { reducer } from "./gameManager"
import questions from "./../questions.json"
import ranks from "../ranks.json"

describe("Game Manager", () => {
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

    const initialQuestions: Question[] = [{
        id: "1",
        question: "which answer is good?",
        level: [7, 8],
        answers: {
            A: {
                answer: "an answer",
                correct: true
            },
            B: {
                answer: "better answer",
                correct: false
            },
            C: {
                answer: "can be a good answer",
                correct: true
            },
            D: {
                answer: "discover",
                correct: true
            }
        },
        why: "because"
    },
    {
        id: "2",
        question: "which answer is bad?",
        level: [9, 12],
        answers: {
            A: {
                answer: "an answer",
                correct: true
            },
            B: {
                answer: "better answer",
                correct: false
            },
            C: {
                answer: "can be a good answer",
                correct: true
            },
            D: {
                answer: "discover",
                correct: true
            }
        },
        why: "because"
    }, {
        id: "3",
        question: "which answer is medium?",
        level: [10, 11],
        answers: {
            A: {
                answer: "an answer",
                correct: true
            },
            B: {
                answer: "better answer",
                correct: false
            },
            C: {
                answer: "can be a good answer",
                correct: true
            },
            D: {
                answer: "discover",
                correct: true
            }
        },
        why: "because"
    }]

    const initialState = {
        availableQuestions: initialQuestions,
        currentQuestion: initialQuestions[1],
        rank: ranks[8],
        level: 9,
        guaranteedRank: ranks[0]
    }

    it("levelAndRankUp should update level and rank", () => {
        // Arrange
        const initialStateTest = { ...initialState }
        // Act
        const newState = reducer(initialStateTest, { type: "levelAndRankUp" })

        // Assert
        expect(newState.level).toEqual(initialQuestions[2].level[0])
        expect(newState.rank).toBe(ranks[10])
    })
    it("nextQuestion should set current question with current level", () => {
        // Arrange
        const initialStateTest = { ...initialState, level: 3 }

        // Act
        const newState = reducer(initialStateTest, { type: "nextQuestion", payload: 3 })
        // Assert
        expect(newState.currentQuestion).toBe(questions[2])
    })
    it("removeQuestionFromList should remove question from available questiond list", () => {
        // Arrange
        const initialStateTest = { ...initialState }
        // Act
        const newState = reducer(initialStateTest, { type: "removeQuestionFromList", payload: "2" })
        // Assert
        const removedQuestion = newState.availableQuestions.filter(question => question.id === "2")
        expect(removedQuestion.length).toStrictEqual(0)
    })
    it("guaranteedRank should set new guaranteed rank", () => {
        // Arrange
        const initialStateTest = { ...initialState }
        const testRank = { guaranteedRank: true, name: "Wspaniałość totalna", questionLevel: 2 }
        // Act
        const newState = reducer(initialStateTest, { type: "guaranteedRank", payload: testRank })
        // Assert
        expect(newState.guaranteedRank).toBe(testRank)
    })

})

