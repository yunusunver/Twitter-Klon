import React,{Component} from 'react';
import './newTweet.css';
import {connect} from 'react-redux';
import {sendTweet} from '../../../actions/tweetActions'

class NewTweet extends Component{

    constructor(props){
        super(props);

        this.state={
            tweet:''
        }

        this.onChange=this.onChange.bind(this);
    }

    onChange(event){
        this.setState({
            [event.target.name]:event.target.value
        })
    }

    render(){
        return(
            <div className='new-tweet-container'>
                <div className='new-tweet-wrapper ui form'>
                    <div className='field'>
                        <textarea rows='3' placeholder='Tweet' value={this.state.tweet} onChange={this.onChange} name='tweet'></textarea>
                    </div>
                    <button className='ui positive basic button' onClick={()=>{
                        console.log(this.state);
                        this.props.sendTweet(this.state);
                    }}>Gönder</button>
                </div>
            </div>
        )
    }
}

export default connect(null,{sendTweet})(NewTweet);