import React from "react";

function Header(props) {
  return (
    <div className="big-hero centerx">
      <div className="flex-container md-flex-column responsive-text-center">
        <div className="text md-order-2">
          <h1 className="putih text-bold">Halo, Saya <span className="oren">{props.name}</span></h1>
          <p>Salam kenal, saya hanyalah anak laki-laki yang lahir di generasi akhir 90an yang pernah berpikir bahwa dunia itu sederharna, dan ternyata itu lebih sederhana daripada yang dipikirkan. </p>
          <a href={props.urlButton}><button className="btn">Contact Me</button></a>
        </div>
        <div className="avatar lh-0 border-radius oren">
          <img className="border-radius" src={props.image} alt="Avatar"/>
        </div>
      </div>
    </div>
  )
}

export default Header;
