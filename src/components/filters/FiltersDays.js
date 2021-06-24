import React, { useContext, useState } from 'react';
import moment from 'moment';
import { FiltersContext } from '../../contexts/filtersContext';
import { setDayFilterAction } from '../../actions/userActions';

const FiltersDays = () => {
    const days = [
        (moment().day(0)).format('[Today]'),
        (moment().add(1, 'days')).format('dd'),
        (moment().add(2, 'days')).format('dd'),
        (moment().add(3, 'days')).format('dd'),
        (moment().add(4, 'days')).format('dd'),
        (moment().add(5, 'days')).format('dd'),
        (moment().add(6, 'days')).format('dd'),
    ];
    const [selectedDay, setSelectedDay] = useState(0);
    const { dispatchFiltersData } = useContext(FiltersContext)

    const clickedDay = (day) => {
        setSelectedDay(day);
        dispatchFiltersData(setDayFilterAction(day))
    }

    return (
        <div className="filterDays">
            <span className={selectedDay === 0 ? 'activeDayFilter' : 'day0'} onClick={() => clickedDay(0)}>{days[0]}</span>
            <span className={selectedDay === 1 ? 'activeDayFilter' : 'day1'} onClick={() => clickedDay(1)}>{days[1]}</span>
            <span className={selectedDay === 2 ? 'activeDayFilter' : 'day2'} onClick={() => clickedDay(2)}>{days[2]}</span>
            <span className={selectedDay === 3 ? 'activeDayFilter' : 'day3'} onClick={() => clickedDay(3)}>{days[3]}</span>
            <span className={selectedDay === 4 ? 'activeDayFilter' : 'day4'} onClick={() => clickedDay(4)}>{days[4]}</span>
            <span className={selectedDay === 5 ? 'activeDayFilter' : 'day5'} onClick={() => clickedDay(5)}>{days[5]}</span>
            <span className={selectedDay === 6 ? 'activeDayFilter' : 'day6'} onClick={() => clickedDay(6)}>{days[6]}</span>
        </div>
    )
}

export default FiltersDays
