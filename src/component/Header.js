import React from "react";

function Header(props) {
  return (
    <div className="big-hero centerx">
      <div className="flex-container md-flex-column responsive-text-center">
        <div className="text md-order-2">
          <h1 className="putih text-bold">Halo, Saya <span className="oren">{props.name}</span></h1>
          <p>Salam kenal, saya senang berpikir, membaca, mengamati, dan menulis. Terkadang saya suka membual berbicara omong kosong dan bahkan menikmatinya... Hahaha. </p>
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
