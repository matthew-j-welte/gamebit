import React, { useEffect, useState } from "react";
import "./NotificationsCarousel.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
  faArrowCircleRight,
} from "@fortawesome/free-solid-svg-icons";
import NotificationService from "../../common/services/NotificationService";

// TODO: Eventually all this code should be going on in the background the whole time the user is logged in so all you have to do
// is pull the notifications from that common place

function NotificationsCarousel() {
  const [notifications, setNotifications] = useState([]);
  const [unseenCount, setUnseenCount] = useState(0);
  const [viewedNotificationIds, setViewedNotificationIds] = useState({});
  const [activeNotificationIndex, setActiveNotificationIndex] = useState(0);

  useEffect(() => {
    const newNotifications = NotificationService.getNotifications();
    const newNotificationsViewed = {};
    newNotifications.forEach((x) => {
      newNotificationsViewed[x.notificationId] = false;
    });
    newNotificationsViewed[newNotifications[0].notificationId] = true;
    setNotifications(newNotifications);
    setUnseenCount(newNotifications.length - 1);
    setViewedNotificationIds(newNotificationsViewed);
  }, []);

  // TODO: Implement this to continually check for notifs every minute
  // const onNotificationCheck = () => {
  //   let newViewedNotificationIds = {};

  //   for (const notification of NotificationService.getNotifications()) {
  //     if (viewedNotificationIds[notification.notificationId]) {
  //       continue;
  //     }
  //     newViewedNotificationIds[notification.notificationId] = false;
  //   }
  //   newViewedNotificationIds = {
  //     ...viewedNotificationIds,
  //     ...newViewedNotificationIds,
  //   };
  //   setViewedNotificationIds(newViewedNotificationIds);
  //   setUnseenCount(
  //     Object.values(newViewedNotificationIds).filter((x) => x === false).length
  //   );
  // };

  const onArrowClick = (increment) => {
    let newIndex = activeNotificationIndex + increment;
    if (newIndex >= notifications.length) {
      newIndex = 0;
    } else if (newIndex < 0) {
      newIndex = notifications.length - 1;
    }
    setActiveNotificationIndex(newIndex);
    const newNotification = notifications[newIndex];
    const newViewedNotificationIds = viewedNotificationIds;
    newViewedNotificationIds[newNotification.notificationId] = true;
    setViewedNotificationIds(newViewedNotificationIds);
    setUnseenCount(
      Object.values(newViewedNotificationIds).filter((x) => x === false).length
    );
  };

  const notificationCards = notifications.map((notification) => (
    <div className="NotificationsTextArea">
      <h2 className="NotificationTypeIcon">
        <FontAwesomeIcon icon={notification.icon} />
      </h2>
      <div className="NotificationCountIcon">
        <h4>{unseenCount}</h4>
      </div>
      <div className="NotificationContent">
        <h5 className="my-1">{notification.title}</h5>
        <hr className="LightGradientHR"></hr>
        <p>
          <small>
            {notification.details}
            <a className="MoreDetailsLink" href={notification.moreDetailsLink}>
              {" "}
              More Details <FontAwesomeIcon icon={faArrowCircleRight} />
            </a>
          </small>
        </p>
      </div>
    </div>
  ));

  return (
    <div className="NotificationCarousel d-flex justify-content-between align-items-center">
      <h2 role={"button"} onClick={() => onArrowClick(-1)}>
        <FontAwesomeIcon icon={faChevronLeft} />
      </h2>
      {notificationCards[activeNotificationIndex]}
      <h2 role={"button"} onClick={() => onArrowClick(1)}>
        <FontAwesomeIcon icon={faChevronRight} />
      </h2>
    </div>
  );
}

export default NotificationsCarousel;
