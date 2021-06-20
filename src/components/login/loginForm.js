import '../../css_common/common-form.css'
import './form_login.css';
import icon_gg from '../../assets/google.png'
import Intro from '../intro/Intro';
import { Link } from 'react-router-dom';
export default function LoginForm() {
    return (
        <div className="form-app">
            <Intro />
            <div className=" common-form login-form">
                <form action="" method="" className="form" id="form-1">
                    <p className="desc">Wellcome to EduExam</p>
                    <h3 className="heading">Login to your account</h3>

                    <div className="form-group">
                        <label for="user-name" className="form-label">Username or Email</label>
                        <input id="user-name" name="fullname" type="text" className="form-control" />
                    </div>

                    <div className="form-group">
                        <label for="password" className="form-label">Password</label>
                        <input id="password" name="password" type="password" className="form-control" />
                    </div>
                    <div className="remember-forgot">
                        <div className="remember-me" >
                            <label for="checkid" className='form-label'>
                                <input id="checkid" type="checkbox" value="test" />
                            Remember me!
                         </label>
                        </div>
                        <a href="#" className="forgot-pw"> Forgot password?</a>
                    </div>

                    <button className="form-submit">Login</button>
                    <button className="form-submit form-sign-google">
                        <img src={icon_gg} />
                    Sign-in with Google
                    </button>
                    <p>Don't you have account?
                        <Link to='/register'>
                            <a href="#">Join now</a>
                        </Link>
                    </p>

                </form>
            </div>
        </div>

    )
}