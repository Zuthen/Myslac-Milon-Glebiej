import { useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { goodAnswer, nextQuestion, type RootState } from "../../gameManager";
import { Question } from "../Question/Question"
import { Answer } from "../Answer/Answer"
import { SuccesPopup } from "../SuccesPopup/SuccesPopup";


export type Answer = {
    answer: string,
    correct: boolean
}
type Answers = {
    A: Answer,
    B: Answer,
    C: Answer,
    D: Answer
}

export type Question = {
    id: string,
    question: string,
    level: number[],
    answers: Answers,
    why: string
}



export const QuestionAndAnswers = () => {
    const dispatch = useDispatch()
    //  const range = useSelector((state: RootState) => state.range);
    const questionData = useSelector((state: RootState) => state.currentQuestion)
    const availableQuestions = useSelector((state: RootState) => state.availableQuestions)
    const level = useSelector((state: RootState) => state.level)
    const [succesVisible, setSuccesVisible] = useState(false)

    function drawQuestion(questions: Question[]) {
        const multiplier = questions.length
        const idx = Math.floor(Math.random() * multiplier);
        return questions[idx]
    }

    function checkAnswer(answer: Answer) {
        if (answer.correct) {
            dispatch(goodAnswer())
            const questions = availableQuestions.filter(question => question.level.includes(level))
            if (questions.length !== 0) {
                const question = drawQuestion(questions)
                dispatch(nextQuestion(question))

            }
            setSuccesVisible(true)
        }
    }

    function handleSuccesPopupButtonClick() {
        dispatch(goodAnswer())
        setSuccesVisible(false)
    }

    return <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
        <div style={{ flex: 1 }}>
            {
                questionData
                    ? <Question text={questionData.question} />
                    : "Nie ma takiego pytania"
            }
        </div>
        {
            questionData && <>
                <SuccesPopup visible={succesVisible} goForward={handleSuccesPopupButtonClick} />
                <div style={{ flex: 1, flexDirection: "row", display: "flex", margin: "5px" }}>
                    <div style={{ flex: 1, margin: "8px" }}> <Answer answerId="A" answer={questionData.answers.A} selectAnswer={() => checkAnswer(questionData.answers.A)} /></div>
                    <div style={{ flex: 1, margin: "8px" }}> <Answer answer={questionData.answers.B} answerId="B" selectAnswer={() => checkAnswer(questionData.answers.B)} /></div>
                </div>
                <div style={{ flex: 1, flexDirection: "row", display: "flex" }}>
                    <div style={{ flex: 1, margin: "8px" }}> <Answer answer={questionData.answers.C} answerId="C" selectAnswer={() => checkAnswer(questionData.answers.C)} /></div>
                    <div style={{ flex: 1, margin: "8px" }}> <Answer answer={questionData.answers.D} answerId="D" selectAnswer={() => checkAnswer(questionData.answers.D)} /></div>
                </div>
            </>
        }
    </div>
}