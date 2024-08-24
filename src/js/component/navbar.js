import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import star from "../../img/starwarslogo.png"
import rigo from "../../img/rigo-baby.jpg"
import starwars from "../../img/STAR-WARS.jpg"

export const Navbar = () => {
	const { store, actions } = useContext(Context);
	useEffect(() => {

	}, [store.likeList])
	// https://upload.wikimedia.org/wikipedia/commons/5/5a/Star_Wars_Logo..png
	return (
		<nav className="navbar navbar-light mb-3 px-5" style={{ backgroundColor: '' }}>
			<Link to="/">
				<img style={{ width: "10vw", minWidth: "100px" }} src={starwars} className="rounded float-start ms-5 ps-5" alt="..." />
			</Link>
			<div className="ml-auto me-5 pe-5">
				<div className="dropdown">
					<button className="btn btn-primary dropdown-toggle" style={{ backgroundColor: '#1E1E1E', borderColor: '#FFCE30', color: '#FFCE30', width: '150px' }} type="button" data-bs-toggle="dropdown" aria-expanded="false">
						Favorites
					</button>
					<ul className="dropdown-menu" style={{ overflowY: 'auto', maxHeight: '150px', backgroundColor: '#ccc7cc', minWidth: '150px' }}>
						{store.likeList.map((e, index) =>
						(<li key={index}>
							<div className="container d-flex p-0 m-0 justify-content-between px-2 border-bottom  border-secondary align-items-center">
								<h5>{e.name}</h5>
								<i className="fa-regular fa-trash-can" onClick={(ele) => { ele.stopPropagation(); actions.filterLikeList(e.id, e.name) }}></i>
							</div>
						</li>)
						)}
					</ul>
				</div>
			</div>
		</nav>
	);
};
