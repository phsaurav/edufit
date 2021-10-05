import React from 'react';
import Hero from '../../components/Hero/Hero';
import useCourses from '../../hooks/useCourses';
import Course from './Course/Course';

// *Courses Page Container
const Courses = () => {
	// *Importing courses data form courses.json
	const [courses] = useCourses();
	return (
		<div>
			<div className="pb-52">
				<Hero url={'/assets/cover/cover_courses.jpg'}>
					<div className=" font-bold lg:w-10/12 uppercase text-5xl md:text-7xl italic">
						<h1 className="text-yellow-500">PUSH HARDER TODAY</h1>
						<h1 className="text-white">For a different tomorrow</h1>
					</div>
				</Hero>
			</div>
			<div className="flex flex-col items-center">
				{courses.map((course) => (
					<Course key={course.key} course={course}></Course>
				))}
			</div>
		</div>
	);
};

export default Courses;
