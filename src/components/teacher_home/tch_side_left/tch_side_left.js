// import { BsFileEarmarkText } from "react-icons/bs";
import { AiOutlineFileDone, AiOutlineAppstoreAdd } from 'react-icons/ai';
// import {SiGoogleclassroom} from 'react-icons/si';
// import {MdNotificationsActive} from 'react-icons/md';
// import {FaRocketchat} from 'react-icons/fa'

import my_room from '../../../assets/my_room.png'
import accomplished from '../../../assets/accomplished.png'
import notify from '../../../assets/notify.png'
import tutorial from '../../../assets/tutorial.png'
import upcoming from '../../../assets/upcoming.png'
import { Link } from 'react-router-dom';
import './tch_side_left.css';
function TCH_LeftSide(props) {
    let userId = props.userId;
    return (
        <div className="tch_left_side">
            <div className="side_bar_first">
                <Link to={`/create_room/${userId}`}>
                    <div className="ls-card create-room">
                        <AiOutlineAppstoreAdd className="ls-icon" />
                        <p className="ls-title">Create room</p>
                    </div>
                </Link>
                <Link to={`/upcoming/${userId}`}>
                    <div className="ls-card upcoming-course">
                        {/* <BsFileEarmarkText className="ls-icon" /> */}
                        <img src={upcoming} className="ls-icon" />
                        <p className="ls-title">Upcoming</p>
                    </div>
                </Link>
                <Link to={`/accomplished/${userId}`}>
                    <div className="ls-card done-course" >
                        {/* <AiOutlineFileDone className="ls-icon" /> */}

                        <img src={accomplished} className="ls-icon" />

                        <p className="ls-title">Accomplished</p>
                    </div>
                </Link>
                <Link to={`/my_room/${userId}`}>
                    <div className="ls-card my-room">
                        {/* <SiGoogleclassroom className="ls-icon"/> */}
                        <img src={my_room} className="ls-icon" />
                        <p className="ls-title">My room</p>
                    </div>
                </Link>

            </div>
            <div className="side_bar_second">
                <div className="ls-card notifycation">
                    {/* <MdNotificationsActive className="ls-icon"/> */}
                    <img src={notify} className="ls-icon" />

                    <p className="ls-title">Notification</p>
                </div>
                <div className="ls-card tutorial">
                    {/* <FaRocketchat className="ls-icon"/> */}
                    <img src={tutorial} className="ls-icon" />

                    <p className="ls-title">Tutorials</p>
                </div>
            </div>
            <div className="side_bar_third">

            </div>
        </div>
    )
}
export default TCH_LeftSide