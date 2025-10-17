import { useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { levelAndRankUp, nextQuestion, removeQuestionFromList, type RootState } from "../../GameManager/gameManager";
import { Question } from "../../components/Question/Question"
import { Answer } from "../../components/Answer/Answer"
import { SuccesPopup } from "../../components/SuccesPopup/SuccesPopup";


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
    const questionData = useSelector((state: RootState) => state.currentQuestion)
    const level = useSelector((state: RootState) => state.level)
    const [succesVisible, setSuccesVisible] = useState(false)
    const rank = useSelector((state: RootState) => state.rank)

    function checkAnswer(answer: Answer) {
        if (answer.correct) {

            setSuccesVisible(true)
        }
    }

    function handleSuccesPopupButtonClick() {
        dispatch(levelAndRankUp())
        questionData && dispatch(removeQuestionFromList(questionData?.id))
        dispatch(nextQuestion(level))
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
                <SuccesPopup visible={succesVisible} goForward={handleSuccesPopupButtonClick} rank={rank} />
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