import clock from '../../../assets/clock.png';
import friends from '../../../assets/friends.png';
import teacher from '../../../assets/teacher.png';
import calendar from '../../../assets/calendar.png';
import course_img from '../../../assets/course_img.png'
import { BsThreeDotsVertical } from 'react-icons/bs'
import { MdEdit, MdDelete } from 'react-icons/md'
import { useEffect, useState, useRef } from 'react';
import {Link} from 'react-router-dom';
import EditRoom from './edit_room/edit_room';
function Course() {
    const [menuState, setMenuState] = useState(false);
    const ref = useRef(null);
    const [isEditRoom, setIsEditRoom] = useState(false);
    useEffect(() => {
        function handleClickOutside(event) {
            console.log(ref.current);
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
                <li className="sub-menu-item sub-edit" onClick={(e) => handleEditRoom(e)}>Edit <MdEdit className="sub-icon" /></li>
                {/* {isEditRoom && <EditRoom />} */}
            </ul>
        )
    }
    const handleClickMenu = () => {
        setMenuState((prev) => {
            return !prev;
        });
    }
    const handleEditRoom = () => {
        setIsEditRoom((prev) => {
            return !prev;
        })
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
                <Link to='/upcoming_view'>
                    <a className="btn-view" href="#">View</a>
                </Link>
            </div>

        </div>
    )
}
export default Course;