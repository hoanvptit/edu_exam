import './create_room.css';

import my_room from '../../../../assets/my_room.png'
import accomplished from '../../../../assets/accomplished.png'
import notify from '../../../../assets/notify.png'
import tutorial from '../../../../assets/tutorial.png'
import upcoming from '../../../../assets/upcoming.png'
import React, { useState, useRef } from 'react';

function Create_Room() {
    // console.log("create room match: ", match.params.userId);
    // const inputFileRef = useRef(null);
    const inputFileRef1 = React.createRef();
    const inputFileRef2 = React.createRef();
    const inputFileRef3 = React.createRef();

    const [duration, setDuration] = useState(60);
    const [date, setDate] = useState(new Date());
    const [time, setTime] = useState(new Date().toLocaleTimeString());
    const [file1, setFile1] = useState({ name: "no file" });
    const [file2, setFile2] = useState({ name: "no file" });
    const [file3, setFile3] = useState({ name: "no file" });

    let tmp_date = date.getDate() < 10 ? ("0" + date.getDate()).slice(-2) : date.getDate();
    let tmp_month = date.getMonth() < 10 ? ("0" + (date.getMonth() + 1)).slice(-2) : date.getMonth + 1;
    let tmp_year = date.getFullYear();
    let _time = `${tmp_year}-${tmp_month}-${tmp_date}`;

    const handleClick1 = (e) => {
        inputFileRef1.current.click();
    }
    const handleClick2 = (e) => {
        inputFileRef2.current.click();
    }
    const handleClick3 = (e) => {
        inputFileRef3.current.click();
    }
    const onChangeFile1 = (e) => {
        let name = e.target.name;
        console.log("input name: ", name);
        let files = inputFileRef1.current.files[0];
        console.log(files);
        setFile1(files);

        // let reader = new FileReader();
        // reader.readAsDataURL(files[0]);
        //     reader.onload=(e)=>{
        //         console.log("file: ", e);
        //     }
    }
    const onChangeFile2 = (e) => {
        let name = e.target.name;
        console.log("input name: ", name);
        let files = inputFileRef2.current.files[0];
        console.log(files);
        setFile2(files);
    }
    const onChangeFile3 = (e) => {
        let name = e.target.name;
        console.log("input name: ", name);
        let files = inputFileRef3.current.files[0];
        console.log(files);
        setFile3(files);
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
        <div className="tch_main">
            <div className="create-room-body">
                <h3 className="title">Create Room</h3>
                <div className="content">
                    <div className="left-side">
                        <div className="ls-card subject">
                            <img src={upcoming} className="ls-icon" />
                            <p className="ls-title">Môn học</p>
                        </div>
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
                            <p className="ls-title">Result</p>
                        </div>
                        <div className="ls-card list-student">
                            <img src={my_room} className="ls-icon" />
                            <p className="ls-title">List students</p>
                        </div>
                    </div>
                    <div className="content-side">
                        <div className="subject_name">
                            <input className="input_subject" type="text" placeholder="Tên môn học" />
                        </div>
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
                            <button className="btn-select-file btn-select-question" onClick={handleClick1}>Choose a file</button>
                            <input type='file' name="file_question" style={{ display: 'none' }} ref={inputFileRef1} onChange={(e) => onChangeFile1(e)} />
                            <div className="btn-sample-file btn-sample-question"></div>
                            <div className="fileName"> <span >File:  {file1.name}</span> </div>
                        </div>
                        <div className="file-side list-answer">
                            <button className="btn-select-file btn-select-answer" onClick={handleClick2}>Choose a file</button>
                            <input type='file' name="file_answer" style={{ display: 'none' }} ref={inputFileRef2} onChange={(e) => onChangeFile2(e)} />
                            <button className="btn-sample-file btn-sample-answer">Sample file</button>
                            <div className="fileName"> <span >File:  {file2.name}</span> </div>

                        </div>
                        <div className="file-side list-student">
                            <button className="btn-select-file btn-select-student" onClick={handleClick3}>Choose a file</button>
                            <input type='file' name="file_students" style={{ display: 'none' }} ref={inputFileRef3} onChange={(e) => onChangeFile3(e)} />
                            <button className="btn-sample-file btn-sample-student">Sample file</button>
                            <div className="fileName"> <span >File: {file3.name}</span> </div>
                        </div>

                    </div>
                </div>
                <div className="btn-group">
                    <button className="btn-create btn">Create</button>
                    <button className="btn-cancel btn">Cancel</button>
                </div>
                {/* <input type="file" onChange={(e) => onChangeFile(e)}/> */}
            </div>
            <div className="space"></div>
        </div>
    )
}
export default Create_Room