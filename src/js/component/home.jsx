import React from "react";
import { SecondsCounter } from "./SecondsCounter.jsx";

const Home = ({ counter }) => {
	return (
		<div className="mt-5 ms-5 fs-1">
			<SecondsCounter counter={counter} />
		</div>
	);
};

export default Home;
