import { render } from "@testing-library/react"
import { QuestionAndAnswers } from "./QuestionAndAnswers"
import questions from "../../questions.json"

describe("Question And Answers", () => {
    it("should contain question and all answers", () => {
        // Arrange
        const testData = questions[3]
        const sut = render(<QuestionAndAnswers question={testData} />)

        // Assert
        sut.getByText(testData.question)
        sut.getByText(testData.answers.A.answer)
        sut.getByText(testData.answers.B.answer)
        sut.getByText(testData.answers.C.answer)
        sut.getByText(testData.answers.D.answer)
    })
})