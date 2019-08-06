import React,{Component} from 'react';
import './login.css';
import {connect} from 'react-redux';
import {login} from '../../actions';
class Login extends Component{

    constructor(props){
        super(props)
        this.state={
            email:'',
            password:''
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
            <div className='login-container'>
                <div className='login-wrapper'>
                    <div className='ui input login-item'>
                        <input placeholder='İsminiz' name='email' type='text' value={this.state.email} onChange={this.onChange}/>
                    </div>
    
                    <div className='ui input login-item'>
                        <input placeholder='Şifreniz' name='password' type='password' value={this.state.password} onChange={this.onChange}/>
                    </div>
    
                    <button className='ui primary button login-item' onClick={()=>{
                        const {email,password} = this.state;
                        this.props.login(email,password);
                    }}>Giriş Yap</button>
                </div>
            </div>
        )
    }
}

export default connect(null,{login})(Login);