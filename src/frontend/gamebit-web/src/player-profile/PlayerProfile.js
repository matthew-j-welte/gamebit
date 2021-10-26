import React from "react";
import "./PlayerProfile.scss";
import PlayerService from "../common/services/PlayerService";
import defaultProfile from "../assets/default-profile-img.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoins, faLongArrowAltUp } from "@fortawesome/free-solid-svg-icons";

class PlayerProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      profile: {},
    };
  }

  componentDidMount() {
    // TODO: Make this async
    const profile = PlayerService.getPlayerProfile();

    this.setState({
      ...this.state,
      profile,
    });
  }

  render() {
    const profile = this.state.profile;

    return (
      <div>
        <div className="container-fluid p-4 pt-3">
          <div className="d-flex align-items-center">
            <img
              className="ProfileImage"
              src={defaultProfile}
              alt={defaultProfile}
            />
            <div className="pl-5">
              <h1>{profile.username}</h1>
            </div>
          </div>
          <hr className="DarkHR" />
          <div className="container text-center pt-1">
            <div className="d-flex justify-content-between">
              <div>
                <h6>RANK</h6>
                <h2>
                  <FontAwesomeIcon icon={faLongArrowAltUp} /> 189th
                </h2>
              </div>
              <h6>LEVEL</h6>
              <div>
                <h6>TOKENS</h6>
                <h2>
                  <FontAwesomeIcon icon={faCoins} /> <em>4,246</em>
                </h2>
              </div>
            </div>
          </div>
        </div>
        <div className="container"></div>
      </div>
    );
  }
}

export default PlayerProfile;
