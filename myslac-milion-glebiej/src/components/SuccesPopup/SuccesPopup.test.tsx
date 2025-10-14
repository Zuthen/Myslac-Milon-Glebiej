import { render } from "@testing-library/react"
import { SuccesPopup } from "./SuccesPopup"
import { vi } from "vitest"
import ranks from "../../ranks.json"

describe("Succes Popup", () => {
    it("guaranteed rank should contain header, guaranteed text, rank name, and button", () => {
        // Arrange 
        const rank = ranks[1]
        const sut = render(<SuccesPopup visible={true} goForward={vi.fn()} rank={rank} />)
        // Assert
        sut.getByText("Poprawna odpowiedź!")
        sut.getByText("Zdobywacie rangę gwarantowaną:")
        sut.getByText(rank.name)
        const button = sut.getByRole("button")
        expect(button).toHaveTextContent("Następne pytanie")
    })
    it("Rank should contain header, text, rank name, and button", () => {
        // Arrange 
        const rank = ranks[2]
        const sut = render(<SuccesPopup visible={true} goForward={vi.fn()} rank={rank} />)
        // Assert
        sut.getByText("Poprawna odpowiedź!")
        sut.getByText("Zdobywacie rangę:")
        const textContent = sut.getByRole("paragraph")
        expect(textContent).toHaveTextContent("To nie jest ranga gwarantowana")
        expect(textContent).toHaveTextContent(rank.name)
        const button = sut.getByRole("button")
        expect(button).toHaveTextContent("Następne pytanie")
    })
    it("should not be visible after button click", () => {
        // Arrange
        const rank = ranks[1]
        const goForward = vi.fn()
        const sut = render(<SuccesPopup visible={true} goForward={goForward} rank={rank} />)
        const button = sut.getByRole("button")
        // Act
        button.click()
        // Assert
        expect(goForward).toHaveBeenCalled()
    })
})