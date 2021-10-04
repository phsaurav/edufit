import { useEffect, useState } from 'react';

const useCourses = () => {
	const [courses, setcourses] = useState([]);

	useEffect(() => {
		fetch('./courses.json')
			.then((res) => res.json())
			.then((data) => {
				setcourses(data);
			});
	}, []);

	return [courses];
};

export default useCourses;
