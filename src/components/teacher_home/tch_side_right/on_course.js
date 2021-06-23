import { GrUserManager } from 'react-icons/gr';
import { GiAlarmClock } from 'react-icons/gi';
import { BsPeople, BsCalendar } from 'react-icons/bs';
import clock from '../../../assets/clock.png';
import friends from '../../../assets/friends.png';
import teacher from '../../../assets/teacher.png';
import calendar from '../../../assets/calendar.png';
import './oncourse.css';
function On_Course() {
    return (
        <div className="On_course">
            <h4 className="on-course-title">Machine Learning</h4>
            <div className="card-row">
                <div className=" ls-card course-teacher">
                    <img src={teacher} className="ls-icon" />
                    <p className="ls-name"> 2 Teachers</p>
                </div>
                <div className="ls-card course-time">
                    <img src={clock} className="ls-icon" />
                    <p className="ls-name">10:30 - 11:30 AM</p>
                </div>
            </div>
            <div className="card-row">
                <div className="ls-card course-students">
                    <img src={friends} className="ls-icon" />
                    <p className="ls-name">30 Student</p>
                </div>
                <div className="ls-card course-date">
                    <img src={calendar} className="ls-icon" />
                    <p className="ls-name">16-02-2021</p>
                </div>
            </div>
            <button className="btn_join_class">Join</button>
        </div>
    )
}
export default On_Course;