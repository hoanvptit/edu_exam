import Course from './course';
import './tch_main.css';
function Accomplished() {
    const listCourse = [
        {
            id:"XS111",
            name: "Xác suất thông kê",
            teacher: "N.V.An",
            start:"7:30",
            end:"9:30",
            quantity:30,
            date:"28-06-2021"
        },
        {
            id:"GT112",
            name: "Giải tích 1",
            teacher: "N.V.Hùng",
            start:"7:30",
            end:"9:30",
            quantity:30,
            date:"28-06-2021"
        },
        {
            id:"XS111",
            name: "Tin học 1",
            teacher: "N.V.Bình",
            start:"7:30",
            end:"9:30",
            quantity:30,
            date:"28-06-2021"
        },
        {
            id:"XS112",
            name: "Xác suất thông kê",
            teacher: "N.V.Anh",
            start:"7:30",
            end:"9:30",
            quantity:30,
            date:"28-06-2021"
        }
    ]
    return (
        <div className="tch_main">
            <div className="course_state">
                <h3>Accomplished</h3>
                <span className="num-course">2</span>
            </div>
            <div className="course_list">
                <div className="course_line">
                    <Course course={listCourse[0]}/>
                    <Course course={listCourse[1]}/>
                </div>
                <div className="course_line">
                    <Course course={listCourse[2]}/>
                    <Course course={listCourse[3]}/>
                </div>
            </div>
            <div className="space"></div>
        </div>
    )
}
export default Accomplished