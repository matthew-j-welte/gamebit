import React from "react";
import "./Homepage.scss";
import PlayerService from "../common/services/PlayerService";
import defaultProfile from "../assets/default-profile-img.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCoins,
  faLongArrowAltUp,
  faChevronLeft,
  faChevronRight,
  faTrophy,
  faPlus,
  faArrowCircleRight,
} from "@fortawesome/free-solid-svg-icons";
import GameCard from "../common/components/gameCard/GameCard";
import NotificationsCarousel from "./components/NotificationsCarousel";

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

    const topGameCards = this.state.profile.topGames?.map((x, index) => (
      <div key={index + "-game-card"}>
        <GameCard
          gameCard={{
            name: x.gameName,
            ...x,
          }}
          index={index}
        />
      </div>
    ));

    const jumbotronSection = (
      <div className="ProfileJumbotron container-fluid p-4 pt-3">
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
        <div className="JumbotronSubheaderContainer text-center pt-1">
          <div className="d-flex justify-content-between">
            <div>
              <h6>GLOBAL RANK</h6>
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
    );

    const notificationSection = (
      <div className="NotificationsSection pt-4">
        <NotificationsCarousel />
        <div className="text-center d-flex align-items-center mt-4">
          <div className="HideNotificationsSepLeft flex-fill"></div>
          <button className="HideNotificationsButton">
            Hide Notifications
          </button>
          <div className="HideNotificationsSepRight flex-fill"></div>
        </div>
      </div>
    );

    const topGameSection = (
      <div className="TopGamesSection pt-4 mt-5">
        <h2>Continue Playing</h2>
        <div className="d-flex justify-content-between pt-2">
          {topGameCards}
        </div>
      </div>
    );

    const leaderboardSection = (
      <div className="LeaderboardSection pt-5">
        <h2>Leaderboard</h2>
      </div>
    );

    return (
      <div>
        <div className="ProfileJumbotronBackground">{jumbotronSection}</div>
        <div className="container pt-4">
          {notificationSection}
          {topGameSection}
          {leaderboardSection}
        </div>
      </div>
    );
  }
}

export default PlayerProfile;
