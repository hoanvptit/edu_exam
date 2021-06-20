// import '../login/form_login.css'
import Intro from '../intro/Intro';
import { Link } from 'react-router-dom';

export default function RegisterForm() {
    return (
        <div className="form-app">
            <Intro />
            <div className="common-form register-form">
                <form action="" method="POST" className="form" id="form-1">
                    <p className="desc">Wellcome to EduExam</p>
                    <h3 className="heading">Đăng ký tài khoản</h3>

                    <div className="form-group">
                        <label for="email" className="form-label">Email</label>
                        <input id="email" name="email" type="text" className="form-control" />
                    </div>

                    <div className="form-group">
                        <label for="user-name" className="form-label">Tên đăng nhập</label>
                        <input id="fullname" name="fullname" type="text" className="form-control" />
                    </div>


                    <div className="form-group">
                        <label for="password" className="form-label">Mật Khẩu</label>
                        <input id="password" name="password" type="password" className="form-control" />
                    </div>


                    {/* <div className="form-group">
                    <label for="password_confirmation" className="form-label">Nhập lại mật khẩu</label>
                    <input id="password_confirmation" name="password_confirmation" type="password" className="form-control" />
                </div> */}

                    <button className="form-submit">Đăng ký</button>
                    <p>Đã có tài khoản?
                        <Link to='/'>
                            <a href="#">Đăng nhập ngay!</a>
                        </Link>

                    </p>
                </form>

            </div>
        </div>
    )
}