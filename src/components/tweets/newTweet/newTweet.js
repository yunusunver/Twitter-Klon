import React,{Component} from 'react';
import './newTweet.css';
import {connect} from 'react-redux';
import {sendTweet, updateTweet, deleteTweet} from '../../../actions/tweetActions'

class NewTweet extends Component{

    constructor(props){
        super(props);
        const tweet=props.location.state ? props.location.state.tweet : null;
        this.state={
            tweet: tweet ? tweet.tweet:''
        }
        console.log(props);
        this.onChange=this.onChange.bind(this);
        this.renderButtons=this.renderButtons.bind(this);
    }

    onChange(event){
        this.setState({
            [event.target.name]:event.target.value
        })
    }

    renderButtons(){
        const tweet=this.props.location.state ? this.props.location.state.tweet : null;

        return tweet ? 
        (
            <div>
                 <button className='ui red basic button' onClick={()=>{
                console.log(this.state);
                this.props.deleteTweet(tweet.uid);
            }}>Sil</button>

                <button className='ui green basic button' onClick={()=>{
                console.log(this.state);
                this.props.updateTweet({uid:tweet.uid, email:tweet.email, tweet:this.state.tweet, date: tweet.date});
            }}>Güncelle</button>
            </div>
        ):(
            <button className='ui positive basic button' onClick={()=>{
                console.log(this.state);
                this.props.sendTweet(this.state);
            }}>Gönder</button>
        )
    }

    render(){
        return(
            <div className='new-tweet-container'>
                <div className='new-tweet-wrapper ui form'>
                    <div className='field'>
                        <textarea rows='3' placeholder='Tweet' value={this.state.tweet} onChange={this.onChange} name='tweet'></textarea>
                    </div>
                    {this.renderButtons()}
                </div>
                
            </div>
            
        )
    }
}

export default connect(null,{sendTweet, updateTweet, deleteTweet})(NewTweet);