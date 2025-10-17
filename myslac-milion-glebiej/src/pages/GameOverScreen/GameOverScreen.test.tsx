import { render } from "@testing-library/react"
import { GameOverScreen } from "./GameOverScreen"
import { MemoryRouter } from "react-router-dom"

describe("Game Over Screen", () => {
    it("should contain text, achived range and try again button", () => {
        // Arrange
        const testRange = "Jesteś Łoś Superktoś"
        const sut = render(<MemoryRouter>
            <GameOverScreen range={testRange} />
        </MemoryRouter>
        )
        // Assert
        sut.getByText("Przegrana")
        sut.getByText(`Kończycie grę z rangą ${testRange}`)
        const button = sut.getByRole("button")
        expect(button).toHaveTextContent("Spróbujcie jeszcze raz")
    })
})