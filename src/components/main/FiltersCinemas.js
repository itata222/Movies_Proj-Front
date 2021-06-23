import React, { useContext, useEffect, useRef, useState } from 'react'
import { nanoid } from 'nanoid';
import { FiltersContext } from '../../contexts/filtersContext';
import { CinemasContext } from '../../contexts/cinemasContext';
import { setCinemaFilterAction } from '../../actions/filterActions';


const FiltersCinemas = () => {
    const { cinemasData } = useContext(CinemasContext);
    const [showDropDownCinemaSelect, setShowDropDownCinemaSelect] = useState(false);
    const [selectedCinemaTitle, setSelectedCinemaTitle] = useState(cinemasData[0].title || '');
    const [cinemasToDisplay, setCinemasToDisplay] = useState([...cinemasData]);
    const { dispatchFiltersData } = useContext(FiltersContext);

    let menuRef = useRef();

    const filterCinemasText = (e) => {
        const searchValue = e.target.value;
        setCinemasToDisplay(searchValue === "" ?
            cinemasData :
            cinemasData.filter((cinema) => cinema.title.toLowerCase().includes(searchValue)));
    }

    useEffect(() => {
        document.addEventListener('mouseup', (e) => {
            if (!menuRef.current?.contains(e.target))
                setShowDropDownCinemaSelect(false)
        })
    });

    const handleClick = (e) => {
        const cinemaTitle = e.target.innerHTML.trim();
        dispatchFiltersData(setCinemaFilterAction(cinemaTitle))
        setSelectedCinemaTitle(e.target.innerHTML)
    }

    return (
        <div className="filters-cinemas">
            <div className="cinema-select">
                <button onClick={(e) => {
                    e.preventDefault()
                    setShowDropDownCinemaSelect(true)
                }}>
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
        </div>

    )
}

export default FiltersCinemas
