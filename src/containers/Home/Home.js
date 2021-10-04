import React from 'react';
import Hero from '../../components/Hero/Hero';

const Home = () => {
	return (
		<div>
			<Hero url={'/assets/cover/cover_home.jpg'}></Hero>
			<section className="pb-10 bg-blueGray-200 mt-24">
				<div className="container mx-auto px-4">
					<div className="flex flex-wrap">
						<div className="lg:pt-12 pt-10 w-full md:w-4/12 px-4 text-center">
							<div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
								<div className="px-4 py-5 flex-auto">
									<div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-red-400">
										<i className="fas fa-award"></i>
									</div>
									<h6 className="text-xl font-semibold">
										Awarded Agency
									</h6>
									<p className="mt-2 mb-4 text-blueGray-500">
										Divide details about your product or
										agency work into parts. A paragraph
										describing a feature will be enough.
									</p>
								</div>
							</div>
						</div>
						<div className="w-full md:w-4/12 px-4 text-center">
							<div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
								<div className="px-4 py-5 flex-auto">
									<div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-lightBlue-400">
										<i className="fas fa-retweet"></i>
									</div>
									<h6 className="text-xl font-semibold">
										Free Revisions
									</h6>
									<p className="mt-2 mb-4 text-blueGray-500">
										Keep you user engaged by providing
										meaningful information. Remember that by
										this time, the user is curious.
									</p>
								</div>
							</div>
						</div>
						<div className="w-full pt-4 md:w-4/12 px-4 text-center">
							<div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
								<div className="px-4 py-5 flex-auto">
									<div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-emerald-400">
										<i className="fas fa-fingerprint"></i>
									</div>
									<h6 className="text-xl font-semibold">
										Verified Company
									</h6>
									<p className="mt-2 mb-4 text-blueGray-500">
										Write a few lines about each one. A
										paragraph describing a feature will be
										enough. Keep you user engaged!
									</p>
								</div>
							</div>
						</div>
						<div className="pt-6 w-full md:w-4/12 px-4 text-center"></div>
						<div className=" relateive w-full md:w-4/12 px-4 text-center -mt-10">
							<div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
								<div className="px-4 py-5 flex-auto">
									<div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-emerald-400">
										<i className="fas fa-fingerprint"></i>
									</div>
									<h6 className="text-xl font-semibold">
										Verified Company
									</h6>
									<p className="mt-2 mb-4 text-blueGray-500">
										Write a few lines about each one. A
										paragraph describing a feature will be
										enough. Keep you user engaged!
									</p>
								</div>
							</div>
						</div>
						<div className="pt-6 w-full md:w-4/12 px-4 text-center"></div>
					</div>
				</div>
			</section>
		</div>
	);
};

export default Home;
