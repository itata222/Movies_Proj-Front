import React from 'react'
import { useState } from 'react';

const DescriptionSection = (props) => {

    const [updateDescription, setUpdateDescription] = useState(false);


    return (
        <div className="description">
            <span className="label">Description:</span>
            <span>{props.description.newDescription || props.movie.description}</span>
            {updateDescription ?
                <div>
                    <input type="text" placeholder="Change Movie Description" onBlur={(e) => props.description.setNewDescription(e.target.value.trim())} />
                    <button>Update !</button>
                </div>
                :
                <button onClick={(e) => {
                    e.preventDefault()
                    setUpdateDescription(true)
                }}>Update</button>
            }
        </div>
    )
}

export default DescriptionSection
