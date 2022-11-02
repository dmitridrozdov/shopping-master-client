import React, { useState } from 'react'
import useStyles from './styles'
import { Fade, List as MUList, IconButton } from '@material-ui/core'
import ArrowBack from '@material-ui/icons/ArrowBackIosOutlined'
import AlertListItem from './AlertListItem/AlertListItem'

const woolisApi = {
  base: 'https://www.woolworths.com.au/api/v3/ui/schemaorg/product/',
}

const productsToMonitor = [
  { 
      wid: '231598',
      price: '18',
  },
  {
      wid: '160945',
      price: '26',
  },
  { 
      wid: '813898',
      price: '5',
  },
]

const Alerts = () => {
  const classes = useStyles()
  const [alerts, setAlerts] = useState([])

  const fetchAllWoolisProducts = () => {
    const promises = productsToMonitor.map(p => {
      return fetch(`${woolisApi.base}` + p.wid)
        .then(res => res.json())
        .then((result) => {
          return {wid: p.wid, product: result.name.trim(), price: result.offers.price, usualprice: p.price}
        })
      })
  
    Promise.all(promises).then(results => {
      setAlerts(results)
    })
  }

  fetchAllWoolisProducts()


  return (
    <div>
      <IconButton href='/' edge="start" className={classes.backButton} color="inherit" aria-label="menu">
        <ArrowBack />
      </IconButton>
      <MUList className={classes.list}>
        {alerts.map((alert) => (
          <Fade in={true} key={alert.wid}>
              <AlertListItem id={alert.id} product={alert.product} price={alert.price} usualprice={alert.usualprice}/>
          </Fade>
        ))}
      </MUList>
      
    </div>
  )
}

export default Alerts