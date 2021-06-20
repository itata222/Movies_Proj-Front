import React, { useState } from 'react';
import moment from 'moment';

const FiltersDays = () => {
    const today = moment();
    const [selectedDay, setSelectedDay] = useState(today);
    const clickedDay = (e) => {
        setSelectedDay(e.target)
        console.log(e.target.innerHTML, selectedDay)
    }
    return (
        <div className="filterDays">
            <span className="day0" onClick={clickedDay}>{(moment().day(0)).format('[Today]')}</span>
            <span className="day1" onClick={clickedDay}>{(moment().day(1)).format('dd')}</span>
            <span className="day2" onClick={clickedDay}>{(moment().day(2)).format('dd')}</span>
            <span className="day3" onClick={clickedDay}>{(moment().day(3)).format('dd')}</span>
            <span className="day4" onClick={clickedDay}>{(moment().day(4)).format('dd')}</span>
            <span className="day5" onClick={clickedDay}>{(moment().day(6)).format('dd')}</span>
            <span className="day6" onClick={clickedDay}>{(moment().day(5)).format('dd')}</span>
        </div>
    )
}

export default FiltersDays
