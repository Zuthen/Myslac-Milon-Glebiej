import { useNavigate } from 'react-router-dom'

type Props = {
    range: string
}

export const GameOverScreen = ({ range }: Props) => {
    const navigate = useNavigate();
    return (
        <>
            <h2>Przegrana</h2>
            <p>Kończycie grę z rangą {range}</p>
            <button onClick={() => navigate("/questions")}>Spróbujcie jeszcze raz</button>
        </>
    )
}