import React from 'react'
import { useState } from 'react';

const CategorySection = (props) => {
    const [updateCategory, setUpdateCategory] = useState(false);

    return (
        <div className="category">
            <div className="dataFlex">
                <span className="label">:Category</span>
                <span className="data">{props.categorynewCategory || props.movie.category}</span>
            </div>
            {updateCategory ?
                <div className="updateInput">
                    <input type="text" placeholder="Change Movie Category" onBlur={(e) => props.category.setNewCategory(e.target.value.trim())} />
                    {/* <button>Update !</button> */}
                </div>
                :
                <button onClick={(e) => {
                    e.preventDefault()
                    setUpdateCategory(true)
                }}>Update</button>
            }
        </div>
    )
}

export default CategorySection
