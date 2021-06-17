import { TextField } from '@material-ui/core'
import React from 'react'

const DescriptionInForm = (props) => {

    const onBlurDescription = (e) => {
        const theDescription = e.target.value.trim();
        props.setDescription(theDescription);
    }

    return (
        <TextField
            variant="outlined"
            multiline
            rows={4}
            required
            fullWidth
            id="description"
            label="Description"
            name="description"
            autoComplete="lname"
            onBlur={onBlurDescription}
        />
    )
}

export default DescriptionInForm
