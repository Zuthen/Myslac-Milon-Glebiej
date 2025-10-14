type Props = {
    nextPage: () => void
}

export const StartScreen = ({ nextPage }: Props) => {
    return (
        <>
            <h1> Witajcie w Myśląc Discord Głębiej</h1>
            <p>Jest to duchowy spadkobierca milionerów z takim twistem, że wszystkie pytania dotyczą discordowego serwera Myśleć Głębiej</p>
            <button onClick={nextPage}>Gramy!</button>
        </>
    )
}
