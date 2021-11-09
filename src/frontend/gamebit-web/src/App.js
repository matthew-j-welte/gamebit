import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.scss";
import Homepage from "./+home/Homepage";
import Gamepad from "./+gamepad/Gamepad";
import GameDetails from "./+game-details/GameDetails";
import LandingPage from "./+landing/LandingPage";
import LeaderboardsPage from "./+leaderboards/LeaderboardsPage";
import {
  HOME_ROUTE,
  GAMEPAD_ROUTE,
  GAME_DETAILS_ROUTE,
  LEADERBOARDS_ROUTE,
  LANDING_ROUTE,
} from "./common/constants/routes";
import Navbar from "./common/components/navbar/Navbar";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path={HOME_ROUTE} exact element={<Homepage />} />
        <Route path={GAMEPAD_ROUTE} exact element={<Gamepad />} />
        <Route path={GAME_DETAILS_ROUTE} exact element={<GameDetails />} />
        <Route path={LEADERBOARDS_ROUTE} exact element={<LeaderboardsPage />} />
        <Route path={LANDING_ROUTE} exact element={<LandingPage />} />
      </Routes>
    </div>
  );
}

export default App;
