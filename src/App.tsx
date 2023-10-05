import { LifeTotalBox } from "./LifeTotalBox.tsx";
import "./App.css";
import { PlayerBox } from "./PlayerBox.tsx";

function App() {
	return (
		<>
			<PlayerBox />
			<PlayerBox />
			<LifeTotalBox />
			<LifeTotalBox />
		</>
	);
}

export default App;
