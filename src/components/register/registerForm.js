import './form_register.css'
import Intro from '../intro/Intro';
import { Link } from 'react-router-dom';
import {useState} from 'react';

export default function RegisterForm() {
    const initUser = {
        fullname: '',
        username: '',
        password: ''
    }
    const [user, setUser] = useState(initUser);
    return (
        <div className="form-app">
            <Intro />
            <div className="register-form">
                <form action="" method="POST" className="form" id="form-1">
                    <p className="desc">Wellcome to EduExam</p>
                    <h3 className="heading">Register Account</h3>

                    <div className="form-group">
                        <label for="fullname" className="form-label">FullName</label>
                        <input id="fullname" name="fullname" type="text" className="form-control" />
                    </div>

                    <div className="form-group">
                        <label for="user-name" className="form-label">Username</label>
                        <input id="fullname" name="fullname" type="text" className="form-control" />
                    </div>


                    <div className="form-group">
                        <label for="password" className="form-label">Password</label>
                        <input id="password" name="password" type="password" className="form-control" />
                    </div>


                    {/* <div className="form-group">
                    <label for="password_confirmation" className="form-label">Nhập lại mật khẩu</label>
                    <input id="password_confirmation" name="password_confirmation" type="password" className="form-control" />
                </div> */}

                    <button className="form-submit">Register</button>
                    <p className="register-to-login">Already have account?
                        <Link to='/'>
                            <a href="#"> Login!</a>
                        </Link>

                    </p>
                </form>

            </div>
        </div>
    )
}