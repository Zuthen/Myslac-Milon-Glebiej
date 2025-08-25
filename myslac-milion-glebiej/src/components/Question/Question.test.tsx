
import { render } from '@testing-library/react'
import { Question } from './Question'
describe("Question", () => {
    it("should display text", () => {
        // Arrange
        const testText = "Iloma szopami w fartuchu jest osoba znana jako meh guy?"
        const sut = render(<Question text={testText} />)

        // Assert
        sut.getByText(testText)
    })
})