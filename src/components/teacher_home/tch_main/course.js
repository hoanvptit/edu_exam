import clock from '../../../assets/clock.png';
import friends from '../../../assets/friends.png';
import teacher from '../../../assets/teacher.png';
import calendar from '../../../assets/calendar.png';
import course_img from '../../../assets/course_img.png'
import { BsThreeDotsVertical } from 'react-icons/bs'
import { MdEdit, MdDelete } from 'react-icons/md'
import {useState} from 'react';
function Course() {
    const [menuState, setMenuState] = useState(false);
    const SubMenu = () => {
        return (
            <ul className="sub-menu">
                <li className="sub-menu-item sub-delete">Delete <MdDelete className="sub-icon" /> </li>
                <li className="sub-menu-item sub-edit">Edit <MdEdit className="sub-icon" /></li>
            </ul>
        )
    }
    const handleClickMenu = () => {
        setMenuState((prev) => {
            return !prev;
        });
    }
    return (
        <div className="main_course">
            <div className="mc_header">
                <img className="ch-img" src={course_img} />
                <div className="ch-text">
                    <h4 className="mc-title">Machine Learning</h4>
                    <p className="mc-room-id">RoomID: ML906</p>
                </div>
                <div className="ch-menu">
                    <BsThreeDotsVertical 
                        className="icon-menu"
                        onClick={(e) => handleClickMenu(e)}
                    />
                    {menuState && <SubMenu />}
                </div>
            </div>
            <div className="mc_content">
                <div className="card-row">
                    <div className="col col-half ls-card course-teacher">
                        <img src={teacher} className="ls-icon" />
                        <p className="ls-name"> N.T.T.Tâm</p>
                    </div>
                    <div className="col col-half ls-card course-time">
                        <img src={clock} className="ls-icon" />
                        <p className="ls-name">10:30 - 11:30 AM</p>
                    </div>
                </div>
                <div className="card-row">
                    <div className="col col-half ls-card course-students">
                        <img src={friends} className="ls-icon" />
                        <p className="ls-name">30 Student</p>
                    </div>
                    <div className="col col-half ls-card course-date">
                        <img src={calendar} className="ls-icon" />
                        <p className="ls-name">16-02-2021</p>
                    </div>
                </div>
                <a className="btn-view" href="#">View</a>
            </div>

        </div>
    )
}
export default Course;