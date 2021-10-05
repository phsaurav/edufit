import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

// *Header section Component
const Header = () => {
	return (
		<div>
			<div className="container mx-auto relative z-10">
				<div className="flex items-center justify-between md:container mx-auto px-6 md:px-0">
					<div className="flex item-center justify-center mt-2">
						<img
							className="h-10 mr-3"
							src="/assets/logo/logo.png"
							alt="Logo"
						/>
						<img
							className="h-10"
							src="/assets/logo/title.png"
							alt="title"
						/>
					</div>
					<div className="space-x-8 xl:space-x-12 sm:flex items-center justify-between hidden md:px-0 mr-3">
						<NavLink
							to="/home"
							activeStyle={{
								color: '#F9A61A',
							}}
							className="link link-underline link-underline-orange text-lg text-white font-semibold cursor-pointer hover:text-yellow-500 focus:shadow-outline"
						>
							HOME
						</NavLink>
						<NavLink
							to="/courses"
							activeStyle={{
								color: '#F9A61A',
							}}
							className="link link-underline link-underline-orange text-lg text-white font-semibold cursor-pointer hover:text-yellow-500 focus:shadow-outline"
						>
							COURSES
						</NavLink>
						<NavLink
							to="/instructors"
							activeStyle={{
								color: '#F9A61A',
							}}
							className="link link-underline link-underline-orange text-lg text-white font-semibold cursor-pointer hover:text-yellow-500 focus:shadow-outline"
						>
							INSTRUCTORS
						</NavLink>
						<NavLink
							to="/about"
							activeStyle={{
								color: '#F9A61A',
							}}
							className="link link-underline link-underline-orange text-lg text-white font-semibold cursor-pointer hover:text-yellow-500 focus:shadow-outline"
						>
							ABOUT
						</NavLink>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Header;
