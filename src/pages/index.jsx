import React from 'react';
import GameContainerBox from '../app/content/GameContainerBox'
import GameData from '../app/content/GamesData'

function IndexPage() {

  const gameData = GameData();


  return (
    <>
      <div className='has-background-light'>
        {gameData.map((content, index) => (
          <GameContainerBox key={index} content={content} />
        ))}
      </div>
    </>
  );
}

export default IndexPage;
