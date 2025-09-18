import { Question } from "../Question/Question"
import { Answer } from "../Answer/Answer"

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

type Props = {
    question: Question
}

export const QuestionAndAnswers = ({ question }: Props) => {
    return <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
        <div style={{ flex: 1 }}>
            <Question text={question.question} />
        </div>
        <div style={{ flex: 1, flexDirection: "row", display: "flex", margin: "5px" }}>
            <div style={{ flex: 1, margin: "8px" }}> <Answer text={question.answers.A.answer} answerId="A" /></div>
            <div style={{ flex: 1, margin: "8px" }}> <Answer text={question.answers.B.answer} answerId="B" /></div>
        </div>
        <div style={{ flex: 1, flexDirection: "row", display: "flex" }}>
            <div style={{ flex: 1, margin: "8px" }}> <Answer text={question.answers.C.answer} answerId="C" /></div>
            <div style={{ flex: 1, margin: "8px" }}> <Answer text={question.answers.D.answer} answerId="D" /></div>
        </div>
    </div>
}