import '../tch_main.css';
import Course from '../course';
import { useState, useEffect } from 'react';
import axios from 'axios';
function TCH_Upcoming({ match }) {
    let userId = match.params.userId;
    const [teacherName, setTeacherName] = useState("");
    const listCourse = [
        {
            id: "XS111",
            name: "Xác suất thông kê",
            teacher: "N.V.An",
            start: "7:30",
            end: "9:30",
            quantity: 30,
            date: "28-06-2021"
        },
        {
            id: "GT112",
            name: "Giải tích 1",
            teacher: "N.V.Hùng",
            start: "7:30",
            end: "9:30",
            quantity: 30,
            date: "28-06-2021"
        },
        {
            id: "XS111",
            name: "Tin học 1",
            teacher: "N.V.Bình",
            start: "7:30",
            end: "9:30",
            quantity: 30,
            date: "28-06-2021"
        },
        {
            id: "XS112",
            name: "Xác suất thông kê",
            teacher: "N.V.Anh",
            start: "7:30",
            end: "9:30",
            quantity: 30,
            date: "28-06-2021"
        }
    ]
    let url = `http://203.162.88.102:9999/v1/users/${userId}/rooms?populate=ownerId`;
    const [listRoom, setListRoom] = useState(listCourse);
    useEffect(() => {
        fetchRoom();
    }, [])

    const fetchRoom = async () => {
        const data = await axios(url);
        const result = data.data.results;
        if(result.length > 0){
            setListRoom(data.data.results);
            setTeacherName(data.data.results[0].ownerId.name);
        }
       
    }
    const CourseLine = () => {
        return (
            <>
                <div className="course_line">
                    <Course room={listRoom[0]} teacher={teacherName} userId={userId}/>
                    <Course room={listRoom[1]} teacher={teacherName} userId={userId}/>
                </div>
                <div className="course_line">
                    <Course room={listRoom[2]} teacher={teacherName} userId={userId}/>
                    <Course room={listRoom[3]} teacher={teacherName} userId={userId}/>
                </div>
            </>
        )
    }
    return (
        <div className="tch_main">
            <div className="course_state">
                <h3>Upcoming</h3>
                <span className="num-course">{listRoom.length}</span>
            </div>
            <div className="course_list">
                <CourseLine />
            </div>
            <div className="space"></div>
        </div>
    )
}
export default TCH_Upcoming