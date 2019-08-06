import React,{Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {logout} from '../../actions';

class Menu extends Component {
   render(){
       const {isLoggedIn} =this.props.auth;
    return isLoggedIn === true ? (
        <div className="ui secondary  menu">
            <Link className="item" to='/tweets'>Tweetler</Link>
            <Link className="item" to='/myTweets'>Benim Tweetlerim</Link>
            <Link className="item" to='/newTweet'>Tweet Oluştur</Link>
            <div className="right menu">
                <Link className="item" to='/login' onClick={()=>{
                    this.props.logout() ;
                }}>Çıkış</Link>
            </div>
        </div>
    ) : (
        <div className="ui secondary  menu">
                <Link className="item" to='/tweets'>Tweetler</Link>
                <div className="right menu">
                    <Link className="item" to='/login'>Giriş Yap</Link>
                </div>
        </div>
    )
   }
}

const mapStateToProps=(state)=>{
    console.log(state);
    return {
        auth:state.auth
    }
}

export default connect(mapStateToProps,{logout})(Menu);