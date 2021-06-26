import './upcoming_detail.css';
import './table.css';
import clock from '../../../../assets/clock.png';
import friends from '../../../../assets/friends.png';
import teacher from '../../../../assets/teacher.png';
import calendar from '../../../../assets/calendar.png';
import { Table } from 'react-bootstrap';
function UpcomingDetail() {
    let roomID = "ML906";
    const titles = ["STT", "Họ tên", 'Lớp', "MSV", "Chọn"]
    const ObjectRow = (index) => {
        let tmp = index % 2;
        return (
            tmp === 1 ? (
                <tr className="tb-col" style={{ backgroundColor: "#F9E8F2" }}>
                    <td className="text-center" style={{ width: '1%' }}>{index}</td>
                    <td className="text-left" style={{ width: '4%' }}>Nguyễn Văn Anh Khang</td>
                    <td className="text-left" style={{ width: '2%' }}>D16CN01</td>
                    <td className="text-left" style={{ width: '2%' }}>B16DCCN001</td>
                    <td className="text-center" style={{ width: '1%' }}><a href="#">Xoá</a></td>
                </tr>
            ) : (
                <tr className="tb-col">
                    <td className="text-center" style={{ width: '1%' }}>{index}</td>
                    <td className="text-left" style={{ width: '4%' }}>Nguyễn Văn Anh Khang</td>
                    <td className="text-left" style={{ width: '2%' }}>D16CN01</td>
                    <td className="text-left" style={{ width: '2%' }}>B16DCCN001</td>
                    <td className="text-center" style={{ width: '1%' }}><a href="#">Xoá</a></td>
                </tr>
            )

        )
    }
    var rows = [];
    for (let i = 1; i <= 15; i++) {
        rows.push(ObjectRow(i));
    }

    return (
        <div className="tch_main upcoming_detail_main">
            <div className="course_state">
                <h3>Upcoming</h3>
                <span className="num-course">2</span>
            </div>
            <div className="course_detail">
                <div className="course-header">
                    <h3 className="course-title">Machine Learing</h3>
                    <span className="course-room-id">RoomID: {roomID}</span>
                </div>

                <div className="card-row">
                    <div className="ls-card flex_1 course-teacher">
                        <img src={teacher} className="ls-icon" />
                        <p className="ls-name"> N.T.T.Tâm</p>
                    </div>
                    <div className="ls-card flex_1 course-time">
                        <img src={clock} className="ls-icon" />
                        <p className="ls-name">10:30 - 11:30 AM</p>
                    </div>
                    <div className="ls-card flex_2 course-question">
                        <p className="ls-name" > Đề bài: </p>
                        <a href="#" className="ls-name">Machine_Learning_De.pdf</a>
                    </div>
                </div>

                <div className="card-row">
                    <div className="ls-card flex_1 course-students">
                        <img src={friends} className="ls-icon" />
                        <p className="ls-name">30 Student</p>
                    </div>
                    <div className="ls-card flex_1 course-date">
                        <img src={calendar} className="ls-icon" />
                        <p className="ls-name">16-02-2021</p>
                    </div>
                    <div className="ls-card flex_2 course-answer">
                        <p className="ls-name" > Đáp án: </p>
                        <a href="#" className="ls-name">Machine_Learning_De.pdf</a>
                    </div>
                </div>
            </div>
            <div className="list_student" >
                <div className="list-title">
                    <h3> Danh sách sinh viên</h3>
                    <button className="btn-export">Export file</button>
                </div>
                <div className="table-student">
                    <table >
                        <thead>
                            <tr>
                                {titles.map(title => (
                                    <th>{title}</th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {rows.map(row => {
                                return row;
                            })}
                        </tbody>

                    </table>
                </div>

            </div>
        </div>
    )
}
export default UpcomingDetail