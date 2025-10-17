
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom'
import type { RootState } from '../../GameManager/gameManager';


export const GameOverScreen = () => {
    const navigate = useNavigate();
    function handleTryAgain (){

        navigate("/questions")
    }
    const rank = useSelector((state: RootState) => state.rank)
    return (
        <>
            <h2>Przegrana</h2>
            <p>Kończycie grę z rangą {rank.name}</p>
            <button onClick={() => handleTryAgain}>Spróbujcie jeszcze raz</button>
        </>
    )
}