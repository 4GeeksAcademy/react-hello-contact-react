import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-secondary mb-3">
			<Link to="/">
				<button className="navbar mb-0 h1">Contact list</button>
			</Link>
			<div className="ml-auto">
				<Link to="/AddContact">
					<button className="btn btn-primary m-3">Add contact</button>
				</Link>
				<Link to="/EditContact">
					<button className="btn btn-primary m-3">Edit</button>
				</Link>
			</div>
		</nav>
	);
};
