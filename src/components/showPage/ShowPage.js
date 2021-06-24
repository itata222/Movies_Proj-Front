import React, { useEffect, useState } from 'react'
import { getShowByIdFunc } from '../../services/userService';
import ShowSeats from './ShowSeats'
import SumSelect from './SumSelect';
import ButtonsSection from './ButtonsSection';
import Spinner from '../main/Spinner';

const ShowPage = (props) => {
    const showID = props.match.params.id;
    const [show, setShow] = useState({});
    const [isPageLoaded, setIsPageLoaded] = useState(false);

    useEffect(() => {
        getShowByIdFunc(showID).then((res) => {
            setShow(res)
            setIsPageLoaded(true)
        }).catch(e => console.log(e.message))
    }, [showID]);


    return (
        <div className="showPage">
            {
                isPageLoaded ? <>
                    <SumSelect />
                    <ShowSeats show={show} />
                    <ButtonsSection showID={showID} />
                </> :
                    <Spinner />
            }
        </div>
    )
}

export default ShowPage
