import { useEffect, useState } from 'react';

const useInstructor = () => {
	const [instructor, setinstructor] = useState([]);

	useEffect(() => {
		fetch('./instructor.json')
			.then((res) => res.json())
			.then((data) => {
				setinstructor(data);
			});
	}, []);

	return [instructor];
};

export default useInstructor;
