import moment from 'moment';
import { useState } from 'react';
import {FaAngleLeft, FaAngleRight} from 'react-icons/fa';
import './calendar.css';
export default function Calendar(props) {

    const initialState = {
        dateContext: moment(),
        today: moment(),
        showMonthPopup: false,
        showYearPopup: false
    }
    const [state, setState] = useState(initialState);

    const weekdays = moment.weekdays();
    const weekdaysShort = moment.weekdaysShort();
    const months = moment.months();

    const getYear = () => {
        return state.dateContext.format('Y');
    }
    const getMonth = () => {
        return state.dateContext.format('MMMM');
    }
    const getDaysInMonth = () => {
        return state.dateContext.daysInMonth();
    }

    const getCurrentDate = () => {
        return state.dateContext.get('date');
    }

    const getCurrentDay = () => {
        return state.dateContext.format('D');
    }

    const getFirstDayOfMonth = () => {
        let dateContext = state.dateContext;
        let firstDay = moment(dateContext).startOf('month').format('d');
        return firstDay;
    }
    const weekdaysComponent = weekdaysShort.map((day) => {
        return (
            <td className="week-day">{day}</td>
        )
    })

    let blanks=[];
    for(let i=0; i< getFirstDayOfMonth();i++){
        blanks.push(
            <td className="emptySlot">{""}</td>
        )
    }
    let daysInMonth = [];
    for(let d=1; d <= getDaysInMonth();d++){
        let dayNum =d+blanks.length-1;
        let dt = moment().day(dayNum%7).format('dddd');
        let className="day";
        if(d == getCurrentDay()) className+=" current-day";
        else if(dt === "Sunday" || dt === "Saturday")  className+=" break-day";
        daysInMonth.push(
            <td key={d} className="cell">
                <div className={className}>{d}</div> 
            </td>
        )
    }

    var totalSlots = [...blanks, ...daysInMonth];
    let rows = [];
    let cells = [];

    totalSlots.forEach((row, i) => {
       if((i%7) !== 0) {
           cells.push(row)
       }else{
            let insertRow = cells.slice();
            rows.push(insertRow);
            cells = [];
            cells.push(row);
       }

       if(i === totalSlots.length -1) {
           let insertRow = cells.slice();
           rows.push(insertRow);
       }
    })

    let trElements = rows.map((d, i) => {
        return (
            <tr key={i*100} className="row">
                {d}
            </tr>
        )
    })
    const MonthNav = () => {
        return (
            <span className="month-label">
                {getMonth()}
            </span>
        )
    }
    const showYearEditor = () =>{
        setState((prev) => ({
            ...prev,
            showYearPopup: true
        }))
    }
    const onKeyUpYear = (e) =>{
        // console.log("which: ", e.which);
        if(e.which === 13 || e.which === 27) {
            setYear(e.target.value);
            setState((prev) => ({
                ...prev,
                showYearPopup: false
            }))
        }
    }
    const onMouseOutYear = (e) =>{
        // console.log("which: ", e.which);
            setYear(e.target.value);
            setState((prev) => ({
                ...prev,
                showYearPopup: false
            }))
    }
    const setYear = (year) => {
        // console.log("year: ", year);
        let dateContext = Object.assign({}, state.dateContext);
        dateContext = moment(dateContext).set("year", year);
        setState((prev) => ({
            ...prev,
            dateContext: dateContext
        }))
    }
    const onYearChange = (e) => {
        // console.log("year: ", e.target.value);
        setYear(e.target.value);
        // props.onYearChange && props.onYearChange(e, e.target.value);
    }
    const YearNav = () => {
        return (
            state.showYearPopup ? 
            <input 
                defaultValue={getYear()}    
                className="editor-year"
                // ref={(yearInput) => {yearInput = yearInput} }
                // onKeyUp={(e) => onKeyUpYear(e)}
                onMouseOut={(e) => onMouseOutYear(e)}
                onChange={(e) => onYearChange(e)}
                type="number"
                placeholder="year"
            /> 
            :
            <span 
                className="label-year"
                onClick={(e)=>{showYearEditor()}}
            >
                {getYear()}
            </span>
        )
    }
    const handlePrevMonth = () => {
        let dateContext = Object.assign({}, state.dateContext);
        dateContext = moment(dateContext).subtract(1, "month");
        setState((prev) => ({
            ...prev,
            dateContext: dateContext
        }))
    }
    const handleNextMonth = () => {
        let dateContext = Object.assign({}, state.dateContext);
        dateContext = moment(dateContext).add(1, "month");
        setState((prev) => ({
            ...prev,
            dateContext: dateContext
        }))
    }
    return (

            <table className="calendar">
                <thead>
                    <tr className=" calendar-header">
                        <td colSpan="5">
                            <MonthNav />
                            <YearNav />
                        </td>
                        <td colSpan="2" className="nav-month">
                            <FaAngleLeft className="prev" onClick={handlePrevMonth}/>
                            <FaAngleRight className="prev" onClick={handleNextMonth} />
                        </td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        {weekdaysComponent}
                    </tr>
                    {trElements}
                </tbody>
            </table>
    )
}