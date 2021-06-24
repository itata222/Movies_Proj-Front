import React from 'react'
import { useState } from 'react';

const DescriptionSection = (props) => {

    const [updateDescription, setUpdateDescription] = useState(false);


    return (
        <div className="description">
            <div className="dataFlex">
                <span className="label">:Description</span>
                <span className="data">{props.description.newDescription || props.movie.description}</span>
            </div>
            {updateDescription ?
                <div className="updateInput">
                    <input type="textarea" placeholder="Change Movie Description" onBlur={(e) => props.description.setNewDescription(e.target.value.trim())} />
                    {/* <button>Update !</button> */}
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
