import React from "react";
import {
	allBlogExceptLatest,
	latestBlogData,
	categories,
	authors,
	savedData,
} from "../data";
import Card from "../Components/BlogCard";
import SimpleBlogCard from "../Components/SimpleBlogCard";
import Badge from "../Components/Badge";
import SuggestedAuthor from "../Components/SuggestedAuthor";
import Tabs from "../Components/Tabs";

const Home = () => {
	return (
		<>
			<div className="container h-screen mx-auto 2xl:px-44 xl:px-24 grid sm:grid-cols-1 lg:grid-cols-3 xl:gap-20">
				<div className="left-content xl:py-12 lg:px-8 sm:px-8 col-span-2">
					<div className="tabs sticky top-0">
						<Tabs />
					</div>
					{allBlogExceptLatest.map((blog, index) => {
						return (
							<React.Fragment key={index}>
								<Card
									title={blog.title}
									author={blog.author}
									img={blog.imgUrl}
									content={blog.content}
									releaseDate={blog.releaseDate}
									category={blog.category}
									shortDescription={blog.content}
									duration={blog.duration}
									className="my-8"
								/>
								{index < allBlogExceptLatest.length - 1 && (
									<div className="border-t border-gray-100"></div>
								)}
							</React.Fragment>
						);
					})}
				</div>
				<div className="right-content sm:hidden lg:block border-l border-gray-100 xl:pt-16 sm:pt-6 lg:px-4 xl:pl-6 ">
					<div className="staff-picks">
						<h5 className="font-bold mb-5">Staff picks</h5>
						<div className="">
							{latestBlogData.slice(1, 4).map((data) => (
								<React.Fragment key={data.id}>
									<SimpleBlogCard
										author={data.author}
										title={data.title}
										category={data.category}
									/>
								</React.Fragment>
							))}
						</div>
						<a href="#" className="text-[#1A8917] xl:text-base lg:text-sm">
							See the full list
						</a>
					</div>
					<div className="recommended topics mt-8 ">
						<h5 className="font-bold mb-5">Recommended topics</h5>
						<div className="flex flex-wrap gap-2 mb-4">
							{categories.map((category) => (
								<Badge key={category.id} text={category.name} />
							))}
						</div>
						<a href="#" className="text-[#1A8917] xl:text-base lg:text-sm">
							See more topics
						</a>
					</div>
					<div className="Suggested Author mt-8 ">
						<h5 className="font-bold mb-5">Who to follow</h5>
						{authors.map((author) => (
							<div key={author.id} className="mb-4">
								<SuggestedAuthor
									name={author.name}
									img={author.imgUrl}
									bio={author.bio}
								/>
							</div>
						))}
						<a href="#" className="text-[#1A8917] xl:text-base lg:text-sm">
							See more suggestions
						</a>
					</div>
					<div className="recently saved mt-8">
						<h5 className="font-bold mb-5">Recently Saved</h5>
						{savedData.map((data) => {
							return (
								<React.Fragment key={data.id}>
									<SimpleBlogCard
										title={data.title}
										author={data.author}
										releaseDate={data.releaseDate}
										duration={data.duration}
									/>
								</React.Fragment>
							);
						})}
					</div>
				</div>
			</div>
		</>
	);
};

export default Home;
