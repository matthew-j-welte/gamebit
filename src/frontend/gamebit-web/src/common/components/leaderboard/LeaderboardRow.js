import React from "react";
import "./LeaderboardRow.scss";

// TODO: Eventually all this code should be going on in the background the whole time the user is logged in so all you have to do
// is pull the notifications from that common place

function LeaderboardRow({ ranking, isHeader, isLoggedInPlayerRow }) {
  return (
    <div
      className={
        "Row w-100 d-flex" +
        (isHeader ? " HeaderRow" : isLoggedInPlayerRow ? " PlayerRow" : "")
      }
    >
      <div className="RankRow">
        {isHeader ? <strong>Rank</strong> : ranking.rank}
      </div>
      <div className="UsernameRow">
        {isHeader ? <strong>Username</strong> : ranking.username}
      </div>
      <div className="LevelRow">
        {isHeader ? <strong>Level</strong> : ranking.level}
      </div>
      <div className="ExperienceRow">
        {isHeader ? <strong>Experience</strong> : ranking.experience}
      </div>
    </div>
  );
}

export default LeaderboardRow;
