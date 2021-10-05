import React from 'react';
import { Link } from 'react-router-dom';

// *DiveIn component of Home page container
const DiveIn = () => {
	return (
		<div>
			<div className="bg-gray-50 relateive">
				<div className="max-w-7xl mx-auto py-12 text-center lg:text-left px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between items-center flex flex-col lg:flex-row">
					<h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
						<span className="block">Ready to dive in?</span>
						<span className="block text-yellow-500">
							Start your free trial today.
						</span>
					</h2>
					<div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
						<Link to="/courses">
							<div className="inline-flex rounded-md shadow">
								<div className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-yellow-500 hover:bg-yellow-500">
									Get started
								</div>
							</div>
						</Link>
						<Link to="/about">
							<div className="ml-3 inline-flex rounded-md shadow">
								<div className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-yellow-500 bg-white hover:bg-indigo-50">
									Learn more
								</div>
							</div>
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default DiveIn;
