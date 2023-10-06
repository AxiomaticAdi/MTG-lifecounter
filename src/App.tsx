import { useState } from "react";
import "./App.css";
import { PlayerBox } from "./PlayerBox";

function App() {
	const [players, setPlayers] = useState<number[]>([1, 2, 3, 4]); // Start with four players

	const addPlayer = () => {
		if (players.length < 8) {
			setPlayers((prevPlayers) => [...prevPlayers, prevPlayers.length + 1]);
		}
	};

	const removePlayer = () => {
		if (players.length > 1) {
			setPlayers((prevPlayers) => {
				const updatedPlayers = [...prevPlayers];
				updatedPlayers.pop();
				return updatedPlayers;
			});
		}
	};

	return (
		<>
			<header>
				<h1>MTG Life Tracker</h1>
			</header>
			<div id="menu-bar">
				<button onClick={addPlayer} disabled={players.length >= 8}>
					Add Player
				</button>
				<button onClick={removePlayer} disabled={players.length <= 1}>
					Remove Player
				</button>
			</div>
			<div id="tracking-area">
				{players.map((player) => (
					<PlayerBox key={player} />
				))}
			</div>
		</>
	);
}

export default App;
