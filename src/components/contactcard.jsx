import React from "react";

function ContactCard(props){
    console.log(props);
    return (
      <div className="contact-card">
        <img src={props.imgUrl} />
        <h3>{props.name}</h3>
        <p>phone: {props.phone}</p>
        <p>Email: {props.Email}</p>
      </div>
    );
}

export default ContactCard;