// import '../../css_common/common-form.css'
import './form_login.css';
import icon_gg from '../../assets/google.png'
import Intro from '../intro/Intro';
import { Link } from 'react-router-dom';
import {useState} from 'react';
export default function LoginForm() {
    
    const handleSubmit = (e) => {
        e.preventDefault();
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
                        <label for="fullname" className="form-label">Username or Email</label>
                        <input id="fullname" name="fullname" type="text" className="form-control" />
                    </div>

                    <div className="form-group">
                        <label for="password" className="form-label">Password</label>
                        <input id="password" name="password" type="password" className="form-control" />
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
                    <Link to='/home'>
                        <button className="form-submit">Login</button>
                    </Link>
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