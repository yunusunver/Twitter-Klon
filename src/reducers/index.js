import {combineReducers} from 'redux';
import AuthReducer from './authReducer';
import TweetListReducer from './tweetListReducer';

export default combineReducers({
    auth:AuthReducer,
    tweetList:TweetListReducer
});