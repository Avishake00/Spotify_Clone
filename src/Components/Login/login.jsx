import React from "react";
import "./login.css";
import { Link } from "react-router-dom";

const Login = () => {
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
						Login to Spotify
					</h1>
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
								placeholder="Email or username"
								type="text"
								id="email"
								className="block bg-black mx-auto w-full rounded-lg border-2 border-gray-600 text-white p-3 placeholder-gray-400 focus:ring-2 focus:ring-green-500 focus:outline-none p-3"
							/>
						</div>
						<div className="w-full text-left py-2">
							<label
								htmlFor="password"
								className="font-semibold mb-2 text-white block"
							>
								Password
							</label>
							<input
								name="password"
								placeholder="Enter password"
								type="password"
								id="password"
								className="block bg-black mx-auto w-full rounded-lg border-2 border-gray-600 text-white p-3 placeholder-gray-400 focus:ring-2 focus:ring-green-500 focus:outline-none p-3"
							/>
						</div>

						<div className="form-check form-switch ">
							<input
								type="checkbox"
								id="rememberMe"
								className="form-check-input"
							/>
							<label
								htmlFor="rememberMe"
								className="form-check-label block text-left text-white"
							>
								Remember me
							</label>
						</div>

						<button
							type="submit"
							className="block w-3/5 mx-auto mt-4 text-white bg-green-500 rounded-full py-3 hover:bg-green-600 hover:scale-105 transform duration-200 font-semibold"
						>
							Login
						</button>
					</form>

					<Link
						to="/password/reset"
						className="hover:text-green-500 font-semibold text-center underline block mt-4"
					>
						Forgot Your Password?
					</Link>
					<div className="border-b border-gray-400 w-3/4 my-4 mx-auto"></div>

					<p className="text-center">
						Don't have an Account?
						<Link className=" hover:text-green-500 underline font-semibold  mx-2">
							Sign up for Spotify
						</Link>
					</p>
				</div>
			</div>
		</>
	);
};

export default Login;
