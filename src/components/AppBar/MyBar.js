import React from 'react'
import useStyles from './styles'
import { useSelector } from 'react-redux'
import { Typography, AppBar, Toolbar, IconButton } from '@material-ui/core'
import AddTaskOutlinedIcon from '@material-ui/icons/AddToHomeScreenOutlined'
// import AddTaskOutlinedIcon from '@mui/icons-material/AddTaskOutlined'

const MyBar = () => {
    const classes = useStyles()
    const currentListProductsLength = (useSelector((state) => state.currentlistproducts)).length
    return (
        <AppBar className = {classes.appBar} position='sticky' color='inherit' >
            <Toolbar>
                <IconButton href='/alerts' edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                    <AddTaskOutlinedIcon />
                </IconButton>
                <Typography className={classes.headerTextStyle}>Shopping List ({currentListProductsLength})</Typography>
            </Toolbar>
        </AppBar>
    )
}

export default MyBar
