import React from 'react';
import Hero from '../../components/Hero/Hero';

const NotFound = () => {
	return (
		<div className=" min-h-screen">
			<div>
				<span
					id="blackOverlay"
					className="w-full h-40 absolute top-0 bg-center opacity-75 bg-black"
				></span>
			</div>
			<img
				className="relative z-20"
				src="/assets/cover/cover_404.jpg"
				alt=""
			/>
		</div>
	);
};

export default NotFound;
