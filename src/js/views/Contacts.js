import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

export const Contacts = ({ onDelete }) => {
    const { actions, store } = useContext(Context);
    const navigate = useNavigate();
    useEffect(() => {
        actions.loadContacts();
    }, []);
    

    return (
        <div className="container">
            <div className="row row-cols-1 row-cols-md-2 m-4 row-cols-lg-3 mt-5">
                {store.contacts && typeof store.contacts === 'object' && Object.values(store.contacts).map((contact) => {
                    return (
                        <div key={contact.id} className="col mb-4">
                            <div className="card text-center shadow p-2 bg-body-tertiary rounded">
                                <img src="https://e00-elmundo.uecdn.es/assets/multimedia/imagenes/2013/10/31/13832152151159.jpg" className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">{contact.name}</h5>
                                    <div className="card-text">{contact.email}</div>
                                    <div className="card-text">{contact.phone}</div>
                                    <div className="card-text">{contact.address}</div>
                                    <div className="card-text">{contact.agenda_slug}</div>
                                    <button className="btn btn-primary mt-3" type="button" onClick={() => {
                                        actions.seeContact(contact);
                                        navigate("/EditContact");
                                    }}>Edit</button>
                                    <button className="btn btn-danger m-2 mt-4" type="button" onClick={() => onDelete(contact)}>Delete</button>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

Contacts.propTypes = {
    history: PropTypes.object,
    onDelete: PropTypes.func
};

Contacts.defaultProps = {
    onDelete: null
};
