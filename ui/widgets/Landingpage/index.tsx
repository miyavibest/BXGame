//importing relevant module
import React from "react";
import { Typography } from "../../atoms/Typography";
import useSound from 'use-sound';

// const enterGameSound = require('../../../public/assets/sound/enter_game.mp3');

// import stylings
import { LandingpageContainer, LandingpageComponent1, StartButton, LandingpageComponent2} from "./index.styled";

const Landingpage = ():JSX.Element => {
    const [play]:any= useSound('/assets/sound/enter_game.mp3');
    const setRedirect:()=> void =  () => {
        // play()
        setTimeout(() => {
            window.location.pathname = '/games'
        }, 1000)
        
    }
    return(
       <LandingpageContainer>
           
           
       </LandingpageContainer>
    )
}


export default Landingpage;