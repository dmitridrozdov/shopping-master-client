import React from 'react'
import useStyles from './styles'
import { useSelector } from 'react-redux'
import { Typography, AppBar, Toolbar, /*IconButton*/ } from '@material-ui/core'
// import Add from '@material-ui/icons/Add'

const MyBar = () => {
    const classes = useStyles()
    const currentListProductsLength = (useSelector((state) => state.currentlistproducts)).length
    return (
        <AppBar className = {classes.appBar} position='sticky' color='inherit' >
            <Toolbar>
                {/* <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                    <Add />
                </IconButton> */}
                <Typography className={classes.headerTextStyle}>Shopping List ({currentListProductsLength})</Typography>
            </Toolbar>
        </AppBar>
    )
}

export default MyBar
