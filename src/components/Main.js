import react,{Component} from 'react';

import {Switch,
    Redirect,
    Route,
    withRouter} from 'react-router-dom';


import {connect} from 'react-redux';

import { withAuth0 } from '@auth0/auth0-react';

import {startGame,
        executeCommand,
        editCommand,
        fetchGames,
        chooseGame,
        fetchPlayer,
        leaveGame,
        createGame,
    } from '../redux/actionCreators'

import Play from './Play';
import Header from './Header';
import Footer from './Footer';
import HowToPlay from './HowToPlay';
import Home from './Home';
import Contact from './Contact';
import Login from './Login';
import LoadingComponent from './LoadingComponent';

const mapStateToProps=state=>({
    response:state.response,
    commandText:state.commandText,
    games:state.games,
    activePlayer:state.activePlayer
});

const mapDispatchToProps=dispatch=>({
    startGame: (gameId,token)=>dispatch(startGame(gameId,token)),
    executeCommand: (query,token)=>dispatch(executeCommand(query,token)),
    editCommand: newCommandText=>dispatch(editCommand(newCommandText)),
    fetchGames: ()=>dispatch(fetchGames()),
    chooseGame: (token,gameId)=>dispatch(chooseGame(token,gameId)),
    fetchPlayer:token=>dispatch(fetchPlayer(token)),
    leaveGame: token=>dispatch(leaveGame(token)),
    createGame: (token,difficulty)=>dispatch(createGame(token,difficulty)),
});


        
class Main extends Component{
    render(){
        if(this.props.auth0.isLoading)
            return <LoadingComponent/>
        else if(this.props.auth0.error)
            return <h1>something is wrong with auth0</h1>
        return(
            <>
                <Header/>
                <Switch>
                    <Route path='/play'>
                        <Play 
                            createGame={this.props.createGame}
                            leaveGame={this.props.leaveGame}
                            fetchPlayer={this.props.fetchPlayer}
                            chooseGame={this.props.chooseGame}
                            games={this.props.games}
                            fetchGames={this.props.fetchGames}
                            executeCommand={this.props.executeCommand}
                            commandText={this.props.commandText}
                            editCommand={this.props.editCommand}
                            response={this.props.response}
                            startGame={this.props.startGame}
                            activePlayer={this.props.activePlayer}/>
                    </Route>
                    <Route path='/home'>
                        <Home/>
                    </Route>
                    <Route path='/how'>
                        <HowToPlay/>
                    </Route>
                    <Route path='/contact'>
                        <Contact/>
                    </Route>
                    <Route path='/login'>
                        <Login/>
                    </Route>
                    <Redirect to='/home'/>
                </Switch>
                <Footer/>
            </>
        )
    }
}

export default withAuth0(withRouter(connect(mapStateToProps,mapDispatchToProps)(Main)));
