import { useState } from "react";
import { LifeTotalBox } from "./LifeTotalBox";

export function PlayerBox() {
	const [playerName, setPlayerName] = useState("");

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setPlayerName(e.target.value);
	};

	return (
		<div className="player-box">
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
