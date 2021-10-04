import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faCopy,
	faPuzzlePiece,
	faUser,
} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const Course = (props) => {
	const { name, subtitle, img, price, lessons, Instructor, quiz } =
		props.course;
	return (
		<div className=" bg-white p-2 w-11/12 xl:w-7/12 rounded-2xl h-64 m-5 flex flex-col sm:flex-row sm:p-4">
			<img
				src={img}
				className="h-52 sm:w-72 rounded-xl bg-gray-100 bg-center object-cover"
				alt=""
			/>
			<div className="flex sm:flex-1 flex-col gap-2 p-1 ml-5">
				<div className="flex justify-between">
					<h1 className="text-lg sm:text-3xl font-semibold  text-gray-600">
						{name}
					</h1>
					<h4 className="text-xl text-yellow-600 mt-1 border border-yellow-400 px-3 py-1 rounded-l-full w-20 text-center">
						${price}
					</h4>
				</div>
				<p className="text-gray-500 text-sm sm:text-base line-clamp-3">
					{subtitle}
				</p>
				<p className=" text-lg  text-gray-500 line-clamp-3">
					<FontAwesomeIcon
						className="text-yellow-500 text-lg"
						icon={faUser}
					></FontAwesomeIcon>{' '}
					{Instructor}
				</p>

				<div className="flex gap-4 mt-auto mb-2">
					<button className="flex items-center gap-1 sm:text-lg border border-yellow-400 px-3 py-1 rounded-full hover:bg-gray-50 transition-colors focus:bg-gray-100 focus:outline-none focus-visible:border-gray-500">
						<span className="text-gray-600 text-base">
							{' '}
							<FontAwesomeIcon
								className="text-yellow-400 text-base"
								icon={faCopy}
							></FontAwesomeIcon>{' '}
							{lessons} lessons
						</span>
					</button>
					<button className="flex items-center gap-1 sm:text-lg border border-yellow-400 px-3 py-1 rounded-full hover:bg-gray-50 transition-colors focus:bg-gray-100 focus:outline-none focus-visible:border-gray-500">
						<span className="text-gray-600 text-base">
							{' '}
							<FontAwesomeIcon
								className="text-yellow-400 text-base"
								icon={faPuzzlePiece}
							></FontAwesomeIcon>{' '}
							{quiz} Quizs
						</span>
					</button>
					<Link
						to="/subscribed"
						className="ml-auto flex text-yellow-600 items-center gap-1 sm:text-lg border border-yellow-600 px-3 py-1 rounded-full hover:bg-yellow-600 transition-colors  focus:outline-none focus-visible:border-gray-500 hover:text-white"
					>
						<button>
							<span>Subscribe</span>
						</button>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Course;
