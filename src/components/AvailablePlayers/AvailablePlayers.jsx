import "react";
import { use } from "react";

import PlayerCard from "../PlayerCard/PlayerCard";

const AvailablePlayers = ({ playersPromise,availableBalance,setAvailableBalance }) => {
  const players = use(playersPromise);
  console.log(players);
  return (
    <div className="max-w-300 mx-auto mt-5 grid grid-cols-1 md:grid-cols-3 gap-4">
   {
    players.map((player,index) => <PlayerCard player={player} key={index} availableBalance={availableBalance} setAvailableBalance={setAvailableBalance}></PlayerCard>)
   }
    </div>
  );
};

export default AvailablePlayers;
