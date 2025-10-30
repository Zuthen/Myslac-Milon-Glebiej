
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom'
import { type RootState, restart } from '../../GameManager/gameManager';


export const GameOverScreen = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    function handleTryAgain() {
        dispatch(restart())
        navigate("/questions")
    }
    const state = useSelector((state: RootState) => state)
    const guaranteedRank = state.guaranteedRank.name
    return (
        <>
            <h2>Przegrana</h2>{
                <p>
                    {guaranteedRank}
                </p>
            }
            <button onClick={() => handleTryAgain()}>Spróbujcie jeszcze raz</button>
        </>
    )
}