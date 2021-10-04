import Hero from '../../components/Hero/Hero';
import DiveIn from './DiveIn/DiveIn';
import HomeCard from './HomeCard/HomeCard';

const Home = () => {
	return (
		<div>
			<Hero url={'/assets/cover/cover_home.jpg'}>
				<div className="text-yellow-500 lg:w-6/12 font-bold uppercase text-6xl italic">
					<h1>GET FIT</h1>
					<h1>GET STRONGER</h1>
				</div>
				<p className="mt-4 lg:w-6/12 text-xl text-white">
					Thanks for visiting EduFit. Our mission is to deliver
					exceptional, approved education in all of our online fitness
					courses to lay the foundation for a fit and healthy life.
				</p>
			</Hero>
			<section className="pb-10 bg-blueGray-200 mt-16 h-full">
				<div className="lg:container mx-auto px-4">
					<div className="flex flex-wrap">
						<div className="lg:pt-12 pt-10 w-full md:w-4/12 px-4 text-center">
							<HomeCard courses={courses[0]}></HomeCard>
						</div>
						<div className="w-full md:w-4/12 px-4 text-center">
							<HomeCard courses={courses[1]}></HomeCard>
						</div>
						<div className="w-full pt-4 md:w-4/12 px-4 text-center">
							<HomeCard courses={courses[2]}></HomeCard>
						</div>
						<div className="pt-6 w-full md:w-4/12 px-4 text-center"></div>
						<div className=" relateive w-full md:w-4/12 px-4 text-center -mt-10 ">
							<HomeCard courses={courses[3]}></HomeCard>
						</div>
						<div className="pt-6 w-full md:w-4/12 px-4 text-center"></div>
					</div>
				</div>
			</section>
			<DiveIn></DiveIn>
		</div>
	);
};

export default Home;

const courses = [
	{
		key: 'B001RL8IYK',
		name: 'Home Workout',
		subtitle: 'Daily no equipment Workout Session',
		img: 'https://pyxis.nymag.com/v1/imgs/c7b/488/643ddf5a0ae568da48b72237a7db1d72da-17-home-workout.rsquare.w1200.jpg',
		duration: '10',
		lessons: '64',
		quiz: '8',
		Instructor: 'Jamie Ray',
		price: '100',
	},
	{
		key: 'B009RL8IYK',
		name: 'Yoga Freestyle',
		subtitle: 'Free style yoga Instruction Anytime ',
		img: 'https://media.timeout.com/images/105736298/750/562/image.jpg',
		duration: 'Subscription',
		lessons: 'Daily',
		quiz: '0',
		Instructor: 'Jessica Skye',
		price: '30',
	},
	{
		key: 'B002RL8IYK',
		name: 'Weight Loss',
		subtitle: 'Come to shape in 15 week',
		img: 'http://educam.like-themes.com/wp-content/uploads/2021/08/course_01-2-500x300.jpg',
		duration: '15',
		lessons: '94',
		quiz: '12',
		Instructor: 'Jamie Ray',
		price: '150',
	},
	{
		key: 'B002RL8IYK',
		name: 'Healthy Nutrition',
		subtitle: 'You’ll know what is a healthy diet',
		img: 'http://educam.like-themes.com/wp-content/uploads/2021/08/course_02-2-500x300.jpg',
		duration: '8',
		lessons: '42',
		quiz: '5',
		Instructor: 'Emily Fayette',
		price: '80',
	},
];
