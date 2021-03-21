import React,{useEffect} from 'react';
import {
    Col,
    Row
} from 'reactstrap';
import LoadingComponent from './LoadingComponent';

function PlayersNames (props){
    useEffect(async () => {
        props.fetchCurrentGamePlayersNames(props.game.gameId)
    },[]);

    if(props.activeGamePlayersNames.isLoading)
        return <LoadingComponent/>
    if(props.activeGamePlayersNames.errMess)
        return <h1>something wrong happened while trying to get players names</h1>
    return (
        <Row className='m-5'>
            {props.activeGamePlayersNames.names.map(playerName=>{
                return(
                    <Col xs='12' md='6'>
                        <small>{playerName.userName} </small>
                        {playerName.userName===props.game.creator? <i class="fa fa-star"></i>:null}
                    </Col>
                )
            })}
        </Row>
    )
}

export default PlayersNames;

