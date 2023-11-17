import React from "react";
import Button from "../Components/Button/ButtonSecondary";

const SuggestedAuthor = ({ img, name, bio }) => {
	const shortBio = bio;

	const slicedBio = shortBio.split("").slice(0, 40).join("");

	const truncatedBio = slicedBio + "...";
	return (
		<div className="flex items-center gap-4">
			<div className="author flex gap-4 items-start ">
				<div
					className="h-9 w-9 rounded-full bg-cover bg-center flex-shrink-0"
					style={{ backgroundImage: `url(${img})` }}
				></div>
				<div className="">
					<h5 className="font-bold">{name}</h5>
					<p className="text-sm text-slate-500">{truncatedBio}</p>
				</div>
			</div>

			<Button placeholder="Follow" />
		</div>
	);
};

export default SuggestedAuthor;
