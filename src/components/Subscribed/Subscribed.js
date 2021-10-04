import React from 'react';

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
				<img
					className="relative z-20"
					src="/assets/cover/cover_subscribed.jpg"
					alt=""
				/>
			</div>
		</div>
	);
};

export default Subscribed;
