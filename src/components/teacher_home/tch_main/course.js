import './course.css';
import clock from '../../../assets/clock.png';
import friends from '../../../assets/friends.png';
import teacher from '../../../assets/teacher.png';
import calendar from '../../../assets/calendar.png';
import course_img from '../../../assets/course_img.png'
import { BsThreeDotsVertical } from 'react-icons/bs'
import { MdEdit, MdDelete } from 'react-icons/md'
import { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import EditRoom from './edit_room/edit_room';
function Course(props) {

    // console.log(" recieve course: ", props.course)
    const [menuState, setMenuState] = useState(false);
    const room = props.room;
    const start = new Date(room.start);
    console.log("room time: ", room.start);
    const end = new Date(room.end);
    const startTime =  `${start.getHours()}:${start.getMinutes()}`;
    const endTime =  `${end.getHours()}:${end.getMinutes()}`;
    const date = `${start.getDate()}-${start.getMonth()}-${start.getFullYear()}`;
    const ref = useRef(null);
    
    useEffect(() => {
        // setTeacherName(room.ownerId.name);
        function handleClickOutside(event) {
            // console.log(ref.current);
            if (ref.current && !ref.current.contains(event.target)) {
                setMenuState((prev) => {
                    return !prev;
                });
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [ref]);

    const SubMenu = () => {
        return (
            <ul ref={ref} className="sub-menu">
                <li className="sub-menu-item sub-delete">Delete <MdDelete className="sub-icon" /> </li>
                <Link to={`/edit_room/${props.userId}`}>
                    <li className="sub-menu-item sub-edit">Edit <MdEdit className="sub-icon" /></li>

                </Link>
                {/* {isEditRoom && <EditRoom />} */}
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
                    <h4 className="mc-title">{room.name}</h4>
                    <p className="mc-room-id">RoomID: {room.id}</p>
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
                        <p className="ls-name">{props.teacher}</p>
                    </div>
                    <div className="col col-half ls-card course-time">
                        <img src={clock} className="ls-icon" />
                        <p className="ls-name">{startTime} - {endTime} AM</p>
                    </div>
                </div>
                <div className="card-row">
                    <div className="col col-half ls-card course-students">
                        <img src={friends} className="ls-icon" />
                        <p className="ls-name">30 Students</p>
                    </div>
                    <div className="col col-half ls-card course-date">
                        <img src={calendar} className="ls-icon" />
                        <p className="ls-name">{date}</p>
                    </div>
                </div>
                <Link to={`/upcoming_view/${room.id}`}>
                    <a className="btn-view" href="#">View</a>
                </Link>
            </div>

        </div>
    )
}
export default Course;