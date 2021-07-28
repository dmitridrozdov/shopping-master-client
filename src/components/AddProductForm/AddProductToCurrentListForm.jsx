import React, { useEffect, useState, useCallback } from 'react'
import { Typography, Grid, TextField, Button } from '@material-ui/core'
import useStyles from './styles'
import { useSpeechContext } from '@speechly/react-client'
import { useDispatch } from 'react-redux'
import { createProduct } from '../../actions/products'
import { useSelector } from 'react-redux'
import CustomizedSnackbar from '../CustomaziedSnackBar/CustomizedSnackbar'

const AddProductToCurrentListForm = () => {
    const classes = useStyles()
    const dispatch = useDispatch()
    const { segment } = useSpeechContext()
    const [productData, setProductData] = useState({ category: '', product: '', picture: '' })
    const currentListProducts = useSelector(state => state.products)
    const [open, setOpen] = useState(false)
    const [severity, setSeverity] = useState('success')
    const [text, setText] = useState('')

    const isProductUnique = useCallback((product) => {
        const products = currentListProducts.map(p => p.product)
        return !(products.indexOf(product) >= 0)
    }, [currentListProducts])

    const setSuccessMessage = (product) => {
        setOpen(true)
        setSeverity('success')
        setText('Product ' + product + ' added to the list')
    }

    const setWarningMessage = (product) => {
        setOpen(true)
        setSeverity('warning')
        setText('Product ' + product + ' duplicated')
    }

    useEffect(() => {
        if(segment) {
            segment.words.forEach((p) => {
                if(segment.isFinal) {
                    console.log('Product is: ' + p.value)
                    if(isProductUnique(p.value)) {
                        setSuccessMessage(p.value)
                        dispatch(createProduct({ category: 'test', product: p.value, picture: 'test' }))
                    } 
                    else 
                        setWarningMessage(p.value)
                }
            })
            if(segment.isFinal) segment.words.length = 0
        }
    }, [segment, dispatch, isProductUnique])

    const handleSubmit = (e) => {
        console.log(productData)
        e.preventDefault()
        const product = productData.product.toUpperCase()
        if(isProductUnique(product)) {
            setSuccessMessage(product)
            dispatch(createProduct({ ...productData, product: product }))
        } 
        else
            setWarningMessage(product)
        clear()
    }

    const clear = () => {
        setProductData({ category: '', product: '', picture: '' })
    }

    return (
        <Grid container spacing={2}>
            <CustomizedSnackbar open={open} setOpen={setOpen} severity={severity} text={text}/>
            <Grid item xs={6}>
                <TextField id="standard-basic" label="Product" className={classes.inputItem} InputProps={{ className: classes.inputTextStyle }}
                    value={productData.product} 
                    onChange={(e) => setProductData({ ...productData, product: e.target.value })}
                />
            </Grid>
            
            <Grid item xs={6}>
                <Button className={classes.button} variant='outlined' color='primary' disableElevation type='submit' fullWidth
                    onClick={ handleSubmit }
                    disabled={productData.product === '' ? true : false} >
                        Add product
                </Button>
            </Grid>
 
            <Grid item xs={12}>
                <Typography align='center' gutterBottom className={classes.textStyle}>
                    { segment && segment.words.map((w) => w.value).join(" ") }
                </Typography>
            </Grid>
        </Grid>
    )
}

export default AddProductToCurrentListForm
