import React from 'react';

// *Instructor component of Instructors container
const Instructor = (props) => {
	const { name, subtitle, Description, img } = props.instructor;
	return (
		<div>
			<div className=" sm:max-w-xl min-w-lg mx-5 mb-20">
				<div className="bg-white shadow-lg border-gray-100 max-h-80	 border rounded-3xl p-8 flex space-x-8">
					<div className=" overflow-visible w-1/2">
						<img
							className="h-80 rounded-3xl shadow-lg object-cover"
							src={img}
							alt=""
						/>
					</div>
					<div className="flex flex-col w-1/2 space-y-4">
						<div className="flex justify-between items-start">
							<h2 className="text-3xl font-bold">{name}</h2>
						</div>
						<div>
							<div className="text-sm text-gray-400">
								{subtitle}
							</div>
						</div>
						<p className=" text-gray-400 max-h-40 overflow-y-hidden">
							{Description}
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Instructor;
