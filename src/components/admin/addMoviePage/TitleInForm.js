import React from 'react';
import TextField from '@material-ui/core/TextField';


const TitleInForm = (props) => {
    const onBlurTitle = (e) => {
        const theTitle = e.target.value.trim();
        props.setTitle(theTitle);
    }

    return (
        <TextField
            autoComplete="fname"
            name="title"
            variant="outlined"
            required
            fullWidth
            id="title"
            label="Title"
            autoFocus
            onBlur={onBlurTitle}
        />
    )
}

export default TitleInForm
