import moment from 'moment';
import React, { useContext, useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom';
import { setShowsAction } from '../../actions/adminActions';
import { ShowsContext } from '../../contexts/showsContext';
import { getAllShowsFunc } from '../../services/userService';
import Spinner from '../main/Spinner';

const AdminShowsSelectionPage = () => {
    const { showsData, dispatchShowsData } = useContext(ShowsContext);
    const [isPageLoaded, setIsPageLoaded] = useState(false);
    const history = useHistory();

    useEffect(() => {
        let isComponentExist = true;
        if (isComponentExist) {
            getAllShowsFunc().then((response) => {
                dispatchShowsData(setShowsAction(response));
                setIsPageLoaded(true)
            }).catch((e) => {
                console.log(e)
            })
        }
        return () => {
            isComponentExist = false;
        };
    }, [dispatchShowsData]);

    const onClick = (show) => {
        history.push(`/admin/editShow/${show._id}`)
    }

    return (
        <div className="all-shows">
            {
                isPageLoaded ?
                    <div className="shows">
                        <div className="shows-header">
                            Choose A Show To Edit:
                        </div>
                        {
                            showsData.map((show, i) => (
                                <div className="show" key={i} onClick={() => onClick(show)}>
                                    <div className="showDesc">
                                        <span className="label">Movie:</span> <span>{show.movie.title}</span>
                                    </div>
                                    <div className="showDesc">
                                        <span className="label">Date:</span> <span>{moment(show.specificDate).format("dddd, MMMM Do, h:mm a")}</span>
                                    </div>
                                </div>
                            ))
                        }
                    </div> :
                    <Spinner />
            }
        </div>
    )
}

export default AdminShowsSelectionPage