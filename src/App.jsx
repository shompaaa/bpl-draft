import { Suspense, useState } from "react";
import "./App.css";
import AvailablePlayers from "./components/AvailablePlayers/AvailablePlayers";
import Navbar from "./components/Navbar/Navbar";
import SelectedPlayers from "./components/SelectedPlayers/SelectedPlayers";

const fetchPlayers = async () => {
  const res = await fetch("players.json");
  return res.json();
};
const playersPromise = fetchPlayers();

function App() {
  const [toggle, setToggle] = useState(true);
  const [availableBalance, setAvailableBalance] = useState(60000000);
  return (
    <>
      <Navbar availableBalance={availableBalance}></Navbar>
      <div className="max-w-300 mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">Available Players</h1>
        <div>
          <button
            onClick={() => setToggle(true)}
            className={`rounded-l-xl border-r-0 ${toggle && "bg-[#E7FE29] font-bold"} border-gray-200 border py-3 px-4`}
          >
            Available
          </button>
          <button
            onClick={() => setToggle(false)}
            className={`rounded-r-xl border-l-0 border-gray-200 border py-3 px-4 ${toggle || "bg-[#E7FE29] font-bold"}`}
          >
            Selected <span>(0)</span>
          </button>
        </div>
      </div>
      {toggle === true ? (
        <Suspense
          fallback={
            <span className="loading loading-bars loading-xl mx-auto flex text-[#BB604C]"></span>
          }
        >
          <AvailablePlayers
            playersPromise={playersPromise}
            availableBalance={availableBalance}
            setAvailableBalance={setAvailableBalance}
          ></AvailablePlayers>
        </Suspense>
      ) : (
        <SelectedPlayers></SelectedPlayers>
      )}
    </>
  );
}

export default App;
