import { BsThreeDotsVertical } from 'react-icons/bs'
import NotiCard from './noticard';
import './noti.css'
import { Element } from 'react-scroll';
import './scroll.css';

function Notification() {
    return (
        <div className="notify-container">
            <div className="noti-header">
                <h3>Thông báo</h3>
                <BsThreeDotsVertical className="noti-menu" />
            </div>
            <Element
                className="noti-body"
                style={{
                    position: "relative",
                    height: "100%",
                    width: "100%",
                    overflowY: "scroll",
                }}
            >
                <NotiCard />
                <NotiCard />
                <NotiCard />
                <NotiCard />
                <NotiCard />
                <NotiCard />
                <NotiCard />
                <NotiCard />
                <NotiCard />
                <NotiCard />

            </Element>
        </div>
    )
}
export default Notification;