import React from "react";

const Button = ({ placeholder }) => {
	return (
		<button className="xl:px-3 xl:py-1 lg:px-2  xl:text-sm border border-neutral-600 rounded-full ">
			{placeholder}
		</button>
	);
};

export default Button;
