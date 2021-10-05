import React from 'react';

const Hero = (props) => {
	return (
		<div className="h-3/6">
			<div
				className="absolute top-0 w-full"
				style={{
					backgroundImage: `url(${props.url})`,
					backgroundAttachment: 'fixed',
					backgroundSize: 'cover',
					backgroundPosition: 'top',
					height: '650px',
				}}
			>
				<div>
					<span
						id="blackOverlay"
						className="w-full h-full absolute bg-center opacity-75 bg-black"
					></span>
				</div>
			</div>
			<div className="container relative mx-auto flex items-center mt-20 sm:mt-40 justify-center">
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
