import './create_room.css';

import my_room from '../../../assets/my_room.png'
import accomplished from '../../../assets/accomplished.png'
import notify from '../../../assets/notify.png'
import tutorial from '../../../assets/tutorial.png'
import upcoming from '../../../assets/upcoming.png'
import {useRef} from 'react';

function Create_Room() {
    const inputFileRef = useRef(null);

    const handleClick = (e) => {
        inputFileRef.current.click();
    }
    const handleChange = (e) =>{

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
                            <input type="date" className="datepk-select" value="2021-06-21" />
                        </div>
                        <div className="time-picker">
                            <input className="timepk-select" type="time" id="appt" name="appt" value="16:32:55" />
                        </div>
                        <div className="time-select">
                            <input className="time-range" type="range" min="1" max="100" step="1" />
                        </div>

                        <div className="exam-question">
                            <button className="btn-file btn-select-question" onClick={handleClick}>Choose a file</button>
                            <input  type='file' id="getFile" style={{display:'none'}} ref={inputFileRef} onChange={handleChange}/>
                            <button className="btn-file btn-sample-question">Sample file</button>
                        </div>
                        <div className="list-student">
                        <button className="btn-file btn-select-student" onClick={handleClick}>Choose a file</button>
                            <input  type='file' id="getFile" style={{display:'none'}} ref={inputFileRef} onChange={handleChange}/>
                            <button className="btn-file btn-sample-student">Sample file</button>
                        </div>
                    </div>
                </div>
                <div className="space"></div>
                <div className="btn-group">
                    <button className="btn-create btn">Create</button>
                    <button className="btn-cancel btn">Cancel</button>
                </div>
            </div>
            <div className="space"></div>
        </div>
    )
}
export default Create_Room