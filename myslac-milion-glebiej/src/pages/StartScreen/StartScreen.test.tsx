import { render } from "@testing-library/react"
import { StartScreen } from "./StartScreen"
import { MemoryRouter } from "react-router-dom"

describe("Start Screen", () => {
    it("Should display heading, start text and button", () => {
        // Arrange
        const sut = render(
            <MemoryRouter>
                <StartScreen />
            </MemoryRouter>
        )

        // Assert
        const heading = sut.getByRole("heading")
        const text = sut.getByRole("paragraph")
        const button = sut.getByRole("button")
        expect(heading).toHaveTextContent("Witajcie w Myśląc Discord Głębiej")
        expect(text).toHaveTextContent("Jest to duchowy spadkobierca milionerów z takim twistem, że wszystkie pytania dotyczą discordowego serwera Myśleć Głębiej")
        expect(button).toHaveTextContent("Gramy!")
    })
})