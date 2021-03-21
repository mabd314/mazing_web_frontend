import react,{useEffect} from 'react';

import GamesContainer from './GamesContainer';
import GameArea from './GameArea';
import LoadingComponent from './LoadingComponent';

import { withAuthenticationRequired,useAuth0 } from '@auth0/auth0-react';


function Play(props){
    const {getAccessTokenSilently} = useAuth0();

    useEffect(async () => {
        props.fetchPlayer(await getAccessTokenSilently());
        props.fetchGames();
    },[]);

    if(props.games.errMess)
        return <h1>{props.games.errMess}</h1>

    else if(props.games.isLoading)
        return <LoadingComponent/>

    else if(props.activePlayer.player && props.activePlayer.player.gameId)
        return (
            <>
                <GameArea leaveGame={props.leaveGame} game={props.games.games.find(game=>(game.gameId===props.activePlayer.player.gameId))} activePlayer={props.activePlayer} executeCommand={props.executeCommand} commandText={props.commandText} editCommand={props.editCommand} response={props.response} startGame={props.startGame}/>
            </>
        )

    else if(props.activePlayer.player &&!props.activePlayer.gameId)
        return(
            <GamesContainer createGame={props.createGame} chooseGame={props.chooseGame} activePlayer={props.activePlayer} games={props.games}></GamesContainer>
        ) 
    else
        return <LoadingComponent/>
}

export default withAuthenticationRequired(Play);
  