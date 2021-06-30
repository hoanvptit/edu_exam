import './create_room.css';

import my_room from '../../../../assets/my_room.png'
import accomplished from '../../../../assets/accomplished.png'
import notify from '../../../../assets/notify.png'
import tutorial from '../../../../assets/tutorial.png'
import upcoming from '../../../../assets/upcoming.png'
import React, { useState, useRef } from 'react';
import axios from 'axios';

function Create_Room() {
    const url = "http://203.162.88.102:9999/v1/rooms/";
    const [isValid, setIsValid] = useState(false);
    const inputFileExamRef = React.createRef();
    const inputFileAnswerRef = React.createRef();
    const inputFileStudentRef = React.createRef();
    const [nameSubject, setNameSubject] = useState('');
    const [duration, setDuration] = useState(60);
    const [date, setDate] = useState(new Date());
    const [startTime, setStartTime] = useState(new Date().toLocaleTimeString());
    const [endTime, setEndTime] = useState(new Date().toLocaleTimeString());
    const [fileExam, setFileExam] = useState({ name: "no file" });
    const [fileAnswer, setFileAnswer] = useState({ name: "no file" });
    const [fileStudent, setFileStudent] = useState({ name: "no file" });

    let tmp_date = date.getDate() < 10 ? ("0" + date.getDate()).slice(-2) : date.getDate();
    let tmp_month = date.getMonth() < 10 ? ("0" + (date.getMonth() + 1)).slice(-2) : date.getMonth + 1;
    let tmp_year = date.getFullYear();
    let _time = `${tmp_year}-${tmp_month}-${tmp_date}`;

    const handleChangeName = (e) => {
        let name = e.target.value;
        if (name.length !== 0 && !name) {
            setIsValid(true);
        }
        setNameSubject(name);
    }
    const handleClickExam = (e) => {
        inputFileExamRef.current.click();
    }
    const handleClickAnswer = (e) => {
        inputFileAnswerRef.current.click();
    }
    const handleClickStudent = (e) => {
        inputFileStudentRef.current.click();
    }
    const onChangeFileExam = (e) => {
        let files = inputFileExamRef.current.files[0];
        if (files) {
            setIsValid(true);
        }
        setFileExam(files);

    }
    const onChangeFileAnswer = (e) => {
        let files = inputFileAnswerRef.current.files[0];
        if (files) {
            setIsValid(true);
        } 
        setFileAnswer(files);

    }
    const onChangeFileStudent = (e) => {
        let files = inputFileStudentRef.current.files[0];
        if (files) {
            setIsValid(true);
        } 
        setFileStudent(files);
    }
    const onChangeDuration = (e) => {
        let value = e.target.value;
        setDuration(value);
    }
    const onchangeDate = (e) => {
        let value = e.target.value;
        console.log("vale date: ", value)
        let tmp = value.split('-');
        let newDate = new Date();
        newDate.setDate(tmp[2]);
        newDate.setMonth(tmp[1] - 1);
        newDate.setFullYear(tmp[0]);
        setDate(newDate);
    }
    const onChangeStartTime = (e) => {
        let value = e.target.value;
        setStartTime(value);
    }
    const onChangeEndTime = (e) => {
        let value = e.target.value;
        setEndTime(value);
    }
    const handlePost = (e) => {
        if (isValid) {
            let tmp_startTime = new Date(date);
            tmp_startTime.setHours(startTime.split(':')[0]);
            tmp_startTime.setMinutes(startTime.split(':')[1]);
            tmp_startTime.setSeconds(startTime.split(':')[2]);

            let tmp_endTime = new Date(date);
            tmp_endTime.setHours(endTime.split(':')[0]);
            tmp_endTime.setMinutes(endTime.split(':')[1]);
            tmp_endTime.setSeconds(endTime.split(':')[2]);

            const fd = new FormData();
            fd.append("ownerId", "60d9d6b63277918ab884e20c");
            fd.append("name", nameSubject);
            fd.append("status", "active");
            fd.append("start", tmp_startTime.toISOString());
            fd.append("end", tmp_endTime.toISOString());
            fd.append("exam", fileExam);
            fd.append("answer", fileAnswer);
            fd.append("student", fileStudent);

            fetch(url, {
                method: 'POST',
                body: fd
            })
                .then(response => response.json()).then(res => {
                    console.log("res:", res);
                    alert("successfully!")
                })
                .catch(err => {
                    console.log("err: ", err);
                })
        }else {
            alert("vui lòng nhập đầy đủ thông tin")
        }
       
    }
    const handleCancel = (e) => {
        setNameSubject("");
        setFileAnswer({name:"no file"})
        setFileExam({name:"no file"})
        setFileStudent({name:"no file"})
        setDate(new Date());
        setStartTime(new Date().toLocaleTimeString());
        setEndTime(new Date().toLocaleTimeString());
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
                            <p className="ls-title">End Time</p>
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
                            <input
                                className="input_subject"
                                type="text" name="name"
                                placeholder="Tên môn học"
                                value={nameSubject}
                                onChange={(e) => handleChangeName(e)}
                            />
                        </div>
                        <div className="date-picker">
                            <input type="date" className="datepk-select" value={_time} onChange={(e) => onchangeDate(e)} />
                        </div>
                        <div className="time-picker">
                            <input
                                className="timepk-select"
                                type="time" id="appt"
                                name="appt" value={startTime}
                                onChange={(e) => onChangeStartTime(e)} />
                        </div>
                        {/* <div className="time-select">
                            <input className="time-range" type="range" min="0" max="120" step="1" value={duration} onChange={(e) => onChangeDuration(e)} />
                            <span className="value-time-range">{duration} minutes</span>
                        </div> */}
                        <div className="time-picker">
                            <input
                                className="timepk-select"
                                type="time" id="appt"
                                name="appt" value={endTime}
                                onChange={(e) => onChangeEndTime(e)} />
                        </div>

                        <div className="file-side exam-question">
                            <button className="btn-select-file btn-select-question" onClick={handleClickExam}>Choose a file</button>
                            <input type='file' name="file_question" style={{ display: 'none' }} ref={inputFileExamRef} onChange={(e) => onChangeFileExam(e)} />
                            <div className="btn-sample-file btn-sample-question"></div>
                            <div className="fileName"> <span >File:  {fileExam.name}</span> </div>
                        </div>
                        <div className="file-side list-answer">
                            <button className="btn-select-file btn-select-answer" onClick={handleClickAnswer}>Choose a file</button>
                            <input type='file' name="file_answer" style={{ display: 'none' }} ref={inputFileAnswerRef} onChange={(e) => onChangeFileAnswer(e)} />
                            <button className="btn-sample-file btn-sample-answer">Sample file</button>
                            <div className="fileName"> <span >File:  {fileAnswer.name}</span> </div>

                        </div>
                        <div className="file-side list-student">
                            <button className="btn-select-file btn-select-student" onClick={handleClickStudent}>Choose a file</button>
                            <input type='file' name="file_students" style={{ display: 'none' }} ref={inputFileStudentRef} onChange={(e) => onChangeFileStudent(e)} />
                            <button className="btn-sample-file btn-sample-student">Sample file</button>
                            <div className="fileName"> <span >File: {fileStudent.name}</span> </div>
                        </div>

                    </div>
                </div>
                <div className="btn-group">
                    <button className="btn-create btn" onClick={(e) => handlePost(e)}>Create</button>
                    <button className="btn-cancel btn" onClick={(e) => handleCancel(e)}>Cancel</button>
                </div>
                {/* <input type="file" onChange={(e) => onChangeFile(e)}/> */}
            </div>
            <div className="space"></div>
        </div>
    )
}
export default Create_Room