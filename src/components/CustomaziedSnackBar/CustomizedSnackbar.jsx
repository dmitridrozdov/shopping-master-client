
import React from 'react'
import Snackbar from '@material-ui/core/Snackbar'
import MuiAlert from '@material-ui/lab/Alert'

import useStyles from './styles'

const CustomizedSnackbar = ({ open, setOpen, severity, text }) => {
  const classes = useStyles()

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false)
  }

  return (
    <div className={classes.root}>
      <Snackbar 
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }} 
      open={open} autoHideDuration={2000} onClose={handleClose}>
        <MuiAlert className={classes.headerTextStyle} onClose={handleClose} severity={severity} elevation={6}>
            {text}
        </MuiAlert>
      </Snackbar>
    </div>
  )
}

export default CustomizedSnackbar;