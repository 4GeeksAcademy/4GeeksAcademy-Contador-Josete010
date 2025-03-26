import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import Stopwatch from "./Stopwatch";

//create your first component
const Home = () => {
	return (
		<div className="text-center">
			<Stopwatch />
		</div>
	);
};

export default Home;