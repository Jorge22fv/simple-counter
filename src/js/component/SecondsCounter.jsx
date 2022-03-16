import React from "react";
import propTypes from "prop-types";

export const SecondsCounter = ({ counter }) => {
	const six = Math.floor(counter / 100000) % 10;
	const five = Math.floor(counter / 10000) % 10;
	const four = Math.floor(counter / 1000) % 10;
	const three = Math.floor(counter / 100) % 10;
	const two = Math.floor(counter / 10) % 10;
	const one = Math.floor(counter / 1) % 10;

	return (
		<div className="text-center">
			<i className="fas fa-clock fs-1 me-3 "></i>
			<label className="clock">{six}</label>
			<label className="clock">{five}</label>
			<label className="clock">{four}</label>
			<label className="clock">{three}</label>
			<label className="clock">{two}</label>
			<label className="clock">{one}</label>
			<div>
				<input
					className="bg-dark text-white rounded-pill fs-4 m-3"
					type="button"
					value="Stop"
				/>
				<input
					className="bg-dark text-white rounded-pill fs-4 m-3"
					type="button"
					value="Reset"
				/>
				<input
					className="bg-dark text-white rounded-pill fs-4 m-3"
					type="button"
					value="Resume"
				/>
			</div>
		</div>
	);
};

SecondsCounter.propTypes = {
	six: propTypes.number,
	five: propTypes.number,
	four: propTypes.number,
	three: propTypes.number,
	two: propTypes.number,
	one: propTypes.number,
};
