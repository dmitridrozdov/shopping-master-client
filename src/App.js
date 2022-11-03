import React, { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Container } from '@material-ui/core'

import AppList from './components/AppList/AppList'
import Alerts from './components/Alerts/Alerts'

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

const App = () => {

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
        <BrowserRouter>
            <Container maxWidth='xl'>
                <Routes>
                    <Route path='/' exact element={<AppList />} />
                    <Route path='/alerts' exact element={<Alerts alerts={alerts}/>} />
                </Routes>
            </Container>
        </BrowserRouter>
    )
}

export default App

