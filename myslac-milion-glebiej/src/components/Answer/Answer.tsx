import { type Answer as AnswerType } from "../../types"

type Props = {
    answerId: string,
    answer: AnswerType
    selectAnswer: (a: AnswerType) => void
};

export const Answer = ({ answerId, answer, selectAnswer }: Props) => {
    const divStyle: React.CSSProperties = {
        border: "2px solid #483120",
        borderRadius: "10px",
        width: "200px",
        height: "70px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        boxSizing: "border-box",
        padding: "10px 10px",
        overflow: "hidden",
    };

    const textStyle: React.CSSProperties = {
        color: "#483120",
        backgroundColor: "#DE9C75",
        fontSize: "14px",
        fontFamily: "Kalam, cursive",
        textAlign: "center",
        lineHeight: "1.2",
        wordBreak: "break-word",
        margin: 0,
        flex: 7
    };

    const idStyle: React.CSSProperties = {
        color: "#483120",
        backgroundColor: "#DE9C75",
        fontSize: "18px",
        fontFamily: "Kalam, cursive, bold",
        textAlign: "center",
        lineHeight: "1.2",
        wordBreak: "break-word",
        margin: 0,
        flex: 1
    }

    return (
        <button style={divStyle} onClick={() => selectAnswer(answer)}>
            <span style={idStyle}>{answerId}</span>
            <span style={textStyle}>{answer.answer}</span>
        </button>
    );
};
