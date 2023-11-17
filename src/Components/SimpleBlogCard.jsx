import React from "react";

const SimpleBlogCard = ({ author, title, category, releaseDate, duration }) => {
	return (
		<div className="mb-4">
			<div className="author flex gap-2 items-center mb-1 whitespace-no-wrap">
				<div className="rounded-full h-6 w-6 bg-[url('https://images.unsplash.com/photo-1615109398623-88346a601842?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fG1hbnxlbnwwfHwwfHx8MA%3D%3D')] bg-center bg-cover"></div>
				<p className="text-sm">{author}</p>
				{category && (
					<>
						<span className="text-slate-500 text-sm">in</span>
						<p className="text-sm">{category}</p>
					</>
				)}
			</div>
			<h5 className="font-bold ">{title}</h5>
			{releaseDate && (
				<div className="flex gap-2 mt-2">
					<p className="text-sm text-gray-500">{releaseDate}</p>
					<span>.</span>
					<p className="text-sm text-gray-500">{duration}</p>
				</div>
			)}
		</div>
	);
};

export default SimpleBlogCard;
