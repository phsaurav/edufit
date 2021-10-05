import React from 'react';
import Hero from '../../components/Hero/Hero';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faDumbbell,
	faPlayCircle,
	faPuzzlePiece,
	faRunning,
} from '@fortawesome/free-solid-svg-icons';

const About = () => {
	return (
		<div>
			<div className="pb-52">
				<Hero url={'/assets/cover/cover_about.jpg'}>
					<div className=" font-bold  uppercase text-7xl italic text-center">
						<h1 className="text-white">Fitness</h1>
						<h1 className="text-white">For Life</h1>
					</div>
				</Hero>
			</div>
			<div className="mb-10 container mx-auto">
				<section class="relative pt-32 pb-16">
					<div class="items-center flex flex-wrap justify-center">
						<div class="md:ml-auto px-4">
							<img
								alt="..."
								class="w-96 h-96 rounded-lg shadow-lg object-cover mt-10"
								src="https://is1-ssl.mzstatic.com/image/thumb/Video124/v4/79/a1/38/79a138a9-c3f1-07fb-07fc-f277fe2b34e6/YO_JS_0004_0115_20200807_vs3.png/1200x675.jpg"
							/>
						</div>
						<div class="w-full px-10 md:px-3 md:w-5/12 md:mr-auto px-4">
							<div class="md:pr-12">
								<div class="text-yellow-500 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-yellow-100 mt-8">
									<FontAwesomeIcon
										className=" text-xl"
										icon={faDumbbell}
									></FontAwesomeIcon>
								</div>
								<h3 class="text-3xl font-semibold">
									EduFit Team
								</h3>
								<p class="mt-4 text-sm leading-relaxed text-gray-600">
									EduFit is a division of a much larger
									education institution.The following list
									identifies some of the primary staff
									involved in the direct, daily operations of
									NFE. We have a highly experienced fitness
									tutor team.
								</p>
								<ul class="list-none mt-6">
									<li class="py-2">
										<div class="flex items-center">
											<div>
												<span class=" flex justify-center items-center uppercase rounded-full text-yellow-500  mr-3 text-center">
													<FontAwesomeIcon
														className=" text-sm"
														icon={faPlayCircle}
													></FontAwesomeIcon>
												</span>
											</div>
											<div>
												<h4 class="text-blueGray-500">
													Carefully crafted content
												</h4>
											</div>
										</div>
									</li>
									<li class="py-2">
										<div class="flex items-center">
											<div>
												<span class=" flex justify-center items-center uppercase rounded-full text-yellow-500  mr-3 text-center">
													<FontAwesomeIcon
														className=" text-sm"
														icon={faRunning}
													></FontAwesomeIcon>
												</span>
											</div>
											<div>
												<h4 class="text-blueGray-500">
													Amazing Examples
												</h4>
											</div>
										</div>
									</li>
									<li class="py-2">
										<div class="flex items-center items-center">
											<div>
												<span class=" flex justify-center items-center uppercase rounded-full text-yellow-500  mr-3 text-center">
													<FontAwesomeIcon
														className=" text-sm"
														icon={faPuzzlePiece}
													></FontAwesomeIcon>
												</span>
											</div>
											<div>
												<h4 class="text-blueGray-500">
													Dynamic Quiz
												</h4>
											</div>
										</div>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</section>
			</div>
		</div>
	);
};

export default About;
