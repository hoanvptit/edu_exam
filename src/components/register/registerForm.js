import './form_register.css'
import Intro from '../intro/Intro';
import { Link } from 'react-router-dom';
import { useState } from 'react';
// import {validPassword} from '../regex';
export default function RegisterForm() {
    const initUser = {
        username: '',
        password: '',
        name: '',
    }
    const [user, setUser] = useState(initUser);
    // const isPassword = (pw) => {
    //    let len = pw.length;
    //    if(len < 8) alert("password must contain more 8 characters");
    //    return false;
    // }
    const handleChange= (e) => {
        let key = e.target.name;
        let value = e.target.value;

        
        setUser((prev) => {
            return {
                ...prev,
                [key]:value
            }
        });
    }
    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log(user);
        // let checkpwlen = isPassword(user.password);
        // console.log(checkpwlen);
        // let checkpw = validPassword.test(user.password);
        // console.log(checkpw);

        fetch('http://203.162.88.102:9999/v1/auth/register',{
            method:'POST',
            headers:{'Content-type':'application/json'},
            body:JSON.stringify(user)
        })
        .then(response => response.json()).then(res=>{
            console.log(res);
            alert("register successfully!")
        })
        .catch(err=>{
            console.log(err);
        })
    }
    return (
        <div className="form-app">
            <Intro />
            <div className="register-form">
                <form action="" method="POST" className="form" id="form-1" onSubmit={(e) => handleSubmit(e)}>
                    <p className="desc">Wellcome to EduExam</p>
                    <h3 className="heading">Register Account</h3>

                    <div className="form-group">
                        <label for="name" className="form-label">FullName</label>
                        <input
                            id="name"
                            name="name"
                            type="text"
                            className="form-control"
                            value={user.fullname}
                            onChange={(e) => handleChange(e)}
                        />
                    </div>

                    <div className="form-group">
                        <label for="username" className="form-label">Username</label>
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


                    {/* <div className="form-group">
                    <label for="password_confirmation" className="form-label">Nhập lại mật khẩu</label>
                    <input id="password_confirmation" name="password_confirmation" type="password" className="form-control" />
                </div> */}

                    <button className="form-submit" type="submit">Register</button>
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