const SelectedPlayerCard = ({player,removePlayer}) => {
    const {playerImage,playerName,playingRole} = player
    const handleRemove = ()=>{
        removePlayer(player)
    }
  return (
    <div className="flex justify-between items-center border border-gray-300 p-3 mb-2 rounded-xl">
      <div className="flex gap-3">
        <img src={playerImage} className="h-12 w-12 rounded-xl object-cover" alt="" />
        <div>
          <h4 className="text-md font-bold">{playerName}</h4>
          <p className="text-gray-500">{playingRole}</p>
        </div>
      </div>
      <div onClick={handleRemove}>
        <p>❌</p>
      </div>
    </div>
  );
};

export default SelectedPlayerCard;
