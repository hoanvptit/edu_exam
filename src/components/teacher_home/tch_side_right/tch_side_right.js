// import Calendar from "react-calendar"
// import 'react-calendar/dist/Calendar.css';
import './tch_side_right.css'
import Calendar from './calendar';
import On_Course from "./on_course";

function TCH_RightSide(){
    
    return (
        <div className="tch_right_side">
            <div className="calendar-container">
                <Calendar />
            </div>
            <div className="course_on_going">
                <div className="today-time">
                    <h4>Today</h4><br/>
                    <p className="today">Tuesday, February 16 2021</p>
                </div>
                <On_Course />
            </div>
        </div>
    )
}
export default TCH_RightSide