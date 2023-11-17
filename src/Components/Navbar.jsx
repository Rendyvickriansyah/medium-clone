import React from "react";
import InputField from "../Components/InputField";

const Navbar = () => {
	return (
		<div className="Navbar py-4 xl:px-16 lg:px-8 sm:px-8 border-b border-gray-100 flex justify-between">
			<div className="flex xl:gap-8 sm:gap-4">
				<img src="../../public/medium.svg" alt="Logo" className="w-7" />
				<InputField />
			</div>
			<div className="flex gap-8 items-center">
				<a href="" className="flex gap-2 items-center text-gray-500">
					<i className="ri-edit-box-line ri-lg"></i>
					<p className="sm:text-sm xl:text-base">Write</p>
				</a>
				<a href="" className="text-gray-500">
					<i className="ri-notification-3-line ri-lg"></i>
				</a>
				<div className="rounded-full xl:h-10 xl:w-10 lg:w-8 lg:h-8 sm:h-8 sm:w-8 bg-[url('https://images.unsplash.com/photo-1615109398623-88346a601842?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fG1hbnxlbnwwfHwwfHx8MA%3D%3D')] bg-center bg-cover sm:block"></div>
			</div>
		</div>
	);
};

export default Navbar;
