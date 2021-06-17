import React from 'react'
import { useState } from 'react';

const TitleSection = (props) => {

    const [updateTitle, setUpdateTitle] = useState(false);


    return (
        <div className="title">
            <span className="label">Title:</span>
            <span>{props.title.newTitle || props.movie.title}</span>
            {updateTitle ?
                <div>
                    <input type="text" placeholder="Change Movie Title" onBlur={(e) => props.title.setNewTitle(e.target.value.trim())} />
                    <button>Update !</button>
                </div>
                :
                <button onClick={(e) => {
                    e.preventDefault()
                    setUpdateTitle(true)
                }}>Update</button>
            }
        </div>
    )
}

export default TitleSection
