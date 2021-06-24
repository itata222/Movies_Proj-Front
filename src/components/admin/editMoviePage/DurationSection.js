import React from 'react'
import { useState } from 'react';

const DurationSection = (props) => {

    const [updateDuration, setUpdateDuration] = useState(false);

    return (
        <div className="duration">
            <div className="dataFlex">
                <span className="label">:Duration</span>
                <span className="data">{props.duration.newDuration || props.movie.duration} Minutes</span>
            </div>
            {updateDuration ?
                <div className="updateInput">
                    <input type="number" placeholder="Change Movie Duration" onBlur={(e) => props.duration.setNewDuration(e.target.value)} />
                    {/* <button>Update !</button> */}
                </div>
                :
                <button onClick={(e) => {
                    e.preventDefault()
                    setUpdateDuration(true)
                }}>Update</button>
            }
        </div>
    )
}

export default DurationSection
