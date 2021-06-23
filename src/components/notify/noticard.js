import course_img from '../../assets/course_img.png'
import { Element } from 'react-scroll';
function NotiCard() {
    return (
        <Element
            className="noti-card"
        >
                <img className="noti-img" src={course_img} />
                <div className="noti-text">
                    <span className="noti-content">Kết quả môn toán của bạn đạt 15/20 điểm</span>
                    <span className="noti-time">vài giây trước</span>
                </div>
        </Element>
    )
}
export default NotiCard;