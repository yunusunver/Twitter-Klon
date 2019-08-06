import React,{Component} from 'react';
import {connect} from 'react-redux';
import {fetchAllTweets} from '../../actions';


class Tweets extends Component {
    componentDidMount(){
        this.props.fetchAllTweets();
    }
   render(){
    return (
        <div>
            Tweets
        </div>
    )
   }
}

const mapStateToProps = (state) =>{
    console.log(state);
    return {
        
    }
}

export default connect(mapStateToProps,{fetchAllTweets})(Tweets);