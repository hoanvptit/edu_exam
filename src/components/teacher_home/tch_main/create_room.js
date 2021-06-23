import './create_room.css';

import my_room from '../../../assets/my_room.png'
import accomplished from '../../../assets/accomplished.png'
import notify from '../../../assets/notify.png'
import tutorial from '../../../assets/tutorial.png'
import upcoming from '../../../assets/upcoming.png'
import { useState, useRef } from 'react';

function Create_Room() {
    const inputFileRef = useRef(null);
    const [duration, setDuration] = useState(60);
    const [date, setDate] = useState(new Date());
    const [time, setTime] = useState(new Date().toLocaleTimeString());

    let tmp_date = date.getDate() < 10 ? ("0" + date.getDate()).slice(-2) : date.getDate();
    let tmp_month = date.getMonth() < 10 ? ("0" + (date.getMonth() + 1)).slice(-2) : date.getMonth+1;
    let tmp_year = date.getFullYear();
    let _time = `${tmp_year}-${tmp_month}-${tmp_date}`;

    const handleClick = (e) => {
        inputFileRef.current.click(e);
    }
    const handleFileclick = (e) => {
        let value = e.target.value;
        console.log(e);
    }
    const onChangeDuration = ( e) => {
        let value = e.target.value;
        setDuration(value);
    }
    const onchangeDate = (e) => {
        let value = e.target.value;
        let tmp = value.split('-');
        let newDate = new Date();
        newDate.setDate(tmp[2]);
        newDate.setMonth(tmp[1]-1);
        newDate.setFullYear(tmp[0]);
        setDate(newDate);
    }
    const onChangeTime = (e) => {
        let value = e.target.value;
        console.log(value);
        setTime(value);
    }
        

    return (
        <div className="tch_main">
            <div className="create-room-body">
                <h3 className="title">Create Room</h3>
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
                    </div>
                    <div className="content-side">
                        <div className="date-picker">
                            <input type="date" className="datepk-select" value={_time} onChange={(e) => onchangeDate(e)}/>
                        </div>
                        <div className="time-picker">
                            <input className="timepk-select" type="time" id="appt" name="appt" value={time} onChange={(e) => onChangeTime(e)}/>
                        </div>
                        <div className="time-select">
                            <input className="time-range" type="range" min="0" max="120" step="1" value={duration} onChange={(e) => onChangeDuration(e)}/>
                            <span className="value-time-range">{duration} minutes</span>
                        </div>

                        <div className="exam-question">
                            <div className="exam-file">
                                <button className="btn-file btn-select-question" onClick={handleClick}>Choose a file</button>
                                <input type='file' id="getFile" style={{ display: 'none' }} ref={inputFileRef} />
                                <span className="fileName">File: No file</span>
                            </div>

                            <button className="btn-file btn-sample-question">Sample file</button>
                        </div>
                        <div className="list-student">
                            <div className="student-file">
                                <button className="btn-file btn-select-student" onClick={handleClick}>Choose a file</button>
                                <input type='file' id="getFile" style={{ display: 'none' }} ref={inputFileRef} onClick={(e) => handleFileclick(e)} />
                                <span className="fileName">File: No file</span>
                            </div>

                            <button className="btn-file btn-sample-student">Sample file</button>
                        </div>
                    </div>
                </div>
                <div className="space"></div>
                <div className="btn-group">
                    <button className="btn-create btn">Create</button>
                    <button className="btn-cancel btn">Cancel</button>
                </div>
                {/* <input type="file" onClick={}/> */}
            </div>
            <div className="space"></div>
        </div>
    )
}
export default Create_Room