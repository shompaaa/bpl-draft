import "react";
import { use } from "react";
import profileImg from "../../assets/profile.png";
import flagImg from "../../assets/flag.png";

const AvailablePlayers = ({ playersPromise }) => {
  const players = use(playersPromise);
  console.log(players);
  return (
    <div className="max-w-300 mx-auto mt-5 grid grid-cols-1 md:grid-cols-3 gap-4">
   {
    players.map(player =>   <div className="card bg-base-100 shadow-sm p-4">
        <figure>
          <img
          className="rounded-xl w-full h-55 object-cover"
            src={player.playerImage}
            alt={player.playerName}
          />
        </figure>
        <div className="flex items-center gap-2 my-3">
          <img src={profileImg} alt="" />
          <h2 className="card-title">{player.playerName}</h2>
        </div>
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-3">
            <img className="w-5 h-5" src={flagImg} alt="" />
            <p>{player.country}</p>
          </div>
          <button className="btn">{player.playingRole}</button>
        </div>
        <hr className="my-4 text-gray-300" />
        <div className="flex justify-between items-center">
          <p className="font-semibold">Rating</p>
          <p>{player.rating}</p>
        </div>
        <div className="flex justify-between items-center my-3">
          <p className="font-semibold">{player.battingStyle}</p>
          <p>{player.bowlingStyle}</p>
        </div>
        <div className="flex justify-between items-center">
          <p className="font-semibold">Price: ${player.price}</p>
          <button className="btn">Choose Player</button>
        </div>
      </div>)
   }
    </div>
  );
};

export default AvailablePlayers;
