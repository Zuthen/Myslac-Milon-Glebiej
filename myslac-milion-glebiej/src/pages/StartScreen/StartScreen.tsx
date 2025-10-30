import { useNavigate } from "react-router-dom"

export const StartScreen = () => {
    const navigate = useNavigate()
    return (
        <>
            <h1> Witajcie w Myśląc Discord Głębiej</h1>
            <p>Jest to duchowy spadkobierca milionerów z takim twistem, że wszystkie pytania dotyczą discordowego serwera Myśleć Głębiej</p>
            <button onClick={() => navigate('questions')}>Gramy!</button>
        </>
    )
}
