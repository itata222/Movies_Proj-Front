import React, { useEffect, useState } from 'react';
import { useContext } from 'react';
import { setCinemasAction } from '../../actions/adminActions';
import { CinemasContext } from '../../contexts/cinemasContext';
import { getAllCinemasFunc } from '../../services/userService';
import Spinner from '../main/Spinner';
import FiltersCinemas from './FiltersCinemas'
import FiltersDays from './FiltersDays'


const FiltersHome = () => {
    const { dispatchCinemasData } = useContext(CinemasContext);
    const [isPageLoaded, setIsPageLoaded] = useState(false);
    useEffect(() => {
        getAllCinemasFunc().then((res) => {
            dispatchCinemasData(setCinemasAction(res));
            setIsPageLoaded(true)
        })
    }, [dispatchCinemasData])

    return (
        <>
            {
                isPageLoaded ?
                    <>
                        <FiltersCinemas />
                        <FiltersDays />
                    </> :
                    <Spinner />
            }

        </>
    )
}


export default FiltersHome
