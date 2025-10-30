
type Props = {
    text: string;
};

export const Question = ({ text }: Props) => {
    const divStyle: React.CSSProperties = {
        border: "2px solid #483120",
        borderRadius: "10px",
        width: "450px",
        height: "100px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        boxSizing: "border-box",
        padding: "10px 10px",
        overflow: "hidden",
    };

    const textStyle: React.CSSProperties = {
        color: "#483120",
        fontSize: "18px",
        fontFamily: "Kalam, cursive",
        textAlign: "center",
        lineHeight: "1.2",
        wordBreak: "break-word",
        margin: 0,
    };

    return (
        <div style={divStyle}>
            <span style={textStyle}>{text}</span>
        </div>
    );
};
