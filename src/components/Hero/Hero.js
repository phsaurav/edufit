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
					<div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
						<div className="pr-12 text-left">
							<div className="text-yellow-500 font-bold uppercase text-6xl italic">
								<h1>GET FIT</h1>
								<h1>GET STRONGER</h1>
							</div>
							<p className="mt-4 text-xl text-white">
								Thanks for visiting EduFit. Our mission is to
								deliver exceptional, approved education in all
								of our online fitness courses to lay the
								foundation for an outstanding professional
								career as a fitness instructor, personal
								trainer, or strength coach.
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Hero;
