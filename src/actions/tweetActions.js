import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';
import _ from 'lodash';
import history from '../history';

const SEND_TWEET = 'SEND_TWEET';
const UPDATE_TWEET = 'UPDATE_TWEET';
const DELETE_TWEET='DELETE_TWEET';
const REF_DATABASE = '/tweets';
export const FETCH_ALL_TWEETS='FETCH_ALL_TWEETS';

export const sendTweet =({tweet}) =>{
    
    return dispatch=>{
        const email = firebase.auth().currentUser.email;
        const date = new Date().toString();

        firebase.database().ref(REF_DATABASE)
            .push({email,tweet,date})
            .then(()=>{
                history.push('/');
                dispatch({type:SEND_TWEET});
            })
    }
}

export const fetchAllTweets = () =>{
    return dispatch =>{
        firebase.database().ref(REF_DATABASE)
            .on('value',snapshot=>{
                console.log(snapshot.val());
                const result = _.map(snapshot.val(),(val,uid)=>{
                    return {...val,uid};
                })
                dispatch({type:FETCH_ALL_TWEETS,payload:result})
            })
    }
}

export const updateTweet = ({tweet,uid,date,email}) =>{
    return dispatch=>{
        firebase.database().ref(REF_DATABASE+'/'+uid)
            .set({tweet,date,email})
            .then(()=>{
                history.push('/');
                dispatch({type: UPDATE_TWEET})
            })
    }
}

export const deleteTweet=(uid)=>{
    return dispatch =>{
        firebase.database().ref(REF_DATABASE+'/'+uid)
            .remove().then(()=>{
                history.push('/');
                dispatch({type: DELETE_TWEET});
            })
    }
}