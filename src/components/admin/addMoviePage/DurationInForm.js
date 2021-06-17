import { TextField } from '@material-ui/core'
import React from 'react'

const DurationInForm = (props) => {

    const onBlurDuration = (e) => {
        const theDuration = e.target.value.trim();
        props.setDuration(theDuration);
    }

    return (
        <TextField
            type="number"
            variant="outlined"
            required
            fullWidth
            id="duration"
            label="Duration in minutes"
            name="duration"
            autoComplete="lname"
            onBlur={onBlurDuration}
        />
    )
}

export default DurationInForm
