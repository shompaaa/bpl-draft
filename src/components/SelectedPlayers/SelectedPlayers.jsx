import "react";
import SelectedPlayerCard from "../SelectedPlayerCard/SelectedPlayerCard";

const SelectedPlayers = ({ selectedPlayer,removePlayer }) => {
  return (
    <div className="max-w-300 mx-auto mt-5 ">
      {selectedPlayer.map((player) => (
        <SelectedPlayerCard player={player} removePlayer={removePlayer}></SelectedPlayerCard>
      ))}
    </div>
  );
};

export default SelectedPlayers;
