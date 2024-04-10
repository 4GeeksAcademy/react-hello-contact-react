import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

export const Contacts = props => {
    const { actions, store } = useContext(Context);
    const navigate = useNavigate()
    useEffect(() => {
        actions.loadContacts();
    }, []);

    return (
        <div className="d-flex flex-column col-12">
            <div className="col-10 align-items">
               {store.contacts && typeof store.contacts === 'object' && Object.values(store.contacts).map((contact) => {
                    return (
                        <div key={contact.id} className="card text-center m-3 w-25 ">
                            <img src="https://e00-elmundo.uecdn.es/assets/multimedia/imagenes/2013/10/31/13832152151159.jpg" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">{contact.name}</h5>
                                <div className="card-text">{contact.email}</div>
                                <div className="card-text">{contact.phone}</div>
                                <div className="card-text">{contact.address}</div>
                                <div className="card-text">{contact.agenda_slug}</div>
                               <button className="btn " type="button"onClick={()=>{
                                actions.seeContact(contact)
                                navigate("/EditContact")
                               }}></button>
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
