import React, { useEffect, useState } from "react";
import ContextService from "../../services/ContextService";
import "./Navbar.scss";
import { Link } from "react-router-dom";
import {
  GAMEPAD_ROUTE,
  HOME_ROUTE,
  LANDING_ROUTE,
  LEADERBOARDS_ROUTE,
} from "../../../common/constants/routes";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAddressCard,
  faBell,
  faChartBar,
  faChevronDown,
  faCogs,
  faEnvelope,
  faGamepad,
  faHome,
  faSignOutAlt,
  faUser,
  faUsersCog,
} from "@fortawesome/free-solid-svg-icons";

function Navbar() {
  const [loggedInUser, setLoggedInUser] = useState(null);
  const [dropdownVisible, setDropdownVisible] = useState(false);

  useEffect(() => {
    setLoggedInUser(ContextService.getLoggedInPlayer());
  }, []);

  return (
    <div>
      <div className="NavbarBackground">
        <div className="Navbar container-fluid">
          <div className="d-flex">
            <div className="NavSection LinkNavSection d-flex justify-content-start">
              <div className="NavItem">
                <Link to={LEADERBOARDS_ROUTE}>
                  <FontAwesomeIcon icon={faChartBar} />{" "}
                  <span className="pl-1">Leaderboards</span>
                </Link>
              </div>
              <div className="NavItem">
                <Link to={GAMEPAD_ROUTE}>
                  <FontAwesomeIcon icon={faGamepad} />{" "}
                  <span className="pl-1">Gamepad</span>
                </Link>
              </div>
              <div className="NavItem">
                <Link to={HOME_ROUTE}>
                  <FontAwesomeIcon icon={faHome} />{" "}
                  <span className="pl-1">Home</span>
                </Link>
              </div>
            </div>
            <div className="NavSection LogoNavSection text-center">
              <h3 className="Logo">
                <Link to={LANDING_ROUTE} />
                GAMEBIT
              </h3>
            </div>
            <div
              role="button"
              onClick={() => setDropdownVisible(!dropdownVisible)}
              className="NavSection ProfileNavSection d-flex justify-content-end"
            >
              <div className="NavItem ProfileNavItem">
                <span>
                  <FontAwesomeIcon icon={faEnvelope} />
                </span>
              </div>
              <div className="NavItem ProfileNavItem">
                <FontAwesomeIcon icon={faBell} />
              </div>
              <div className="NavItem PlayerNavItem d-flex pt-0">
                <span className="NavItemIcon px-1">
                  {loggedInUser?.username}
                </span>
                <span className="NavItemIcon px-1">
                  <FontAwesomeIcon icon={faChevronDown} />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className={
          dropdownVisible
            ? "PlayerNavDropdown PlayerNavDropdownActive"
            : "PlayerNavDropdown"
        }
      >
        <div className="DropdownNavItem">
          <Link to={HOME_ROUTE}>
            <FontAwesomeIcon icon={faUsersCog} />{" "}
            <span className="pl-1">Profile</span>
          </Link>
        </div>
        <div className="DropdownNavItem">
          <Link to={HOME_ROUTE}>
            <FontAwesomeIcon icon={faAddressCard} />{" "}
            <span className="pl-1">Player Card</span>
          </Link>
        </div>
        <div className="DropdownNavItem">
          <Link to={HOME_ROUTE}>
            <FontAwesomeIcon icon={faCogs} />{" "}
            <span className="pl-1">Settings</span>
          </Link>
        </div>
        <div className="DropdownNavItem">
          <Link to={HOME_ROUTE}>
            <FontAwesomeIcon icon={faSignOutAlt} />{" "}
            <span className="pl-1">Log Out</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
