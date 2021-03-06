import Hero from '../../components/Hero/Hero';
import DiveIn from './DiveIn/DiveIn';
import HomeCard from './HomeCard/HomeCard';

// *Home Page Container
const Home = () => {
	return (
		<div>
			<Hero url={'/assets/cover/cover_home.jpg'}>
				<div className="text-yellow-500 lg:w-6/12 font-bold uppercase text-6xl italic lg:ml-8">
					<h1>GET FIT</h1>
					<h1>GET STRONGER</h1>
				</div>
				<p className="mt-4 lg:w-6/12 text-xl text-white lg:ml-8">
					Thanks for visiting EduFit. Our mission is to deliver
					exceptional, approved education in all of our online fitness
					courses to lay the foundation for a fit and healthy life.
				</p>
			</Hero>
			<section className="pb-10 bg-blueGray-200 mt-10 h-full">
				<div className="lg:container mx-auto px-4">
					<div className="flex flex-wrap">
						<div className=" pt-20 w-full md:w-4/12 px-4 text-center">
							<HomeCard courses={courses[0]}></HomeCard>
						</div>
						<div className="w-full md:w-4/12 px-4 text-center">
							<HomeCard courses={courses[1]}></HomeCard>
						</div>
						<div className="w-full pt-24 md:w-4/12 px-4 text-center">
							<HomeCard courses={courses[2]}></HomeCard>
						</div>
						<div className="pt-10 w-full md:w-4/12 px-4 text-center"></div>
						<div className=" relateive w-full md:w-4/12 px-4 text-center -mt-20 ">
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

// *4 Home Course Data
// !For variable position of cards in home cant use map and use fetched data from courses.json
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
		img: 'https://static.toiimg.com/photo/81348268.cms',
		duration: '15',
		lessons: '94',
		quiz: '12',
		Instructor: 'Jamie Ray',
		price: '150',
	},
	{
		key: 'B002RL8IYK',
		name: 'Healthy Nutrition',
		subtitle: 'You???ll know what is a healthy diet',
		img: 'https://media.sciencephoto.com/c0/31/31/63/c0313163-800px-wm.jpg',
		duration: '8',
		lessons: '42',
		quiz: '5',
		Instructor: 'Emily Fayette',
		price: '80',
	},
];
