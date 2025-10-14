import { render } from "@testing-library/react"
import { StartScreen } from "./StartScreen"
import { vi } from "vitest"

describe("Start Screen", () => {
    it("Should display heading, start text and button", () => {
        // Arrange
        const testFn = vi.fn()
        const sut = render(<StartScreen nextPage={testFn} />)

        // Assert
        const heading = sut.getByRole("heading")
        const text = sut.getByRole("paragraph")
        const button = sut.getByRole("button")
        expect(heading).toHaveTextContent("Witajcie w Myśląc Discord Głębiej")
        expect(text).toHaveTextContent("Jest to duchowy spadkobierca milionerów z takim twistem, że wszystkie pytania dotyczą discordowego serwera Myśleć Głębiej")
        expect(button).toHaveTextContent("Gramy!")
    })

    it("Should run button function", () => {
        // Arrange
        const testFn = vi.fn()
        const sut = render(<StartScreen nextPage={testFn} />)
        const button = sut.getByRole("button")

        // Act
        button.click()
        // Assert
        expect(testFn).toHaveBeenCalled()
    })
})