import GameData from './content/GamesData'
import GameContainerBox from './content/GameContainerBox'
import ContainerLayout from './content/ContainerLayout'
import 'bulma/css/bulma.css';

export default function Home() {
  const gameData = GameData();

  const content = (
    <div className='container'>
      {gameData.map((content, index) => (
        <GameContainerBox key={index} content={content} />
      ))}
    </div>
  );

  return (
    <ContainerLayout content={content} />
  )
}
