import { useState } from "react";
import arrow_next from "../public/arrow-next.svg";
import arrow_prev from "../public/arrow-prev.svg";

export function LifeTotalBox() {
	const [lifeTotal, setLifeTotal] = useState(40);

	const incrementLifeTotal = () => {
		setLifeTotal((prev) => prev + 1);
	};
	const decrementLifeTotal = () => {
		setLifeTotal((prev) => prev - 1);
	};
	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const value = parseInt(e.target.value, 10);
		if (!isNaN(value)) {
			setLifeTotal(value);
		}
	};

	return (
		<div id="life-container">
			<button className="life-arrow-button" onClick={decrementLifeTotal}>
				<img className="life-arrow-img" src={arrow_prev} alt="Decrement" />
			</button>
			<input
				className="life-input"
				type="number"
				value={lifeTotal}
				onChange={handleInputChange}
			/>
			<button className="life-arrow-button" onClick={incrementLifeTotal}>
				<img className="life-arrow-img" src={arrow_next} alt="Increment" />
			</button>
		</div>
	);
}
