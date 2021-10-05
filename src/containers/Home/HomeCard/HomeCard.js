import React from 'react';

// *HomeCard component of Home page container
const HomeCard = (props) => {
	const { name, subtitle, img, price } = props.courses;
	return (
		<div>
			<div className="col-span-4 sm:col-span-4 md:col-span-2 lg:col-span-1 xl:col-span-1 flex flex-col items-center relative z-20">
				<div className="bg-white rounded-lg mt-5">
					<img
						src={img}
						className="w-96 h-56 rounded-md object-cover"
						alt=""
					/>
				</div>
				<div className="bg-white shadow-lg rounded-lg -mt-4 w-64">
					<div className="py-5 px-5">
						<span className="font-bold text-gray-800 text-lg">
							{name}
						</span>
						<div className="flex items-center justify-center text-sm text-gray-600 font-light">
							{subtitle}
						</div>

						<div className="flex items-center justify-center">
							<div className="text-xl bg-yellow-500 rounded-full font-semibold mt-3 w-28 text-white py-1">
								${price}
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default HomeCard;
