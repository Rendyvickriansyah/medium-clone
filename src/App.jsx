import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Navbar from "./Components/Navbar";
import "./App.css";
import Banner from "./Components/Banner";

function App() {
	return (
		<>
			<Banner />
			<Navbar />
			<Routes>
				<Route path="/" Component={Home} />
			</Routes>
		</>
	);
}

export default App;
