import React, { useEffect, useState } from "react";
import ContextService from "../../services/ContextService";
import "./Navbar.scss";
import { Link } from "react-router-dom";
import { AppRoutes } from "../../../common/constants/routes";
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
                <Link to={AppRoutes.leaderboardsPage}>
                  <FontAwesomeIcon icon={faChartBar} />{" "}
                  <span className="pl-1">Leaderboards</span>
                </Link>
              </div>
              <div className="NavItem">
                <Link to={AppRoutes.gamepad}>
                  <FontAwesomeIcon icon={faGamepad} />{" "}
                  <span className="pl-1">Gamepad</span>
                </Link>
              </div>
              <div className="NavItem">
                <Link to={AppRoutes.home}>
                  <FontAwesomeIcon icon={faHome} />{" "}
                  <span className="pl-1">Home</span>
                </Link>
              </div>
            </div>
            <div className="NavSection LogoNavSection text-center">
              <h3 className="Logo">
                <Link to={AppRoutes.landingPage} />
                GAMEBIT
              </h3>
            </div>
            <div className="NavSection ProfileNavSection d-flex justify-content-end">
              <div className="NavItem ProfileNavItem">
                <span>
                  <FontAwesomeIcon icon={faEnvelope} />
                </span>
              </div>
              <div className="NavItem ProfileNavItem">
                <FontAwesomeIcon icon={faBell} />
              </div>
              <div
                role="button"
                onClick={() => setDropdownVisible(!dropdownVisible)}
                className="NavItem PlayerNavItem d-flex pt-0"
              >
                <span className="NavItemIcon px-1">
                  {loggedInUser?.username}
                </span>
                <span className="NavItemIcon px-1">
                  <FontAwesomeIcon icon={faChevronDown} />
                </span>
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
            <div className="DropdownNavItem mt-0">
              <Link to={AppRoutes.home}>
                <span className="pr-3">Profile</span>
                <FontAwesomeIcon icon={faUsersCog} />{" "}
              </Link>
            </div>
            <div className="DropdownNavItem">
              <Link to={AppRoutes.home}>
                <span className="pr-3">Player Card</span>
                <FontAwesomeIcon icon={faAddressCard} />{" "}
              </Link>
            </div>
            <div className="DropdownNavItem">
              <Link to={AppRoutes.settings}>
                <span className="pr-3">Settings</span>
                <FontAwesomeIcon icon={faCogs} />{" "}
              </Link>
            </div>
            <div className="DropdownNavItem">
              <Link to={AppRoutes.logOut}>
                <span className="pr-3">Log Out</span>
                <FontAwesomeIcon icon={faSignOutAlt} />{" "}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
