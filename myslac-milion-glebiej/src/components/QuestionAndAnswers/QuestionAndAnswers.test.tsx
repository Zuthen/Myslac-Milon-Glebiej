import { render } from "@testing-library/react"
import { QuestionAndAnswers } from "./QuestionAndAnswers"

describe("Question And Answers", () => {
    it("should contain question and all answers", () => {
        // Arrange
        const testData = {
            question: "Iloma szopami w fartuchu jest osoba znana jako meh guy?",
            answerA: "Trzema",
            answerB: "Czterema",
            answerC: "Sześcioma",
            answerD: "Dwoma"
        }
        const sut = render(<QuestionAndAnswers question={testData.question} answerA={testData.answerA} answerB={testData.answerB} answerC={testData.answerC} answerD={testData.answerD} />)

        // Assert
        sut.getByText(testData.question)
        sut.getByText(testData.answerA)
        sut.getByText(testData.answerB)
        sut.getByText(testData.answerC)
        sut.getByText(testData.answerD)
    })
})