import React from "react";
import "./card.css";
import { FaPlay } from "react-icons/fa6";

const card = () => {
	return (
		<div className="card col-span-1  p-4 rounded-lg relative">
			<div className="relative">
				<img
					src="https://images.unsplash.com/photo-1611339555312-e607c8352fd7?auto=format&fit=crop&q=80&w=1000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c3BvdGlmeXxlbnwwfHwwfHx8MA%3D%3D"
					alt="Card Image"
				/>

				<div className="play_btn absolute bottom-0 right-0 flex items-center rounded-[50%] bg-green-500 justify-center p-3">
					<FaPlay className="text-black text-xl" />
				</div>
			</div>

			<h3 className="text-sm font-semibold my-2">peaceful pane</h3>

			<p className="text-xs text-gray-200 leading-4">
				gadfghjsghg gdsagfyugds ahjkfgadhsgfhusag
			</p>
		</div>
	);
};

export default card;
