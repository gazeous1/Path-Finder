import React from "react";
import Icon1 from "../../images/card1.png";
import Icon2 from "../../images/card3.png";
import Icon3 from "../../images/card2.png";

import {
  ModesContainer,
  ModesCard,
  ModesWrapper,
  ModesH1,
  ModesH2,
  ModesIcon,
  ModesP,
} from "./ModeElements";
const Modes = () => {
  return (
    <>
      <ModesContainer id="modes">
        <ModesH1>Modes</ModesH1>
        <ModesWrapper>
          <ModesCard to="secondPage">
            <ModesIcon src={Icon1} />
            <ModesH2>Simple Mode</ModesH2>
            <ModesP>
              Create Walls between nodes and see how algorithm adpats
            </ModesP>
          </ModesCard>
          <ModesCard to="secondPage">
            <ModesIcon src={Icon2} />
            <ModesH2>Maze Mode</ModesH2>
            <ModesP>
              Generate random mazes between nodes and see how algorithm adpats
            </ModesP>
          </ModesCard>
          <ModesCard to="secondPage">
            <ModesIcon src={Icon3} />
            <ModesH2>Game Mode</ModesH2>
            <ModesP>
              Play as starting node and try to complete the maze before the time
              runs out
            </ModesP>
          </ModesCard>
        </ModesWrapper>
      </ModesContainer>
    </>
  );
};

export default Modes;
