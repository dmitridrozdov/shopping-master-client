import React, { useEffect, useState } from 'react'
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
        price: '19'
    }
]

const App = () => {

    let alertArray = []
    const [alerts, setAlerts] = useState([])

    useEffect(() => {
        productsToMonitor.forEach(p => 
            fetch(`${woolisApi.base}` + p.wid)
              .then((res) => res.json())
              .then((result) => {
                if(p.price > result.offers.price)
                {
                    alertArray.push({product: result.name.trim(), price: result.offers.price, usualprice: p.price})
                    setAlerts(alertArray)
                }
              })
        )
        
    }, [productsToMonitor])

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

