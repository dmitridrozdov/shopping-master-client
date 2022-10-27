import React from 'react'
import useStyles from './styles'
import { Fade, List as MUList, IconButton } from '@material-ui/core'
import ArrowBack from '@material-ui/icons/ArrowBackIosOutlined'
import AlertListItem from './AlertListItem/AlertListItem'

const Alerts = ({ alerts }) => {
  const classes = useStyles()
  console.log(alerts)
  return (
    <div>
      <IconButton href='/' edge="start" className={classes.backButton} color="inherit" aria-label="menu">
        <ArrowBack />
      </IconButton>
      <MUList className={classes.list}>
        {alerts.map((alert) => (
          <Fade in={true} key={alert.product}>
              <AlertListItem id={alert.product} product={alert.product} price={alert.price}/>
          </Fade>
        ))}
      </MUList>
      
    </div>
  )
}

export default Alerts