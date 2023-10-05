import React, { useState } from "react";

export function LifeTotalBox() {
	const [lifeTotal, setLifeTotal] = useState(40);

	const incrementLifeTotal = () => {
		setLifeTotal((prev) => prev + 1);
	};
	const decrementLifeTotal = () => {
		setLifeTotal((prev) => prev - 1);
	};
	const handleInputChange = (e) => {
		const value = parseInt(e.target.value, 10);
		if (!isNaN(value)) {
			setLifeTotal(value);
		}
	};

	return (
		<div id="life-container">
			<button className="life-arrow-button" onClick={decrementLifeTotal}>
				<img
					className="life-arrow-img"
					src="../public/arrow-prev.svg"
					alt="Decrement"
				/>
			</button>
			<input
				className="life-input"
				type="number"
				value={lifeTotal}
				onChange={handleInputChange}
			/>
			<button className="life-arrow-button" onClick={incrementLifeTotal}>
				<img
					className="life-arrow-img"
					src="../public/arrow-next.svg"
					alt="Increment"
				/>
			</button>
		</div>
	);
}
