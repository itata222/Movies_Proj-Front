import React, { useContext, useEffect, useRef, useState } from 'react'
import { setSelectedCinemaAction } from '../../actions/selectedItemsActions';
import { SelectedItemsContext } from '../../contexts/selectedItemsContext';
import { getAllCinemasFunc, getCinemaByTitle } from '../../services/userService';
import Spinner from './Spinner';

const FiltersCinemas = () => {
    const { dispatchSelectedItemsData } = useContext(SelectedItemsContext);
    const [cinemas, setCinemas] = useState([]);
    const [showDropDownCinemaSelect, setShowDropDownCinemaSelect] = useState(false);
    const [selectedCinemaTitle, setSelectedCinemaTitle] = useState('');
    const [cinemasToDisplay, setCinemasToDisplay] = useState([]);
    const [isDataLoaded, setIsDataLoaded] = useState(false);
    let menuRef = useRef()

    const openDropDownMenu = () => {
        setShowDropDownCinemaSelect(true)
    }

    const filterCinemasText = (e) => {
        const searchValue = e.target.value;
        const cinemasNew = [...cinemas];
        setCinemasToDisplay(searchValue === "" ?
            cinemasNew :
            cinemasNew.filter((cinema) => cinema.title.toLowerCase().includes(searchValue)));
    }

    useEffect(() => {
        getAllCinemasFunc().then((response) => {
            setCinemas(response)
            setCinemasToDisplay(response)
            setSelectedCinemaTitle(response[0].title)
            dispatchSelectedItemsData(setSelectedCinemaAction(response[0]));
            setIsDataLoaded(true)
        }).catch((e) => console.log(e))
    }, [dispatchSelectedItemsData])

    useEffect(() => {
        document.addEventListener('mouseup', (e) => {
            if (!menuRef.current?.contains(e.target))
                setShowDropDownCinemaSelect(false)
        })
    });


    const handleClick = (e) => {
        setSelectedCinemaTitle(e.target.innerHTML)
        getCinemaByTitle(e.target.innerHTML).then((response) => {
            dispatchSelectedItemsData(setSelectedCinemaAction(response));
        }).catch(e => alert(e.message))
    }


    return (
        <>{isDataLoaded ?
            <div className="filters-cinemas">
                <div className="cinema-select">
                    <button onClick={openDropDownMenu}>
                        <span>{selectedCinemaTitle || cinemas[0].title} </span>
                        <span className="arrow-container">
                            <span className="arrow-down"></span>
                        </span>
                    </button>
                    {showDropDownCinemaSelect &&
                        <div ref={menuRef} className="cinema-dropDown">
                            <input type="text" onInput={filterCinemasText} />
                            <ul name="cinema" id="cinema" >
                                {cinemasToDisplay.length > 0 ?
                                    cinemasToDisplay.map((cinema, i) => (
                                        <li key={i} value={cinema.title} onClick={handleClick}>
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
