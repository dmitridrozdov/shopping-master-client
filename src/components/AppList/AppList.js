import React, { useEffect, useRef } from 'react'
import { useDispatch } from 'react-redux'
import { Container, Grow } from '@material-ui/core'
// import useStyles from './styles'
import { PushToTalkButton, PushToTalkButtonContainer, ErrorPanel } from '@speechly/react-ui'
import { SpeechState, useSpeechContext } from '@speechly/react-client'
import { getProducts, getALLProducts } from '../../actions/products'

import AddProductToCurrentListForm from '../AddProductForm/AddProductToCurrentListForm'
import List from '../List/List'
import MyBar from '../AppBar/MyBar'

const AppList = () => {
    // const classes = useStyles()
    const { speechState } = useSpeechContext()
    const main = useRef(null)
    const dispatch = useDispatch()

    const executeScroll = () => main.current.scrollIntoView()

    useEffect(() => {
        if(speechState === SpeechState.Recording) {
            executeScroll()
        }
    }, [speechState])

    useEffect(() => {
        dispatch(getProducts())
    }, [dispatch])

    useEffect(() => {
        dispatch(getALLProducts())
    }, [dispatch])

    return (
        <Container maxWidth='sm'>

            <MyBar />

            <Grow in>
                <Container>
                    <AddProductToCurrentListForm position='sticky' className='not-scrolled'/>
                </Container>
            </Grow>

            <Grow in>
                <Container ref={main}>
                    <List />
                </Container>
            </Grow>

            <PushToTalkButtonContainer>
                <PushToTalkButton />
                <ErrorPanel />
            </PushToTalkButtonContainer>

        </Container>
    )
}

export default AppList