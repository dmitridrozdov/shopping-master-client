import React, { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Container } from '@material-ui/core'
import { parse } from 'node-html-parser'

import AppList from './components/AppList/AppList'
import Alerts from './components/Alerts/Alerts'

const woolisApi = {
    base: 'https://www.woolworths.com.au/api/v3/ui/schemaorg/product/',
}

// const productsToMonitor = [
//     { 
//         wid: '231598',
//         price: '18',
//     },
//     {
//         wid: '160945',
//         price: '28',
//     },
//     { 
//         wid: '813898',
//         price: '5',
//     },
// ]

const products = [
  {
    product: 'Guylian Chocolate Seashells 250g',
    woolisid: '231598',
    coleslink: 'https://www.coles.com.au/product/guylian-chocolate-seashells-250g-5235307',
    usualprice: '18',
  },
  // {
  //   product: 'Lavazza Crema E Gusto Ground Coffee 1Kg',
  //   woolisid: '160945',
  //   coleslink: '',
  //   usualprice: '28',
  // },
  {
    product: 'Cadbury Old Gold Original Dark Chocolate Block 180g',
    woolisid: '813898',
    coleslink: 'https://www.coles.com.au/product/cadbury-old-gold-original-dark-chocolate-block-180g-2350568',
    usualprice: '6',
  }
]

const App = () => {

    const [woolisPrices, setWoolisPrices] = useState([])
    const [colesPrices, setColesPrices] = useState([])

    // const fetchAllWoolisPrices = async () => {
    //   const promises = products.map(p => {
    //     return fetch(`${woolisApi.base}` + p.woolisid)
    //       .then(res => res.json())
    //       .then((result) => {
    //         return {wid: p.woolisid, product: p.product, price: result.offers.price, usualprice: p.usualprice}
    //       })
    //     })
    
    //   Promise.all(promises).then(results => {
    //     setWoolisPrices(results)
    //   })
    // }

    const fetchAllWoolisPrices = async () => {
      try {
        const promises = products.map(async (p) => {
          const colesprice = await fetchColesPrice(p.coleslink);
          const res = await fetch(`${woolisApi.base}${p.woolisid}`);
          const result = await res.json();
    
          return {
            wid: p.woolisid,
            product: p.product,
            price: result.offers.price,
            usualprice: p.usualprice,
            colesprice: colesprice,
          };
        });
    
        const results = await Promise.all(promises);
        setWoolisPrices(results);
      } catch (error) {
        console.error('Error fetching prices:', error);
      }
    };

    const fetchColesPrice = async (coleslink) => {
      try {
        const res = await fetch(coleslink)
        const html = await res.text()
        const root = parse(html)
        const selectedElement = root.querySelector('.price__value')
        return selectedElement ? selectedElement.textContent : '-1'
      } catch (error) {
        console.error('Error fetching Coles price:', error);
        return '-1'
      }
    }
    

    // const fetchColesPrices = async () => {
    //   try {
    //     const promises = products.map(async (p) => {
    //       const price = await fetchColesPrice(p.coleslink)
    //       return {wid: p.woolisid, product: p.product, price: price, usualprice: p.usualprice}
    //     });
    
    //     const results = await Promise.all(promises)
    //     setColesPrices(results)
    //   } catch (error) {
    //     console.error('Error fetching Coles prices:', error)
    //   }
    // }
    
    // fetchColesPrices()
  
    // console.log(fetchColesPrice('https://www.coles.com.au/product/cadbury-old-gold-original-dark-chocolate-block-180g-2350568'))
    // console.log(fetchColesPrice('https://www.coles.com.au/product/guylian-chocolate-seashells-250g-5235307'))
    fetchAllWoolisPrices()

    return (
        <BrowserRouter>
            <Container maxWidth='xl'>
                <Routes>
                    <Route path='/' exact element={<AppList />} />
                    <Route path='/alerts' exact element={<Alerts alerts={woolisPrices}/>} />
                </Routes>
            </Container>
        </BrowserRouter>
    )
}

export default App

