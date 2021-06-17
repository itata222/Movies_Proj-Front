import React from 'react';
import Button from '@material-ui/core/Button';


const SubmitButton = (props) => {

    return (
        <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={props.classes.submit}
        >
            Add Movie
        </Button>
    )
}

export default SubmitButton
