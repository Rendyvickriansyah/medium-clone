import React from "react";
import Badge from "../Components/Badge";

const BlogCard = ({
	title,
	author,
	img,
	content,
	releaseDate,
	category,
	duration,
	className,
}) => {
	const shortContent = content;

	const slicedContent = shortContent.split("").slice(0, 150).join("");

	const truncatedContent = slicedContent + "...";

	return (
		<div className={`card ${className}`}>
			<div className="author flex gap-2 items-center">
				<div className="rounded-full 2xl:h-8 2xl:w-8 sm:h-6 sm:w-6 bg-[url('https://images.unsplash.com/photo-1615109398623-88346a601842?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fG1hbnxlbnwwfHwwfHx8MA%3D%3D')] bg-center bg-cover"></div>
				<p className="sm:text-sm 2xl:text-base">{author}</p>
				<span className="text-slate-200">|</span>
				<p className="text-slate-500 sm:text-sm 2xl:text-base">{releaseDate}</p>
			</div>
			<div className="blogDetail mt-2 flex justify-between sm:gap-4 md:gap-16 items-center w-full">
				<div className=" content-container w-full">
					<div>
						<h4 className="font-bold xl:text-xl mb-1">{title}</h4>
						<p className="text-base font-normal sm:hidden md:block">
							{truncatedContent}
						</p>
					</div>
					<div className="flex justify-between w-full items-center sm:items-end ">
						<div className="mt-6 flex gap-2 items-center">
							<Badge text={category} />
							<p className="text-sm text-slate-600">{duration}</p>
						</div>
						<div className="flex items-center gap-4 text-gray-400">
							<i className="ri-bookmark-line ri-lg"></i>
							<i className="ri-indeterminate-circle-line ri-lg"></i>
							<i className="ri-more-line ri-lg"></i>
						</div>
					</div>
				</div>

				<div
					className="xl:h-36 sm:h-24 md:h-24 lg:h-28 flex-shrink-0 bg-cover bg-center bg-slate-400 aspect-square"
					style={{ backgroundImage: `url(${img})` }}
				></div>
			</div>
		</div>
	);
};

export default BlogCard;
