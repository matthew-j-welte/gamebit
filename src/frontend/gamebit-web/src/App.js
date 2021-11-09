import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.scss";
import Homepage from "./+home/Homepage";
import Gamepad from "./+gamepad/Gamepad";
import GameDetails from "./+game-details/GameDetails";
import LandingPage from "./+landing/LandingPage";
import LeaderboardsPage from "./+leaderboards/LeaderboardsPage";
import { AppRoutes } from "./common/constants/routes";
import Navbar from "./common/components/navbar/Navbar";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path={AppRoutes.home} exact element={<Homepage />} />
        <Route path={AppRoutes.gamepad} exact element={<Gamepad />} />
        <Route
          path={AppRoutes.gameDetailsPage}
          exact
          element={<GameDetails />}
        />
        <Route
          path={AppRoutes.leaderboardsPage}
          exact
          element={<LeaderboardsPage />}
        />
        <Route path={AppRoutes.landingPage} exact element={<LandingPage />} />
      </Routes>
    </div>
  );
}

export default App;
