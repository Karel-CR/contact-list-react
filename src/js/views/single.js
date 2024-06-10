import React, { useState, useEffect, useContext } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";
import ContactCard from "../component/ContactCard"; // Importación correcta

export const Single = () => {
  const { store, actions } = useContext(Context);
  const params = useParams();
  const [singleContact, setSingleContact] = useState({});
  const navigate = useNavigate();

  // Traer los datos del contacto individual
  const getIndividualContact = () => {
    if (params.theid) {
      fetch(`https://playground.4geeks.com/apis/fake/contact/${params.theid}`)
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          setSingleContact(data);
        })
        .catch((error) => console.log(error));
    } else {
      console.log("Invalid ID provided", params.theid);
    }
  };

  useEffect(() => {
    getIndividualContact();
  }, [params.theid]);

  return (
    <div className="container">
      {Object.keys(singleContact).length > 0 ? (
        <ContactCard contact={singleContact} />
      ) : (
        <div>Loading...</div>
      )}
      <div className="m-4 d-flex justify-content-around">
        <Link to="/">
          <button className="btn btn-primary">Home</button>
        </Link>
        <Link to="/demo">
          <button className="btn btn-primary">Contacts</button>
        </Link>
      </div>
    </div>
  );
};
