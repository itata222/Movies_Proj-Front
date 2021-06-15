import React, { useEffect, useRef, useState } from 'react'

const FiltersCinemas = (props) => {
    const cinemas = [
        {
            name: "יס פלאנט ראשון לציון",
            movies: [{
                title: "asds"
            }]
        },
        {
            name: "יס פלאנט באר שבע",
            movies: [{
                title: "asds"
            }]
        },
    ]
    const [showDropDownCinemaSelect, setShowDropDownCinemaSelect] = useState(false);
    // const [selectedCinema, setSelectedCinema] = useState(cinemas[0].name)
    const [cinemasToDisplay, setCinemasToDisplay] = useState([...cinemas]);
    let menuRef = useRef()

    const openDropDownMenu = () => {
        setShowDropDownCinemaSelect(true)
    }

    const filterCinemasText = (e) => {
        const searchValue = e.target.value;
        const cinemasNew = [...cinemas];
        setCinemasToDisplay(searchValue === "" ?
            cinemasNew :
            cinemasNew.filter((cinema) => cinema.name.toLowerCase().includes(searchValue)));
    }

    useEffect(() => {
        document.addEventListener('mouseup', (e) => {
            if (!menuRef.current?.contains(e.target))
                setShowDropDownCinemaSelect(false)
        })
    });

    // useEffect(() => {
    //     const cinemaName = props.params.cinema
    //     setSelectedCinema(cinemaName)
    // }, [props.params.cinema]);


    return (
        <div className="filters-home">
            <h2>הזמנת כרטיסים</h2>
            <div className="filters-home-cinema">
                <div className="cinema-select">
                    <button onClick={openDropDownMenu}>
                        <span>ראשון לציון </span>
                        <span className="arrow-container">
                            <span className="arrow-down"></span>
                        </span>
                    </button>
                    {showDropDownCinemaSelect &&
                        <div className="cinema-dropDown">
                            <input type="text" ref={menuRef} onInput={filterCinemasText} />
                            <ul name="cinema" id="cinema">
                                {cinemasToDisplay.length > 0 ?
                                    cinemasToDisplay.map((cinema, i) => (
                                        <li key={i} value={cinema.name}>
                                            {cinema.name}
                                        </li>
                                    )) :
                                    <li value="no cinemas">לא נמצאו תוצאות</li>
                                }
                            </ul>
                        </div>
                    }
                </div>
            </div>
        </div>
    )
}

export default FiltersCinemas
