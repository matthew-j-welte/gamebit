import React, { useEffect, useState } from "react";
import ContextService from "../../services/ContextService";
import "./LeaderboardPreview.scss";
import LeaderboardRow from "./LeaderboardRow";

// TODO: Eventually all this code should be going on in the background the whole time the user is logged in so all you have to do
// is pull the notifications from that common place

function LeaderboardPreview({ rankings }) {
  const [loggedInUser, setLoggedInUser] = useState(null);

  useEffect(() => {
    setLoggedInUser(ContextService.getLoggedInPlayer());
  }, []);

  const headerRow = <LeaderboardRow isHeader={true} />;

  const rankingRows = rankings?.map((ranking) => (
    <LeaderboardRow
      ranking={ranking}
      isHeader={false}
      isLoggedInPlayerRow={loggedInUser.username === ranking.username}
    />
  ));

  return (
    <div className="p-4">
      {headerRow}
      {rankingRows}
    </div>
  );
}

export default LeaderboardPreview;
