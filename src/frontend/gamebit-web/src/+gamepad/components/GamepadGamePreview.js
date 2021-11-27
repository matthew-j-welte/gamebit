import React from "react";
import "./GamepadGamePreview.scss";
import retroGamePreview from "../../assets/retro-game-preview.gif";
import purpleGamePreview from "../../assets/purple-game-preview.gif";

const imgMap = {
  "retro-game-preview.gif": retroGamePreview,
  "purple-game-preview.gif": purpleGamePreview,
  "space-game-preview.gif": retroGamePreview,
};

function GamepadGamePreview({ gameCard }) {
  const languagePills = gameCard?.programmingLanguages.map((language) => (
    <div key={language.languageId} className="LanguagePill">
      {language.name}
    </div>
  ));

  // TODO

  // Should move featured games into the same component as this
  // Here's the flow:
  //  - page loads and the first featured game is active  with all the game details and other featured games inside a contained component
  //  - when a user clicks a featured game the highlighted game is switched to that one and the game details change
  //  - when a user click a non featured game. it hides the featured games tab and shows the game title
  //  - possibly below that have a hr and then 3 buttons (something / Play / more details)
  //
  //

  return (
    <div className="pb-4">
      <div className="row">
        <div className="col-12 col-lg-3">
          <div className="d-flex">{languagePills}</div>
        </div>
        <div className="col-12 col-lg-6 text-center">
          <img
            className="GamePreview"
            src={imgMap[gameCard?.previewVideoUrl]}
            alt={"Game Preview..."}
          />
        </div>
        <div className="col-12 col-lg-3 text-center">
          In here it might make sense to do cols as well for each section so you
          can switch them to run horizontally instead of vertical
        </div>
      </div>
    </div>
  );
}

export default GamepadGamePreview;
