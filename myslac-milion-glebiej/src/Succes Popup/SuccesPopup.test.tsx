import { render } from "@testing-library/react"
import { SuccesPopup } from "./SuccesPopup"
import { vi } from "vitest"

describe("Succes Popup", () => {
    it("should contain header, text and button", () => {
        // Arrange 
        const sut = render(<SuccesPopup visible={true} goForward={vi.fn()}/>)
        // Assert
        sut.findByText("Poprawna odpowiedź!")
        sut.findByText("Zdobywacie rangę:")
        const button = sut.getByRole("button")
        expect(button).toHaveTextContent("Następne pytanie")
    })

    it("should not be visible after button click", () => {
        // Arrange 
        const goForward=vi.fn()
        const sut = render(<SuccesPopup visible={true} goForward={goForward}/>)
        const button = sut.getByRole("button")
        // Act
        button.click()
        // Assert
        expect(goForward).toHaveBeenCalled()
    })
})