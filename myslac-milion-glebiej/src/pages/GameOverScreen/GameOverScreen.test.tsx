import { render } from "@testing-library/react"
import { GameOverScreen } from "./GameOverScreen"
import { MemoryRouter } from "react-router-dom"
import { Provider } from "react-redux"
import { store } from "./../../GameManager/gameManager"

describe("Game Over Screen", () => {
    it("should contain text, achived range and try again button", () => {
        // Arrange
        const sut = render(
            <Provider store={store}>
                <MemoryRouter>
                    <GameOverScreen />
                </MemoryRouter>
            </Provider>
        )
        // Assert
        sut.getByText("Przegrana")
        sut.getByText(`Kończycie grę z rangą ${store.getState().rank.name}`)
        const button = sut.getByRole("button")
        expect(button).toHaveTextContent("Spróbujcie jeszcze raz")
    })
})