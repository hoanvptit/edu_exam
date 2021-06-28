// import '../../css_common/common-form.css'
import './form_login.css';
import icon_gg from '../../assets/google.png'
import Intro from '../intro/Intro';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import auth from '../utility/auth';
export default function LoginForm(props) {
    console.log("props: ", props);
    const initUser = {
        username: '',
        password: ''
    }
    const [user, setUser] = useState(initUser);

    const handleChange = (e) => {
        let key = e.target.name;
        let value = e.target.value;
        setUser((prev) => {
            return {
                ...prev,
                [key]: value
            }
        });
    }
    
    const handleSubmit = async (e) => {
        e.preventDefault();
       await axios.post('http://203.162.88.102:9999/v1/auth/login', user)
            .then(response => {
                console.log(response);
                if (response.status === 200) {
                    handleAuth(response.data.user.id);
                }
            })
            .catch(error => {
                console.log(error);
                 alert("login failed. Please check username or password")
            })
    }
    const handleAuth = (userid) => {
        auth.login(() => {
            props.history.push(`/home/${userid}`);
        })
    }
    return (
        <div className="form-app">
            <div className="intro">
            </div>
            <div className="login-form">
                <form action="" method="" className="form" id="form-1" onSubmit={(e) => handleSubmit(e)}>
                    <div className="login-heading">
                        <p className="desc">Wellcome to EduExam</p>
                        <h3 className="heading">Login to your account</h3>
                    </div>
                    <div class="form-group">
                        <label for="username" className="form-label">Username or Email</label>
                        <input
                            id="username"
                            name="username"
                            type="text"
                            className="form-control"
                            value={user.username}
                            onChange={(e) => handleChange(e)}
                        />
                    </div>

                    <div className="form-group">
                        <label for="password" className="form-label">Password</label>
                        <input
                            id="password"
                            name="password"
                            type="password"
                            className="form-control"
                            value={user.password}
                            onChange={(e) => handleChange(e)}
                        />
                    </div>
                    <div className="remember-forgot">
                        <div className="remember-me">
                            <label for="checkid" className='form-label'>
                                <input id="checkid" type="checkbox" value="test" />
                                Remember me!
                            </label>
                        </div>

                        <a href="#" className="forgot-pw"> Forgot password?</a>
                    </div>
                    {/* <Link to='/home'> */}
                    <button className="form-submit" type='submit'>Login</button>
                    {/* </Link> */}
                    <button className="form-submit form-sign-google">
                        <img src={icon_gg} />
                        Sign-in with Google
                    </button>
                    <p className="login-to-register">Don't you have account?
                        <Link to='/register'>
                            <a href="../Room/index.html">Join now</a>
                        </Link>
                    </p>
                </form>
            </div>
        </div>

    )
}