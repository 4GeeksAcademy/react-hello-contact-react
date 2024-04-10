
import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const AddContact = () => {
	   const { store, actions } = useContext(Context);

	return (
		<div className="container">
			<div>
				<h1 className="text-center mt-5">Add a new contact</h1>
				<form>
					<div className="form-group">Name
						<input type="text" className="form-control" placeholder="Full Name" />
					</div>
					<div className="form-group">Email
						<input type="email" className="form-control" placeholder="Enter email" />
					</div>
					<div className="form-group">Phone
						<input type="phone" className="form-control" placeholder="Enter phone" />
					</div>
					<div className="form-group">Address
						<input type="text" className="form-control" placeholder="Enter address" />
					</div>
					<button type="button text-center" className=" d-flex btn btn-primary mt-4 m-3 w-50 ">save</button>
					<Link className=" text-center" to="/contacts">or get back to contacts</Link>
				</form>
			</div>
		</div>
	);
};