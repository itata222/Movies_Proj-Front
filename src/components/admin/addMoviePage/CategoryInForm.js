import { TextField } from '@material-ui/core';
import React from 'react'

const CategoryInForm = (props) => {

    const onBlurCategory = (e) => {
        const theCategory = e.target.value.trim();
        props.setCategory(theCategory)
    }
    return (
        <TextField
            variant="outlined"
            required
            fullWidth
            id="category"
            label="Category"
            name="category"
            autoComplete="lname"
            onBlur={onBlurCategory}
        />
    )
}

export default CategoryInForm
