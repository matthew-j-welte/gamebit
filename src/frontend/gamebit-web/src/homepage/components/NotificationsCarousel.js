import React from "react";
import "./NotificationsCarousel.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
  faTrophy,
  faArrowCircleRight,
} from "@fortawesome/free-solid-svg-icons";

function NotificationsCarousel() {
  return (
    <div className="d-flex justify-content-between align-items-center">
      <h2>
        <FontAwesomeIcon icon={faChevronLeft} />
      </h2>
      <div className="NotificationsTextArea">
        <h2 className="NotificationTypeIcon">
          <FontAwesomeIcon icon={faTrophy} />
        </h2>
        <div className="NotificationCountIcon">
          <h4>6</h4>
        </div>
        <div className="NotificationContent">
          <h5 className="my-1">
            Earned <strong>10 Days Strong</strong> Token
          </h5>
          <hr className="LightGradientHR"></hr>
          <p>
            <small>
              Earned from playing Space Game for 10 consecutive days without
              losing a life.{" "}
              <a className="MoreDetailsLink" href="/">
                More Details <FontAwesomeIcon icon={faArrowCircleRight} />
              </a>
            </small>
          </p>
          <div className="d-flex justify-content-around">
            <div className="text-center">
              <p className="py-0 mb-1">
                <strong>XP Earned</strong>
              </p>
              <p className="py-0 mt-0 mb-1 XPEarnedText">+ 500</p>
            </div>
            <div className="text-center">
              <p className="py-0 mb-1">
                <strong>Rarity</strong>
              </p>
              <p
                className="py-0 mt-0 mb-1"
                style={{
                  color: "gold",
                }}
              >
                Very Rare
              </p>
            </div>
          </div>
        </div>
      </div>
      <h2>
        <FontAwesomeIcon icon={faChevronRight} />
      </h2>
    </div>
  );
}

export default NotificationsCarousel;
