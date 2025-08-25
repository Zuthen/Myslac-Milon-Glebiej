import type React from "react";

type Props = {
    text: string;
};

export const Response = ({ text }: Props) => {
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
        fontSize: "14px",
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
