import { useAuth0 } from '@auth0/auth0-react';
import react,{useEffect} from 'react';

import {
    Button,
} from 'reactstrap'


function Start(props){
    const {getAccessTokenSilently} =useAuth0();

    const startButtonClicked=async ()=>{
        const token=await getAccessTokenSilently();
        props.startGame(props.game.gameId,token);
    }

    return(
        <Button disabled={props.activePlayer.player.userName!==props.game.creator} outline color="warning" size="lg" block onClick={startButtonClicked}>Start Game</Button>
    )
}

export default Start;