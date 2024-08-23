import React from "react";
import "../../styles/home.css";

import { ScrollCards } from "../component/ScrollCards.jsx";


export const Home = () => {
	
	return (
		<div className="text-center mt-5 m-auto" style={{ width: '70vw' }}>
			<ScrollCards/>
		</div>)
}
