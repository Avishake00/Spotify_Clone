import React, { useState } from "react";
import "./signup.css";
import { Link } from "react-router-dom";

const signup = () => {
	const [selectedOptions, setSelectedOptions] = useState([]);

	// options for genders
	const options = [
		"Man",
		"Woman",
		"Non-binary",
		"Something else",
		"Prefer not to say",
	];

	// handle the check box value and set it to option
	const handleCheckboxChange = (option) => {
		if (selectedOptions.includes(option)) {
			setSelectedOptions(
				selectedOptions.filter((selected) => selected !== option)
			);
		} else {
			setSelectedOptions([...selectedOptions, option]);
		}
	};

	return (
		<>
			<header className="px-12 py-6">
				<div className="logo">
					<img src="/assets/whiteimage.png" width={110} alt="Spotify Logo" />
				</div>
			</header>

			<div className="container py-5">
				<div className="bg-black text-center w-1/2 mx-auto p-8 rounded-lg">
					<h1 className="text-4xl my-6 font-semibold text-white">
						Sign up to start listening
					</h1>

					{/* for the grey line */}
					<div className="border-b border-gray-400 w-3/4 mx-auto"></div>

					<form className="text-center mx-auto w-1/2 mt-6">
						<div className="w-full text-left py-2">
							<label
								htmlFor="email"
								className="font-semibold mb-2 text-white block"
							>
								Email or username
							</label>
							<input
								name="email"
								placeholder="name@domain.com"
								type="text"
								id="email"
								className="block bg-black mx-auto w-full rounded-lg border-2 border-gray-600 text-white p-3 placeholder-gray-400 focus:ring-2 focus:ring-green-500 focus:outline-none p-3"
							/>
							<p className="text-green-600 underline cursor-pointer py-1">
								Use phone number instead.
							</p>
						</div>
						<div className="w-full text-left mt-2">
							<label
								htmlFor="password"
								className="font-semibold mb-2 text-white block"
							>
								Create a password
							</label>
							<input
								name="password"
								placeholder="Enter password"
								type="password"
								id="password"
								className="block bg-black mx-auto w-full rounded-lg border-2 border-gray-600 text-white p-3 placeholder-gray-400 focus:ring-2 focus:ring-green-500 focus:outline-none p-3"
							/>
							<p className="text-gray-400 text-sm py-1">
								The password must contain at least 8 characters. We recommend
								including at least 1 number and 1 special character.
							</p>
						</div>

						<div className="w-full text-left mt-2">
							<label
								htmlFor="password"
								className="font-semibold mb-2 text-white block"
							>
								Name
							</label>
							<p className="text-gray-400 text-sm ">
								This name will appear on your profile
							</p>
							<input
								name="password"
								placeholder="Enter password"
								type="password"
								id="password"
								className="block bg-black mx-auto w-full rounded-lg border-2 border-gray-600 text-white p-3 placeholder-gray-400 focus:ring-2 focus:ring-green-500 focus:outline-none p-3"
							/>
						</div>

						<div className="w-full text-left my-4">
							<label
								htmlFor="password"
								className="font-semibold text-white block"
							>
								Date of birth
							</label>

							<div className="flex space-x-1 text-black">
								<div>
									<label htmlFor="day">Day:</label>
									<input
										type="text"
										id="day"
										name="day"
										placeholder="DD"
										maxLength="2"
										className="block bg-black mx-auto w-full rounded-lg border-2 border-gray-600 text-white placeholder-gray-400 focus:ring-2 focus:ring-green-500 focus:outline-none p-3"
									/>
								</div>

								<div>
									<label htmlFor="month">Month:</label>
									<input
										type="text"
										id="month"
										name="month"
										placeholder="MM"
										maxLength="2"
										className="block bg-black mx-auto w-full rounded-lg border-2 border-gray-600 text-white placeholder-gray-400 focus:ring-2 focus:ring-green-500 focus:outline-none p-3"
									/>
								</div>

								<div>
									<label htmlFor="year">Year:</label>
									<input
										type="text"
										id="year"
										name="year"
										placeholder="YYYY"
										maxLength="4"
										className="block bg-black mx-auto w-full rounded-lg border-2 border-gray-600 text-white  placeholder-gray-400 focus:ring-2 focus:ring-green-500 focus:outline-none p-3"
									/>
								</div>
							</div>
						</div>

						<div className="w-full text-left mt-3">
							<label className="font-semibold text-white block">Gender</label>

							<p className="text-gray-400 text-sm ">
								We use your gender to help personalize our content
								recommendations and ads for you.
							</p>

							<div className="flex flex-wrap space-x-4">
								{options.map((option, index) => (
									<div
										key={option}
										className="flex items-center mb-4 mx-3 my-2 items-center justify-center"
									>
										<input
										type="radio"
										id="default-radio-1"
										name="default-radio"
										value={option}
										//checked={selectedOptions === option}
										onChange={() => handleCheckboxChange(option)}
										className={`w-4 h-4 text-green-600 dark:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-600 border-radius-50% ${selectedOptions === option ? 'ring-2 ring-green-500' : ''}`}
										/>

										<label
											htmlFor={`radio-${option}`}
											className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
										>
											{option}
										</label>
									</div>
								))}
							</div>
						</div>

						<div className="w-full text-left mt-3">
							<lebel className="font-semibold text-white block">
								Terms & Conditions
							</lebel>
							<div class="flex items-center mb-2 bg-zinc-800 rounded-md py-3 p-3 my-2">
								<input
									id="checkbox"
									type="checkbox"
									value=""
									className="checkbox "
								/>

								<label
									for="default-checkbox"
									class="ms-2   text-sm font-medium text-gray-900 dark:text-gray-300"
								>
									I would prefer not to receive marketing messages from Spotify
								</label>
							</div>

							<div class="flex items-center mb-4 bg-zinc-800 rounded-md py-3 p-3">
								<input
									id="checkbox"
									type="checkbox"
									value=""
									className="checkbox "
								/>

								<label
									for="default-checkbox"
									class="ms-2   text-sm font-medium text-gray-900 dark:text-gray-300"
								>
									Share my registration data with Spotify's content providers
									for marketing purposes.
								</label>
							</div>

							<p className="text-white text-sm text-bold ">
								By clicking on sign-up, you agree to Spotify's{" "}
								<Link
									to={"/terms&conditioin"}
									className="text-green-600 hover:text-green-500 underline"
								>
									Terms and Conditions of Use.
								</Link>
							</p>

							<p className="text-white text-sm text-bold my-2 ">
								To learn more about how Spotify collects, uses, shares and
								protects your personal data, please see{" "}
								<Link
									to={"/terms&conditioin"}
									className="text-green-600 hover:text-green-500 underline"
								>
									Spotify's Privacy Policy.
								</Link>
							</p>
						</div>

						<button
							type="submit"
							className="block w-3/5 mx-auto mt-4 text-white bg-green-500 rounded-full py-3 hover:bg-green-600 hover:scale-105 transform duration-200 font-semibold"
						>
							Sign up
						</button>
					</form>

					<div className="border-b border-gray-400 w-3/4 my-4 mx-auto"></div>
				</div>

				<div>
					<p className="mx-1 text-xs text-gray-400 text-center">
						This site is protected by reCAPTCHA and the Google Privacy Policy
						and Terms of Service apply.
					</p>
				</div>
			</div>
		</>
	);
};

export default signup;
