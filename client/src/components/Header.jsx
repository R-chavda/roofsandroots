import { useState } from "react";
import "./Header.css";
import { BiMenuAltRight } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
import { getMenuStyles } from "../utils/common.js";
import OutsideClickHandler from "react-outside-click-handler";
import { Link, NavLink } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import ProfileMenu from "./ProfileMenu.jsx";
import AddPropertyModal from "./AddPropertyModal";
import useAuthCheck from "../hooks/useAuthCheck.jsx";

const Header = () => {
  const [menuOpened, setMenuOpened] = useState(false);
  const [modalOpened, setModalOpened] = useState(false);
  const { loginWithRedirect, isAuthenticated, user, logout } = useAuth0();
  const { validateLogin } = useAuthCheck();

  const handleAddPropertyClick = () => {
    if (validateLogin()) {
      setModalOpened(true);
    }
  };

  const toggleMenu = () => {
    setMenuOpened((prev) => !prev);
  };

  return (
    <section className="h-wrapper">
      <div className="flexCenter innerWidth paddings h-container">
        {/* logo */}
        <Link to="/aboutus">
          <img src="/whitelogo.png" alt="logo" width={110} />
        </Link>

        {/* menu */}
        <OutsideClickHandler
          onOutsideClick={() => {
            setMenuOpened(false);
          }}
        >
          <>
            {/* Mobile overlay */}
            {menuOpened && <div className="mobile-menu-overlay" />}

            <div
              className={`flexCenter h-menu ${
                menuOpened ? "menu-open" : "menu-closed"
              }`}
              style={getMenuStyles(menuOpened)}
            >
              {/* Close icon at top right of menu */}
              {menuOpened && (
                <AiOutlineClose
                  size={24}
                  style={{
                    position: "absolute",
                    top: 16,
                    right: 16,
                    cursor: "pointer",
                    zIndex: 100,
                  }}
                  onClick={() => setMenuOpened(false)}
                  aria-label="Close menu"
                />
              )}
              <NavLink to="/" onClick={() => setMenuOpened(false)}>
                Home
              </NavLink>
              <NavLink to="/properties" onClick={() => setMenuOpened(false)}>
                Properties
              </NavLink>
              <NavLink to="/contact" onClick={() => setMenuOpened(false)}>
                contact
              </NavLink>
              <div onClick={handleAddPropertyClick}>Add Property</div>
              <AddPropertyModal
                opened={modalOpened}
                setOpened={setModalOpened}
              />

              {/* login button */}
              {!isAuthenticated ? (
                <button className="button" onClick={loginWithRedirect}>
                  Login
                </button>
              ) : (
                <ProfileMenu user={user} logout={logout} />
              )}
            </div>
          </>
        </OutsideClickHandler>

        {/* for medium and small screens */}
        <div className="menu-icon" onClick={toggleMenu}>
          <BiMenuAltRight size={35} />
        </div>
      </div>
    </section>
  );
};

export default Header;
