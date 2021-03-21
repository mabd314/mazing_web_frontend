import * as actionTypes from './actionTypes';

const activeGamePlayersNames=(state={
    isLoading:true,
    errMess:null,
    names:[]
},action)=>{
    switch(action.type){
        case actionTypes.NAMES_FAILED:
            return {...state, isLoading:false,errMess:action.payload};
        case actionTypes.NAMES_LOADING:
            return {...state,isLoading:true,errMess:null};
        case actionTypes.PUT_NAMES:
            return {...state,isLoading:false,errMess:null,names:action.payload}
        default:
            return state;
    }
}

export default activeGamePlayersNames