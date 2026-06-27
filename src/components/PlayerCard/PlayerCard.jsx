import profileImg from "../../assets/profile.png";
import flagImg from "../../assets/flag.png";
import { useState } from "react";

const PlayerCard = ({
  player,
  availableBalance,
  setAvailableBalance,
  selectedPlayer,
  setSelectedPlayer,
}) => {
  const {
    playerImage,
    playerName,
    country,
    rating,
    playingRole,
    bowlingStyle,
    battingStyle,
    price,
  } = player;

  const [isSelected, setIsSelected] = useState(false);
  const handleSelected = (player) => {
    if (availableBalance < price) {
      alert("Not Enough Coin to Buy a Player!");
      return;
    }
    setIsSelected(true);
    setAvailableBalance(availableBalance - price);
    setSelectedPlayer([...selectedPlayer, player]);
  };
  return (
    <div className="card bg-base-100 shadow-sm p-4">
      <figure>
        <img
          className="rounded-xl w-full h-55 object-cover"
          src={playerImage}
          alt={playerName}
        />
      </figure>
      <div className="flex items-center gap-2 my-3">
        <img src={profileImg} alt="" />
        <h2 className="card-title">{playerName}</h2>
      </div>
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-3">
          <img className="w-5 h-5" src={flagImg} alt="" />
          <p>{country}</p>
        </div>
        <button className="btn">{playingRole}</button>
      </div>
      <hr className="my-4 text-gray-300" />
      <div className="flex justify-between items-center">
        <p className="font-semibold">Rating</p>
        <p>{rating}</p>
      </div>
      <div className="flex justify-between items-center my-3">
        <p className="font-semibold">{battingStyle}</p>
        <p>{bowlingStyle}</p>
      </div>
      <div className="flex justify-between items-center">
        <p className="font-semibold">Price: ${price}</p>
        <button
          disabled={isSelected}
          onClick={() => {
            handleSelected(player);
          }}
          className="btn"
        >
          {isSelected ? "Selected" : "Choose Player"}
        </button>
      </div>
    </div>
  );
};

export default PlayerCard;
