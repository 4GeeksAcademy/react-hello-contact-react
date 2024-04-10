import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";

export const EditContact = () => {
	   const { store, actions } = useContext(Context);
       const navigate = useNavigate()
       const contactId = useParams().id
       const[contact, setContact] = useState(store.contact) 
       const handlechange = (event) => {
        setContact({...contact,[event.target.name]:event.target.value})}
        console.log(contact);
       const handlesubmit= (e) =>{
        e.preventDefault()
        const config = {
            method:"PUT",
            body:JSON.stringify(contact),
            headers:{
                "Content-Type":"application/json"
            }
        }
        fetch(`https://playground.4geeks.com/contact/agendas/omar/contacts/${contact.id}`,config)
        .then ((response)=> response.json() )
        .then ((data)=> {
            actions.loadContacts()
            navigate("/")

        })
        .catch((error)=>console.log(error))

       } 

    return( 
          
        <div className="container">
        <div>
            <h1 className="text-center mt-5">Edit a contact</h1> 
            <form onSubmit={handlesubmit}>
                <div className="form-group">Name
                    <input type="text" className="form-control" placeholder="Full Name" value={contact.name} name="name" onChange={(e)=>{handlechange(e)}} />
                </div>
                <div className="form-group">Email
                    <input type="email" className="form-control" placeholder="Enter email" value={contact.email} name="email" onChange={(e)=>{handlechange(e)}} />
                </div>
                <div className="form-group">Phone
                    <input type="phone" className="form-control" placeholder="Enter phone" value={contact.phone} name="phone" onChange={(e)=>{handlechange(e)}} />
                </div>
                <div className="form-group">Address
                    <input type="text" className="form-control" placeholder="Enter address"value={contact.address} name="address" onChange={(e)=>{handlechange(e)}} />
                </div>
                <button type="submit" className=" d-flex btn btn-primary mt-4 m-3 w-50 ">save</button>
                <Link className=" text-center" to="/contacts">or get back to contacts</Link>
            </form>
        </div>
    </div> 
    )
}