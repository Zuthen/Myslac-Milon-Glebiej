import { useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { goodAnswer, type RootState } from "../../gameManager";
import { Question } from "../Question/Question"
import { Answer } from "../Answer/Answer"
import { SuccesPopup } from "../../Succes Popup/SuccesPopup";


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
    const range = useSelector((state: RootState) => state.range);
    const questionData = useSelector((state: RootState) => state.currentQuestion)
    const [succesVisible, setSuccessVisible] = useState(false)

    function checkAnswer(answer: Answer) {
        if (answer.correct) {
            dispatch(goodAnswer(range))
            setSuccessVisible(true)
        }
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
                <SuccesPopup visible={succesVisible} goForward={() => setSuccessVisible(false)} />
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