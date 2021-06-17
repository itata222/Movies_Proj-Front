import { TextField } from '@material-ui/core'
import React from 'react'

const ImgInForm = (props) => {
    const onBlurImage = (e) => {
        const theImg = e.target.value.trim();
        props.setImg(theImg)
    }

    return (
        <TextField
            variant="outlined"
            required
            fullWidth
            id="image source"
            label="Image source"
            name="image source"
            autoComplete="lname"
            onBlur={onBlurImage}
        />
    )
}

export default ImgInForm
