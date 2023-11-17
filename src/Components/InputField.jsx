import React from "react";

export default function InputField() {
	return (
		<div>
			<div className="relative">
				<div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
					<span className="text-gray-500 sm:text-sm">
						<i className="ri-search-line"></i>
					</span>
				</div>
				<input
					type="text"
					name="price"
					id="price"
					className="block bg-gray-50 w-full rounded-full py-1.5 pl-9  text-gray-900 placeholder:text-gray-400 sm:text-sm sm:leading-6"
					placeholder="Search..."
				/>
			</div>
		</div>
	);
}
