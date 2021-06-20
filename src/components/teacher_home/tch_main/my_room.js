import Course from './course';
import './tch_main.css';
function My_Room() {
    return (
        <div className="tch_main">
            <div className="course_state">
                <h3>MyRoom</h3>
                <span className="num-course">2</span>
            </div>
            <div className="course_list">
                <div className="course_line">
                    <Course />
                    <Course />
                </div>
                <div className="course_line">
                    <Course />
                    <Course />
                </div>
            </div>
            <div className="space"></div>
        </div>
    )
}
export default My_Room