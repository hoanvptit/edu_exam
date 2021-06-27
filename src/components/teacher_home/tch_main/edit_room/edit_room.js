import './edit_room.css';

import my_room from '../../../../assets/my_room.png'
import accomplished from '../../../../assets/accomplished.png'
import notify from '../../../../assets/notify.png'
import tutorial from '../../../../assets/tutorial.png'
import upcoming from '../../../../assets/upcoming.png'
import { useState, useRef } from 'react';

function EditRoom() {
    const inputFileRef = useRef(null);
    const [duration, setDuration] = useState(60);
    const [date, setDate] = useState(new Date());
    const [time, setTime] = useState(new Date().toLocaleTimeString());
    const roomID = "ML906";
    let tmp_date = date.getDate() < 10 ? ("0" + date.getDate()).slice(-2) : date.getDate();
    let tmp_month = date.getMonth() < 10 ? ("0" + (date.getMonth() + 1)).slice(-2) : date.getMonth + 1;
    let tmp_year = date.getFullYear();
    let _time = `${tmp_year}-${tmp_month}-${tmp_date}`;

    const handleClick = (e) => {
        inputFileRef.current.click(e);
    }
    const handleFileclick = (e) => {
        let value = e.target.value;
        console.log(e);
    }
    const onChangeDuration = (e) => {
        let value = e.target.value;
        setDuration(value);
    }
    const onchangeDate = (e) => {
        let value = e.target.value;
        let tmp = value.split('-');
        let newDate = new Date();
        newDate.setDate(tmp[2]);
        newDate.setMonth(tmp[1] - 1);
        newDate.setFullYear(tmp[0]);
        setDate(newDate);
    }
    const onChangeTime = (e) => {
        let value = e.target.value;
        console.log(value);
        setTime(value);
    }


    return (
        <div className="tch_main edit-room-main">
            <div className="edit-room-body">
                <h3 className="title">Edit Room</h3>
                <div className="course-header">
                    <h3 className="course-title">Machine Learing</h3>
                    <span className="course-room-id">RoomID: {roomID}</span>
                </div>
                <div className="content">
                    <div className="left-side">
                        <div className="ls-card date-picker">
                            <img src={upcoming} className="ls-icon" />
                            <p className="ls-title">Date</p>
                        </div>
                        <div className="ls-card time-picker">
                            <img src={upcoming} className="ls-icon" />
                            <p className="ls-title">Start Time</p>
                        </div>
                        <div className="ls-card time-select">

                            <img src={accomplished} className="ls-icon" />
                            <p className="ls-title">Time</p>
                        </div>
                        <div className="ls-card exam-question">
                            <img src={my_room} className="ls-icon" />

                            <p className="ls-title">Đề thi</p>
                        </div>
                        <div className="ls-card list-student">
                            <img src={my_room} className="ls-icon" />
                            <p className="ls-title">List students</p>
                        </div>
                        <div className="ls-card list-student">
                            <img src={my_room} className="ls-icon" />
                            <p className="ls-title">Result</p>
                        </div>
                    </div>
                    <div className="content-side">
                        <div className="date-picker">
                            <input type="date" className="datepk-select" value={_time} onChange={(e) => onchangeDate(e)} />
                        </div>
                        <div className="time-picker">
                            <input className="timepk-select" type="time" id="appt" name="appt" value={time} onChange={(e) => onChangeTime(e)} />
                        </div>
                        <div className="time-select">
                            <input className="time-range" type="range" min="0" max="120" step="1" value={duration} onChange={(e) => onChangeDuration(e)} />
                            <span className="value-time-range">{duration} minutes</span>
                        </div>

                        <div className="file-side exam-question">
                            <a className="file-name file-question" href="#">MachineLearing_dethi.pdf</a>
                            <button className="btn-file btn-choose-question">Choose file</button>
                        </div>
                        <div className="file-side list-student">
                            <a className="file-name file-answer" href="#">MachineLearing_dapdan.csv</a>
                            <button className="btn-file btn-choose-student">Choose file</button>
                        </div>
                        <div className="file-side list-answer">
                            <a className="file-name file-student" href="#">DSSV.csv</a>
                            <button className="btn-file btn-choose-answer">Choose file</button>
                        </div>
                    </div>
                </div>
                <div className="btn-group">
                    <button className="btn-create btn">Save</button>
                    <button className="btn-cancel btn">Cancel</button>
                </div>
                {/* <input type="file" onClick={(e)=> handleFileclick(e)}/> */}
            </div>
        </div>
    )
}
export default EditRoom