import React from 'react';
import { Link } from 'react-router-dom';

// *Subscribed Component
const Subscribed = () => {
	return (
		<div>
			<div className=" min-h-screen">
				<div>
					<span
						id="blackOverlay"
						className="w-full h-40 absolute top-0 bg-center opacity-75 bg-black"
					></span>
				</div>
				<div className="flex flex-col w-full items-center">
					<img
						className="relative z-20"
						src="/assets/cover/cover_subscribed.jpg"
						alt=""
					/>
					<Link
						to="/courses"
						className="mx-auto flex text-yellow-600 items-center gap-1 sm:text-lg border border-yellow-600 px-3 py-1 rounded-full hover:bg-yellow-600 transition-colors  focus:outline-none focus-visible:border-gray-500 hover:text-white w-40 text-center justify-center mt-5 mb-5"
					>
						<button>
							<span>Go Back</span>
						</button>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Subscribed;
