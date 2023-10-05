import { useState } from "react";
import { LifeTotalBox } from "./LifeTotalBox";

export function PlayerBox() {
	const [playerName, setPlayerName] = useState("");

	const handleInputChange = (e) => {
		setPlayerName(e.target.value);
	};

	return (
		<div>
			<input
				className="player-name-input"
				type="text"
				placeholder="Enter player name"
				value={playerName}
				onChange={handleInputChange}
			/>
			<LifeTotalBox />
		</div>
	);
}
