import React from "react";

const Badge = ({ text }) => {
	return (
		<div className="badge px-3 py-1 bg-gray-100 w-fit rounded-full">
			<p className="text-gray-600 text-sm">{text}</p>
		</div>
	);
};

export default Badge;
