import { render } from "@testing-library/react"
import { QuestionAndAnswers } from "./QuestionAndAnswers"
import { Provider } from "react-redux";
import { store } from "../../GameManager/gameManager"
import { MemoryRouter } from "react-router-dom";

describe("Question And Answers", () => {
    it("should contain question and all answers", () => {
        // Arrange
        const sut = render(
            <Provider store={store}>
                <MemoryRouter>
                    <QuestionAndAnswers />
                </MemoryRouter>
            </Provider>
        )
        const testQuestion = {
            "id": "b54f03c7-3baa-413c-a4b7-d3860ed66581",
            "question": "Pan N jest panem \"N\" ponieważ jest:",
            "level": [
                1
            ],
            "answers": {
                "A": {
                    "answer": "Narratorem",
                    "correct": true
                },
                "B": {
                    "answer": "Numizmatykiem",
                    "correct": false
                },
                "C": {
                    "answer": "Nieheteronormatywny",
                    "correct": false
                },
                "D": {
                    "answer": "Niereformowalny",
                    "correct": false
                }
            },
            "why": ""
        }


        // Assert
        sut.getByText(testQuestion?.question)
        sut.getByText(testQuestion?.answers.A.answer)
        sut.getByText(testQuestion?.answers.B.answer)
        sut.getByText(testQuestion?.answers.C.answer)
        sut.getByText(testQuestion?.answers.D.answer)
    })
})