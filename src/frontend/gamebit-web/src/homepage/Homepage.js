import React from "react";
import "./Homepage.scss";
import PlayerService from "../common/services/PlayerService";
import defaultProfile from "../assets/default-profile-img.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCoins,
  faLongArrowAltUp,
  faArrowCircleRight,
} from "@fortawesome/free-solid-svg-icons";
import GameCard from "../common/components/gameCard/GameCard";
import NotificationsCarousel from "./components/NotificationsCarousel";
import LeaderboardPreview from "../common/components/leaderboard/LeaderboardPreview";

class PlayerProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      profile: {},
      showNotifications: true,
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
          <div className="ProfileImageOverlay text-center">
            <div className="py-2 mt-4">
              <strong>EDIT</strong>
            </div>
            <div className="py-2">
              <a href="/">Profile</a>
            </div>
            <div className="py-2">
              <a href="/">Player Card</a>
            </div>
          </div>
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
      <div
        className={
          this.state.showNotifications
            ? "NotificationsSection"
            : "NotificationsSection HideNotificationsSection"
        }
      >
        {this.state.showNotifications ? (
          <div className="pb-4">
            <NotificationsCarousel />
          </div>
        ) : (
          <></>
        )}
        <div className="text-center d-flex align-items-center">
          <div className="HideNotificationsSepLeft flex-fill"></div>
          <button
            className="HideNotificationsButton"
            onClick={() =>
              this.setState({
                ...this.state,
                showNotifications: !this.state.showNotifications,
              })
            }
          >
            <small>
              {this.state.showNotifications ? "Hide" : "Show"} Notifications
            </small>
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
        <div className="w-100 text-right mt-5">
          <h4>
            <a href="/">
              To GamePad <FontAwesomeIcon icon={faArrowCircleRight} />
            </a>
          </h4>
        </div>
      </div>
    );

    const leaderboardSection = (
      <div className="LeaderboardSection pt-5">
        <h2>Your Ranking</h2>
        <LeaderboardPreview rankings={this.state.profile.playerRankings} />
        <div className="w-100 text-right">
          <h4>
            <a href="/">
              To Leaderboards <FontAwesomeIcon icon={faArrowCircleRight} />
            </a>
          </h4>
        </div>
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
