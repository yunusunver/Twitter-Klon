import React,{Component} from 'react';
import {Router,Route,Switch} from 'react-router-dom';
import Menu from './menu/menu';
import Tweets from './tweets/tweets';
import MyTweets from './tweets/mytweets';
import Login from './login/login';
import firebase from 'firebase/app';
import history from '../history';
import {isLoggedIn} from '../actions';
import {connect} from 'react-redux';
import NewTweet from './tweets/newTweet/newTweet';

class App extends Component{

    componentWillMount(){
        var firebaseConfig = {
            apiKey: "AIzaSyDPBLIh5XA7IrFgZJA6hfQlS_SEqX4ZFuk",
            authDomain: "twitterklone-react.firebaseapp.com",
            databaseURL: "https://twitterklone-react.firebaseio.com",
            projectId: "twitterklone-react",
            storageBucket: "",
            messagingSenderId: "555990530182",
            appId: "1:555990530182:web:8cdca07008d44762"
          };
          // Initialize Firebase
          firebase.initializeApp(firebaseConfig);

          this.props.isLoggedIn();
    }

    render(){
        return (
            <Router history={history}>
                <div>
                 <Menu/>
                <Switch>
                     <Route path='/' component={Tweets} exact />
                     <Route path='/myTweets' component={MyTweets} />
                     <Route path='/newTweet' component={NewTweet}/>
                     <Route path='/login' component={Login}/>
                     <Route path='/tweets' component={Tweets}/>
                </Switch>
                </div>
          
            </Router>
         )
    }
}

export default connect(null,{isLoggedIn})(App);