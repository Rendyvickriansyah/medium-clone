import React from "react";
import { categories } from "../data";

const Tabs = () => {
	return (
		<div className=" bg-white w-full ">
			<div className="relative overflow-x-scroll flex flex-nowrap no-scrollbar border-b ">
				<button className="absolute right-0 bottom-5 px-5 bg-white bg-opacity-95 z-10">
					<i className="ri-arrow-right-s-line ri-xl"></i>
				</button>
				<button>
					<i className="ri-add-line"></i>
				</button>
				{categories.map((category) => {
					return (
						<React.Fragment key={category.id}>
							<button className="px-3 py-5 min-w-max 2xl:text-base sm:text-sm">
								{category.name}
							</button>
						</React.Fragment>
					);
				})}
			</div>
		</div>
	);
};

export default Tabs;
