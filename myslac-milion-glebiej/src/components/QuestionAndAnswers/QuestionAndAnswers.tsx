import { Question } from "../Question/Question"
import { Answer } from "../Answer/Answer"

type Props = {
    question: string,
    answerA: string,
    answerB: string,
    answerC: string,
    answerD: string,
}
export const QuestionAndAnswers = ({ question, answerA, answerB, answerC, answerD }: Props) => {
    return <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
        <div style={{ flex: 1 }}>
            <Question text={question} />
        </div>
        <div style={{ flex: 1, flexDirection: "row", display: "flex", margin: "5px" }}>
            <div style={{ flex: 1, margin: "8px" }}> <Answer text={answerA} answerId="A" /></div>
            <div style={{ flex: 1, margin: "8px" }}> <Answer text={answerB} answerId="B" /></div>
        </div>
        <div style={{ flex: 1, flexDirection: "row", display: "flex" }}>
            <div style={{ flex: 1, margin: "8px" }}> <Answer text={answerC} answerId="C" /></div>
            <div style={{ flex: 1, margin: "8px" }}> <Answer text={answerD} answerId="D" /></div>
        </div>
    </div>
}