import React from 'react';
import logo from '../../assets/logo.png';
import title from '../../assets/title.png';
import './Header.css';

const Header = () => {
	return (
		<div>
			<div
				className="absolute top-0 w-full h-3/6 bg-center bg-cover"
				style={{
					backgroundImage: `url(
							'https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=1267&amp;q=80'
						)`,
				}}
			>
				<span
					id="blackOverlay"
					className="w-full h-full absolute bg-center opacity-75 bg-black"
				></span>
			</div>
			<div className="container relative mx-auto">
				<div className="flex items-center justify-between md:container mx-auto px-6 md:px-0">
					<div className="flex item-center justify-center mt-2">
						<img className="h-10 mr-3" src={logo} alt="Logo" />
						<img className="h-10" src={title} alt="title" />
					</div>
					<div className="space-x-8 xl:space-x-12 sm:flex items-center justify-between hidden md:px-0 mr-3">
						<span className="link link-underline link-underline-orange text-lg text-white font-semibold cursor-pointer hover:text-yellow-500 focus:shadow-outline">
							HOME
						</span>
						<span className="link link-underline link-underline-orange text-lg text-white font-semibold cursor-pointer hover:text-yellow-500">
							COURSES
						</span>
						<span className="link link-underline link-underline-orange text-lg text-white font-semibold cursor-pointer hover:text-yellow-500">
							INSTRUCTION
						</span>
						<span className="link link-underline link-underline-orange text-lg text-white font-semibold cursor-pointer hover:text-yellow-500">
							ABOUT
						</span>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Header;
