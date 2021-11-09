import React, { useEffect, useState } from "react";
import ContextService from "../../services/ContextService";
import "./Navbar.scss";
import { Link } from "react-router-dom";
import {
  GAMEPAD_ROUTE,
  LANDING_ROUTE,
  LEADERBOARDS_ROUTE,
} from "../../../common/constants/routes";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBell,
  faChartBar,
  faChevronDown,
  faEnvelope,
  faGamepad,
  faHome,
} from "@fortawesome/free-solid-svg-icons";

function Navbar() {
  const [loggedInUser, setLoggedInUser] = useState(null);

  useEffect(() => {
    setLoggedInUser(ContextService.getLoggedInPlayer());
  }, []);

  return (
    <div className="NavbarBackground">
      <div className="Navbar container-fluid">
        <div className="d-flex">
          <div className="NavSection LinkNavSection d-flex justify-content-start">
            <div>
              <Link to={LEADERBOARDS_ROUTE}>
                <FontAwesomeIcon icon={faChartBar} />{" "}
                <span className="pl-1">Leaderboards</span>
              </Link>
            </div>
            <div>
              <Link to={GAMEPAD_ROUTE}>
                <FontAwesomeIcon icon={faGamepad} />{" "}
                <span className="pl-1">Gamepad</span>
              </Link>
            </div>
            <div>
              <Link to={GAMEPAD_ROUTE}>
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
          <div className="NavSection ProfileNavSection d-flex justify-content-end">
            <div>
              <FontAwesomeIcon icon={faEnvelope} />
            </div>

            <div>
              <FontAwesomeIcon icon={faBell} />
            </div>
            <div className="d-flex pt-0">
              <div className="px-1">{loggedInUser?.username}</div>
              <div className="px-1">
                <FontAwesomeIcon icon={faChevronDown} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
