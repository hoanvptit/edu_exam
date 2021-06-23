import icon from '../../../assets/google.png';
import { MdAccountCircle, MdSearch,MdNotificationsActive } from 'react-icons/md';
import './tch_header.css';
import Notification from '../../notify/notification';
import {useState} from 'react';
function TCH_Header() {
    const [numberOfNoti, setNumberOfNoti] = useState(2);
    const [isShowNoti, setIsShowNoti] = useState(false);
    const onClickNotify = () => {
        setIsShowNoti((prev) => {
            return !prev;
        })

        if(isShowNoti) setNumberOfNoti(0);
    }
    const NumOfNotification = () => {
        return (
            <span className="numOfNotify">{numberOfNoti}</span>
        )
    }
    return (
        <div className="tch_header">
            <div className="header_logo">
                <img className="logo_icon" src={icon} />
                <p className="logo_name">Smart Education</p>
            </div>
            <div className="header_form">
                <div className="input_class">
                    <MdSearch className="search-btn" />
                    <input className="input-txt" type="text" placeholder="Finding examination..." />
                </div>
            </div>
            <div className="header_user">
                <div className="notify" onClick={(e) => onClickNotify(e)}>
                    <MdNotificationsActive  className="notify_icon"/>
                    {!isShowNoti && numberOfNoti ? <NumOfNotification /> :<span></span> }
                    
                </div>
                {isShowNoti && <Notification/>}
                <p className="logo_name">Nguyễn Văn Hoà</p>
                {/* <img className="logo_icon" src={icon}/> */}
                <MdAccountCircle className="logo_icon" />
            </div>

        </div>

    )
}

export default TCH_Header;