import React from 'react'
import { useState } from 'react';

const DurationSection = (props) => {

    const [updateDuration, setUpdateDuration] = useState(false);

    return (
        <div className="duration">
            <span className="label">Duration:</span>
            <span>{props.duration.newDuration || props.movie.duration} Minutes</span>
            {updateDuration ?
                <div>
                    <input type="number" placeholder="Change Movie Duration" onBlur={(e) => props.duration.setNewDuration(e.target.value)} />
                    <button>Update !</button>
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
