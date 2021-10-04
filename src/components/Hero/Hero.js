import React from 'react';

const Hero = (props) => {
	return (
		<div className="h-3/6">
			<div
				className="absolute top-0 w-full h-3/6 bg-center bg-cover"
				style={{
					backgroundImage: `url(${props.url})`,
				}}
			>
				<div>
					<span
						id="blackOverlay"
						className="w-full h-full absolute bg-center opacity-75 bg-black"
					></span>
				</div>
			</div>
			<div className="container relative mx-auto flex items-center mt-40 justify-center">
				<div className="items-center flex justify-center flex-wrap">
					<div className="w-full  px-4 ml-auto mr-auto text-center">
						<div className=" text-left">{props.children}</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Hero;
