import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<Link to="/">
				<span className="navbar-brand mb-0 h1">Star Wars React/Flux</span>
			</Link>
			<div className="ml-auto">
				<Link to="/peoples">
					<button className="btn btn-outline-secondary mx-2">Characters</button>
				</Link>
				<Link to="/planets">
					<button className="btn btn-outline-secondary mx-2">Planets</button>
				</Link>
				<Link to="/vehicles">
					<button className="btn btn-outline-secondary mx-2">Vehicles</button>
				</Link>
			</div>
		</nav>
	);
};
