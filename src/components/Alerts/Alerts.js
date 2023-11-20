import React from 'react'
import useStyles from './styles'
import { Fade, List as MUList, IconButton } from '@material-ui/core'
import ArrowBack from '@material-ui/icons/ArrowBackIosOutlined'
import AlertListItem from './AlertListItem/AlertListItem'
import { RotateSpinner } from 'react-spinners-kit'
import ProductCard from './ProductCard'

const Alerts = ({ alerts }) => {
  const classes = useStyles()
  
  return (
      <div>
        <IconButton href='/' edge="start" className={classes.backButton} color="inherit" aria-label="menu">
          <ArrowBack />
        </IconButton>
        {!alerts.length ? <RotateSpinner color="#7a34eb"/> : (
          <MUList className={classes.list}>
            {alerts.map((alert) => (
              <Fade in={true} key={alert.wid}>
                  <ProductCard product={alert.product} price={alert.price} usualprice={alert.usualprice} colesprice={alert.colesprice}/>
              </Fade>
            ))}
          </MUList>
        )}
      </div>
    )
}

export default Alerts