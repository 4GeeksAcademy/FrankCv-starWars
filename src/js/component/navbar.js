import React from "react";
import { Link } from "react-router-dom";


export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light mb-3 px-5">
			<Link to="/">
				<img style={{width: "10vw",minWidth:"100px" }} src="https://static.wikia.nocookie.net/versus-compendium/images/9/9c/Sw.png/revision/latest?cb=20180928194005" className="rounded float-start ms-5 ps-5" alt="..." />
			</Link>
			<div className="ml-auto me-5 pe-5">
				<div className="dropdown">
					<button className="btn btn-primary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
						Dropdown button
					</button>
					<ul className="dropdown-menu">
						<li><a className="dropdown-item" href="#">Action</a></li>
						<li><a className="dropdown-item" href="#">Another action</a></li>
						<li><a className="dropdown-item" href="#">Something else here</a></li>
					</ul>
				</div>
			</div>
		</nav>
	);
};
