import { Answer } from "./Answer"
import { render } from '@testing-library/react'
import { vi } from 'vitest';

describe("Answer", () => {
    it("should display text and answerId", () => {
        // Arrange
        const testAnswer = {
            answer: "Nie była żadnym, kanał powstał intencjonalnie jako #lobby-zbiorkomu-[...]",
            correct: true
        }
        const testFn = vi.fn()
        const sut = render(<Answer answer={testAnswer} answerId="E" selectAnswer={testFn} />)

        // Assert
        sut.getByText(testAnswer.answer)
        sut.getByText("E")
    })
})