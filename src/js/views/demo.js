import React, { useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import ContactCard from "../component/ContactCard"; // Importación correcta

import "../../styles/demo.css";

export const Demo = () => {
  const { store, actions } = useContext(Context);

  useEffect(() => {
    actions.getContactList();
  }, []); // Ejecutar solo una vez al montar el componente

  return (
    <div className="container">
      <div className="list-group">
        {Array.isArray(store.contactList) && store.contactList.length > 0 ? (
          store.contactList.map((contact) => (
            <ContactCard contact={contact} key={contact.id} />
          ))
        ) : (
          <div>No contacts available</div>
        )}
      </div>
      <section className="d-flex justify-content-between m-4">
        <Link to="/">
          <button className="btn btn-primary">Back home</button>
        </Link>
        <Link to="/addContact">
          <button className="btn btn-primary">Add new Contact</button>
        </Link>
      </section>
    </div>
  );
};
