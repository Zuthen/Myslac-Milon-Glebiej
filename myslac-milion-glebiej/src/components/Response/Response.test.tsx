import { Response } from "./Response"
import { render } from '@testing-library/react'
describe("Response", () => {
    it("should display text", () => {
        // Arrange
        const testText = "Nie była żadnym, kanał powstał intencjonalnie jako #lobby-zbiorkomu-[...]"
        const sut = render(<Response text={testText} />)

        // Assert
        sut.getByText(testText)
    })
})