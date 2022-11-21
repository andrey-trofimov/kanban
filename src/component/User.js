import React from "react";
import imgSrc from "../img/user-avatar.svg";

function User() {
  let [clicked, setClicked] = React.useState(false);
  const handlerClick = () => setClicked((clicked = !clicked));

  let style = (clicked && "_closed") || "";

  let UserMenu = (
    <div className={`header__user-menu${style} user-menu`}>
      <ul className="user-menu__ul">
        <li className="user-menu__li">
          <a href="/" className="user-menu__link">
            Profile
          </a>
        </li>
        <li className="user-menu__li">
          <a href="/" className="user-menu__link">
            Log Out
          </a>
        </li>
      </ul>
    </div>
  );

  return (
    <>
      <div className={`header__user${style}`} onClick={handlerClick}>
        <img src={imgSrc} alt="Avatar" />
        {UserMenu}
      </div>
    </>
  );
}

export default User;
