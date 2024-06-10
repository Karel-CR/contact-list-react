import React from "react";
import PropTypes from "prop-types";

export const ContactCard = ({ contact }) => {
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{contact.full_name}</h5>
        <p className="card-text">Phone: {contact.phone}</p>
        <p className="card-text">Email: {contact.email}</p>
        <p className="card-text">Address: {contact.address}</p>
      </div>
    </div>
  );
};

ContactCard.propTypes = {
  contact: PropTypes.shape({
    full_name: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    address: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
  }).isRequired,
};
