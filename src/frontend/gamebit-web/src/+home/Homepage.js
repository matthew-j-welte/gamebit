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
import { Link } from "react-router-dom";
import { AppRoutes } from "../common/constants/routes";

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
          showPlayerStats={true}
        />
      </div>
    ));

    const jumbotronSection = (
      <div className="ProfileJumbotron container-fluid p-4 pt-3">
        <div className="d-flex align-items-center">
          <div className="ProfileImageContainer">
            <img
              className="ProfileImage"
              src={defaultProfile}
              alt={defaultProfile}
            />
            <div className="ProfileImageOverlay text-center">
              <div className="py-2 mt-2">
                <strong>EDIT</strong>
              </div>
              <div className="py-2">
                <a href="/">Profile</a>
              </div>
              <div className="py-2">
                <a href="/">Player Card</a>
              </div>
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
      <div className="TopGamesSection pt-2 pb-4 mt-5">
        <h2 className="AppSectionHeader">Continue Playing</h2>
        <div className="d-flex justify-content-between pt-2">
          {topGameCards}
        </div>
        <div className="w-100 text-right mt-4">
          <h5>
            <Link to={AppRoutes.gamepad}>
              To Game Pad <FontAwesomeIcon icon={faArrowCircleRight} />
            </Link>
          </h5>
        </div>
      </div>
    );

    const leaderboardSection = (
      <div className="mt-4">
        <h2 className="AppSectionHeader">Global Ranking</h2>
        <div className="LeaderboardSection mt-3">
          <LeaderboardPreview rankings={this.state.profile.playerRankings} />
        </div>
        <div className="w-100 text-right mt-3">
          <h5>
            <Link to={AppRoutes.leaderboardsPage}>
              To Leaderboards <FontAwesomeIcon icon={faArrowCircleRight} />
            </Link>
          </h5>
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
