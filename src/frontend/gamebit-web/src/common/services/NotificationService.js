import {
  faTrophy,
  faChartLine,
  faGlobe,
} from "@fortawesome/free-solid-svg-icons";

const NotificationService = {
  getNotifications: function () {
    return [
      {
        notificationId: "player-123abc",
        title: "Earned 10 Days Strong Trophy",
        details:
          "Earned from playing Space Game for 10 consecutive days without losing a life.",

        icon: faTrophy,
        moreDetailsLink: "/",
        type: "player",
      },
      {
        notificationId: "player-345cdf",
        title: "Earned Go to Sleep Trophy",
        details: "Earned from Leveling 10 levels in 24 hours.. yikes",
        icon: faTrophy,
        moreDetailsLink: "/",
        type: "player",
      },
      {
        notificationId: "player-564hds",
        title: "Ranked top 3 in Space Game",
        details: "Congratulations! You're ranked in the top 3 for Space Game!",
        icon: faChartLine,
        moreDetailsLink: "/<game-details-page>",
        type: "player",
      },
      {
        notificationId: "global-123abc",
        title: "ANNOUNCEMENT! Gamebit Version 2.0 is coming...",
        details:
          "January 1 2023, Gamebit Version 2.0 releases, read more here!",
        icon: faGlobe,
        moreDetailsLink: "/global-update/<some-id>",
        type: "global",
      },
    ];
  },
};

export default NotificationService;
