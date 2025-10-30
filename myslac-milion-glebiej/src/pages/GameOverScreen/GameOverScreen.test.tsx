import { render } from "@testing-library/react"
import { GameOverScreen } from "./GameOverScreen"
import { MemoryRouter } from "react-router-dom"
import { Provider } from "react-redux"
import {  store } from "./../../GameManager/gameManager"
import { type Rank } from "../../types"
import configureMockStore from "redux-mock-store"

describe("Game Over Screen", () => {
    it("should contain text, no rank name and try again button", () => {
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
        const rankText = sut.queryByText("Kończycie grę z rangą")
        expect(rankText).toBeNull()
        const button = sut.getByRole("button")
        expect(button).toHaveTextContent("Spróbujcie jeszcze raz")
    })
    it("should contain text, rank name for guaranteed rank and try again button", () => {
        // Arrange
        const testGuaranteedRank: Rank = {
            guaranteedRank: true,
            name: "Wspaniałość nad wspaniałościami",
            questionLevel: 7
        }

    const mockStore = configureMockStore()
    const testStore = mockStore({
        guaranteedRank: testGuaranteedRank
    })

    const sut = render(
        <Provider store={testStore}>
            <MemoryRouter>
                <GameOverScreen />
            </MemoryRouter>
        </Provider>
    )
    // Assert
    sut.getByText("Przegrana")
    const rankText = sut.queryByText("Kończycie grę z rangą")
    expect(rankText).toBeNull()
    const button = sut.getByRole("button")
    expect(button).toHaveTextContent("Spróbujcie jeszcze raz")
})
})