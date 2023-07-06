import React from 'react';
import GameContainerBox from '../app/content/GameContainerBox'
import GameData from '../app/content/GamesData'

function IndexPage() {

  const gameData = GameData();


  return (
    <>
        {gameData.map((content, index) => (
          <GameContainerBox key={index} content={content} />
        ))}
    </>
  );
}

export default IndexPage;
