import React from 'react'
import useStyles from './styles'
import { Typography, AppBar, Toolbar, IconButton } from '@material-ui/core'
import ArrowBack from '@material-ui/icons/ArrowBackIosOutlined'

const Alerts = () => {
  const classes = useStyles()
  return (
    <div>
      <IconButton href='/' edge="start" className={classes.backButton} color="inherit" aria-label="menu">
        <ArrowBack />
      </IconButton>
      Alerts
    </div>
  )
}

export default Alerts