import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";

export const AddContact = () => {
    const { actions } = useContext(Context);
    const navigate = useNavigate();

    const [newContact, setNewContact] = useState({
        name: "",
        email: "",
        phone: "",
        address: ""
    });

    const handleChange = (e) => {
        setNewContact({ ...newContact, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const config = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newContact)
        };
        try {
            const response = await fetch("https://playground.4geeks.com/contact/agendas/omar/contacts", config);
            if (!response.ok) {
                throw new Error("Failed to add contact");
            }
            // Aquí puedes realizar cualquier acción adicional después de agregar el contacto, como cargar la lista de contactos actualizada
            actions.loadContacts();
            navigate("/");
        } catch (error) {
            console.error("Error:", error);
        }
    };

    return (
        <div className="container">
            <div>
                <h1 className="text-center mt-5">Add a new contact</h1>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label>Name</label>
                        <input type="text" className="form-control" placeholder="Full Name" name="name" value={newContact.name} onChange={handleChange} />
                    </div>
                    <div className="form-group">
                        <label>Email</label>
                        <input type="email" className="form-control" placeholder="Enter email" name="email" value={newContact.email} onChange={handleChange} />
                    </div>
                    <div className="form-group">
                        <label>Phone</label>
                        <input type="phone" className="form-control" placeholder="Enter phone" name="phone" value={newContact.phone} onChange={handleChange} />
                    </div>
                    <div className="form-group">
                        <label>Address</label>
                        <input type="text" className="form-control" placeholder="Enter address" name="address" value={newContact.address} onChange={handleChange} />
                    </div>
                    <button className="btn btn-primary mt-4 w-100" type="submit">Save</button>
                </form>
            </div>
        </div>
    );
};
