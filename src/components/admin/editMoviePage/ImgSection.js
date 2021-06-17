import React from 'react'
import { useState } from 'react';

const ImgSection = (props) => {
    const [updateImg, setUpdateImg] = useState(false);

    return (
        <div className="img">
            <img src={props.img.newImageSrc || props.movie.img} alt="Movie" />
            {updateImg ?
                <div>
                    <input type="text" placeholder="Change Movie Image" onBlur={(e) => props.img.setNewImageSrc(e.target.value)} />
                    <button>Update !</button>
                </div>
                :
                <button onClick={(e) => {
                    e.preventDefault()
                    setUpdateImg(true)
                }}>Update</button>}
        </div>
    )
}

export default ImgSection
