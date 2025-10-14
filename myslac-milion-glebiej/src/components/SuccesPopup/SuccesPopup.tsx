type Props = {
    goForward: () => void;
    visible: boolean;
};

export const SuccesPopup = ({ visible, goForward }: Props) => {
    if (!visible) return null;

    return (
        <>

            <div
                style={{
                    position: "fixed",
                    top: 0,
                    left: 0,
                    width: "100vw",
                    height: "100vh",
                    backgroundColor: "rgba(0,0,0,0.3)",
                    zIndex: 999,
                }}
            />


            <div
                style={{
                    position: "fixed",
                    top: "45%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    background: "#DE9C75",
                    color: "#483120",
                    padding: "20px",
                    border: "3px solid #483120",
                    borderRadius: "10px",
                    width: "300px",
                    height: "210px",
                    fontFamily: "Kalam, cursive",
                    fontSize: "16px",
                    zIndex: 1000,
                }}
            >
                <h3>Poprawna odpowiedź!</h3>
                <p>
                    <b>Zdobywacie rangę:</b> Pierwszy dzień na serwerze!
                    <br />
                    (to nie jest ranga gwarantowana)
                </p>
                <button
                    style={{ margin: "15px", borderColor: "#483120", color: "#483120" }}
                    onClick={goForward}
                >
                    Następne pytanie
                </button>
            </div>
        </>
    );
};
