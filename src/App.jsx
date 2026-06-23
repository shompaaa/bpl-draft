import { Suspense } from "react";
import "./App.css";
import AvailablePlayers from "./components/AvailablePlayers/AvailablePlayers";
import Navbar from "./components/Navbar/Navbar";
// import SelectedPlayers from "./components/SelectedPlayers/SelectedPlayers";

const fetchPlayers = async () => {
  const res = await fetch("players.json");
  return res.json();
};

function App() {
  const playersPromise = fetchPlayers();
  return (
    <>
      <Navbar></Navbar>
      <Suspense
        fallback={<span className="loading loading-bars loading-xl mx-auto flex text-[#BB604C]"></span>}
      >
        <AvailablePlayers playersPromise={playersPromise}></AvailablePlayers>
      </Suspense>
      {/* <SelectedPlayers></SelectedPlayers> */}
    </>
  );
}

export default App;
