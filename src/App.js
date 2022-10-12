// import React, { useEffect, useRef } from 'react'
// import { useDispatch } from 'react-redux'
// import { Container, Grow } from '@material-ui/core'
// // import useStyles from './styles'
// import { PushToTalkButton, PushToTalkButtonContainer, ErrorPanel } from '@speechly/react-ui'
// import { SpeechState, useSpeechContext } from '@speechly/react-client'
// import { getProducts } from './actions/products'
// import { getALLProducts } from './actions/products'

// import AddProductToCurrentListForm from './components/AddProductForm/AddProductToCurrentListForm'
// import List from './components/List/List'
// import MyBar from './components/AppBar/MyBar'

// const App = () => {
//     // const classes = useStyles()
//     const { speechState } = useSpeechContext()
//     const main = useRef(null)
//     const dispatch = useDispatch()

//     const executeScroll = () => main.current.scrollIntoView()

//     useEffect(() => {
//         if(speechState === SpeechState.Recording) {
//             executeScroll()
//         }
//     }, [speechState])

//     useEffect(() => {
//         dispatch(getProducts())
//     }, [dispatch])

//     useEffect(() => {
//         dispatch(getALLProducts())
//     }, [dispatch])

//     return (
//         <Container maxWidth='sm'>

//             <MyBar />

//             <Grow in>
//                 <Container>
//                     <AddProductToCurrentListForm position='sticky' className='not-scrolled'/>
//                 </Container>
//             </Grow>

//             <Grow in>
//                 <Container ref={main}>
//                     <List />
//                 </Container>
//             </Grow>

//             <PushToTalkButtonContainer>
//                 <PushToTalkButton />
//                 <ErrorPanel />
//             </PushToTalkButtonContainer>

//         </Container>
//     )
// }

// export default App

import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Container } from '@material-ui/core'

import AppList from './components/AppList/AppList'
import Alerts from './components/Alerts/Alerts'

const App = () => {
    return (
        <BrowserRouter>
            <Container maxWidth='xl'>
                <Routes>
                    <Route path='/' exact element={<AppList />} />
                    <Route path='/alerts' exact component={<Alerts />} />
                </Routes>
            </Container>
        </BrowserRouter>
    )
}

export default App

