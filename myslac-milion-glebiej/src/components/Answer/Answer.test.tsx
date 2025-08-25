import { Answer } from "./Answer"
import { render } from '@testing-library/react'
describe("Answer", () => {
    it("should display text and answerId", () => {
        // Arrange
        const testText = "Nie była żadnym, kanał powstał intencjonalnie jako #lobby-zbiorkomu-[...]"
        const sut = render(<Answer text={testText} answerId="E" />)

        // Assert
        sut.getByText(testText)
        sut.getByText("E")
    })
})