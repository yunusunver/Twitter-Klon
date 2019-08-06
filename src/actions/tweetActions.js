import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';
import _ from 'lodash';

const SEND_TWEET = 'SEND_TWEET';
const REF_DATABASE = '/tweets';
export const FETCH_ALL_TWEETS='FETCH_ALL_TWEETS';

export const sendTweet =({tweet}) =>{
    
    return dispatch=>{
        const email = firebase.auth().currentUser.email;
        const date = new Date().toString();

        firebase.database().ref(REF_DATABASE)
            .push({email,tweet,date})
            .then(()=>{
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