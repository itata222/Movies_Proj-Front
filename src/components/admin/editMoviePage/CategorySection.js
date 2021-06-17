import React from 'react'
import { useState } from 'react';

const CategorySection = (props) => {
    const [updateCategory, setUpdateCategory] = useState(false);

    return (
        <div className="category">
            <span className="label">Category:</span>
            <span>{props.categorynewCategory || props.movie.category}</span>
            {updateCategory ?
                <div>
                    <input type="text" placeholder="Change Movie Category" onBlur={(e) => props.category.setNewCategory(e.target.value.trim())} />
                    <button>Update !</button>
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
