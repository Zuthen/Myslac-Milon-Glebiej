import { useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { levelAndRankUp, nextQuestion, removeQuestionFromList, guaranteedRank, type RootState } from "../../GameManager/gameManager";
import { Question } from "../../components/Question/Question"
import { SuccesPopup } from "../../components/SuccesPopup/SuccesPopup";
import { type Answer as AnswerType } from "../../types"
import { Answer } from "../../components/Answer/Answer";
import { useNavigate } from "react-router-dom";

export const QuestionAndAnswers = () => {
    const dispatch = useDispatch()

    const questionData = useSelector((state: RootState) => state)
    const [succesVisible, setSuccesVisible] = useState(false)

    const navigate = useNavigate()

    function checkAnswer(answer: AnswerType) {
        answer.correct ? setSuccesVisible(true) : navigate("/game-over")
    }


    function handleSuccesPopupButtonClick() {
        questionData.rank.guaranteedRank && dispatch(guaranteedRank(questionData.rank))
        dispatch(levelAndRankUp())
        questionData && dispatch(removeQuestionFromList(questionData.currentQuestion.id))
        dispatch(nextQuestion(questionData.level))
        setSuccesVisible(false)
    }

    return <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
        <div style={{ flex: 1 }}>
            {
                questionData.currentQuestion.level.length === 1 && questionData.currentQuestion.level[0] === 0
                    ? "Nie ma takiego pytania"
                    : <Question text={questionData.currentQuestion.question} />
            }
        </div>
        {
            questionData && <>
                <SuccesPopup visible={succesVisible} goForward={handleSuccesPopupButtonClick} rank={questionData.rank} />
                <div style={{ flex: 1, flexDirection: "row", display: "flex", margin: "5px" }}>
                    <div style={{ flex: 1, margin: "8px" }}> <Answer answerId="A" answer={questionData.currentQuestion.answers.A} selectAnswer={() => checkAnswer(questionData.currentQuestion.answers.A)} /></div>
                    <div style={{ flex: 1, margin: "8px" }}> <Answer answer={questionData.currentQuestion.answers.B} answerId="B" selectAnswer={() => checkAnswer(questionData.currentQuestion.answers.B)} /></div>
                </div>
                <div style={{ flex: 1, flexDirection: "row", display: "flex" }}>
                    <div style={{ flex: 1, margin: "8px" }}> <Answer answer={questionData.currentQuestion.answers.C} answerId="C" selectAnswer={() => checkAnswer(questionData.currentQuestion.answers.C)} /></div>
                    <div style={{ flex: 1, margin: "8px" }}> <Answer answer={questionData.currentQuestion.answers.D} answerId="D" selectAnswer={() => checkAnswer(questionData.currentQuestion.answers.D)} /></div>
                </div>
            </>
        }
    </div>
}