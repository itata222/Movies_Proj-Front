import React, { useContext, useEffect, useRef, useState } from 'react'
import { nanoid } from 'nanoid';
import Spinner from './Spinner';
import { FiltersContext } from '../../contexts/filtersContext';
import { CinemasContext } from '../../contexts/cinemasContext';
import { setCinemaFilterAction } from '../../actions/filterActions';
import { setCinemasAction } from '../../actions/adminActions';
import { getAllCinemasFunc } from '../../services/userService';


const FiltersCinemas = () => {
    const { cinemasData, dispatchCinemasData } = useContext(CinemasContext);
    const [showDropDownCinemaSelect, setShowDropDownCinemaSelect] = useState(false);
    const [selectedCinemaTitle, setSelectedCinemaTitle] = useState('');
    const [cinemasToDisplay, setCinemasToDisplay] = useState([]);
    const [isDataLoaded, setIsDataLoaded] = useState(false);
    const { dispatchFiltersData } = useContext(FiltersContext);

    let menuRef = useRef()

    const filterCinemasText = (e) => {
        const searchValue = e.target.value;
        setCinemasToDisplay(searchValue === "" ?
            cinemasData :
            cinemasData.filter((cinema) => cinema.title.toLowerCase().includes(searchValue)));
    }

    useEffect(() => {
        let isComponentExist = true
        if (isComponentExist) {
            getAllCinemasFunc().then((res) => {
                dispatchCinemasData(setCinemasAction(res))
                setCinemasToDisplay(res)
                setSelectedCinemaTitle(res[0].title)
                dispatchFiltersData(setCinemaFilterAction(res[0].title))
                setIsDataLoaded(true)
            })
        }
        return () => {
            isComponentExist = false;
        };
    }, [dispatchFiltersData, dispatchCinemasData, cinemasData]);

    useEffect(() => {
        document.addEventListener('mouseup', (e) => {
            if (!menuRef.current?.contains(e.target))
                setShowDropDownCinemaSelect(false)
        })
    });


    const handleClick = (e) => {
        const cinemaTitle = e.target.innerHTML.trim()
        dispatchFiltersData(setCinemaFilterAction(cinemaTitle))
        setSelectedCinemaTitle(e.target.innerHTML)
    }



    return (
        <>{isDataLoaded ?
            <div className="filters-cinemas">
                <div className="cinema-select">
                    <button onClick={() => setShowDropDownCinemaSelect(true)}>
                        <span>{selectedCinemaTitle || cinemasData[0].title} </span>
                        <span className="arrow-container">
                            <span className="arrow-down"></span>
                        </span>
                    </button>
                    {showDropDownCinemaSelect &&
                        <div ref={menuRef} className="cinema-dropDown">
                            <input type="text" onInput={filterCinemasText} placeholder="Type Cinema..." />
                            <ul name="cinema" id="cinema" >
                                {cinemasToDisplay.length > 0 ?
                                    cinemasToDisplay.map((cinema, i) => (
                                        <li key={nanoid()} value={cinema.title} onClick={handleClick}>
                                            {cinema.title}
                                        </li>
                                    )) :
                                    <li value="no cinemas">לא נמצאו תוצאות</li>
                                }
                            </ul>
                        </div>
                    }
                </div>
            </div> :
            <Spinner />
        }</>
    )
}

export default FiltersCinemas
