import React from 'react';
import Hero from '../../components/Hero/Hero';
import useInstructor from '../../hooks/useInstructor';
import Instructor from './Instructor/Instructor';

const Instructors = () => {
	const [instructors] = useInstructor();
	return (
		<div>
			<div className="pb-52">
				<Hero url={'/assets/cover/cover_instractors.jpg'}>
					<div className=" font-bold  uppercase text-7xl italic">
						<h1 className="text-yellow-500">We are here</h1>
						<h1 className="text-white">For to help</h1>
					</div>
				</Hero>
			</div>
			<div className=" container mx-auto bg-gray-100 py-6 flex flex-col sm:flex-row sm:py-12 flex-wrap justify-center mt-20 gap-y-0">
				{instructors.map((instructor) => (
					<Instructor
						key={instructor.key}
						instructor={instructor}
					></Instructor>
				))}
			</div>
		</div>
	);
};

export default Instructors;
