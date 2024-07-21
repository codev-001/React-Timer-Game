import { useRef } from "react";
import { useState } from "react";

export default function Player() {

  const [playerName,setPlayerName]=useState();
  const playerInput=useRef()

  function handleClick(){

    setPlayerName(playerInput.current.value)
    playerInput.current.value=''

  }

  return (
    <section id="player">
      <h2>Welcome {playerName ? playerName : 'unknown entity' }</h2>
      <p>
        <input type="text" ref={playerInput} />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
