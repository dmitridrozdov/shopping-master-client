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
    const [productData, setProductData] = useState({ category: '', product: '', wid: '' })
    const currentListProducts = useSelector(state => state.currentlistproducts)
    const products = useSelector((state) => state.products) //all products with categoryes
    const [open, setOpen] = useState(false)
    const [severity, setSeverity] = useState('success')
    const [text, setText] = useState('')
    const [fetchedProducts, setFetchedProducts] = useState([])

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

    const getCategoryForProduct = (product) => {
        const category = products
            .map(p => {if(p.product === product) return p.category; else return ''})
            .filter(c => {return c !== ''})
        if(category.length === 1)
            return category[0]
        else if(category.length > 1)
            return 'product duplicated'
        else
            return 'not classified'
    }

    const getWIDForProduct = (product) => {
        const pJson = products.filter(p => p.product === product)
        if(pJson.length > 0) return pJson[0].wid
        else return ''
    }

    useEffect(() => {
        if(segment) {
            segment.words.forEach((p) => {
                if(segment.isFinal) {
                    const product = p.value.toLowerCase().trim()
                    if(isProductUnique(product)) {
                        setSuccessMessage(product)
                        const category = getCategoryForProduct(product)
                        const wid = getWIDForProduct(product)
                        dispatch(createProduct({ category: category, product: product, wid: wid }))
                    } 
                    else 
                        setWarningMessage(p.value)
                }
            })
            if(segment.isFinal) segment.words.length = 0
        }
    }, [segment, dispatch, isProductUnique])

    const handleSubmit = (e) => {
        e.preventDefault()
        const product = productData.product.toLowerCase().trim()
        if(isProductUnique(product)) {
            setSuccessMessage(product)
            const category = getCategoryForProduct(product)
            const wid = getWIDForProduct(product)
            dispatch(createProduct({ ...productData, product: product, category: category, wid: wid }))
        } 
        else
            setWarningMessage(product)
        clear()
    }

    const handleSubmitFetchedProduct = (p) => {
        if(isProductUnique(p.product)) {
            setSuccessMessage(p.product)
            const category = getCategoryForProduct(p.product)
            const wid = getWIDForProduct(p.product)
            dispatch(createProduct({ ...productData, product: p.product, category: category, wid: 'uu ' }))
        } 
        else
            setWarningMessage(p.product)
        clear()      
    }

    const clear = () => {
        setProductData({ category: '', product: '', wid: '' })
        setFetchedProducts([]) 
    }

    const searchProducts = (e) => {
        setProductData({ ...productData, product: e.target.value })
        const currentLenght = e.target.value.length
        if(currentLenght > 0) {
            setFetchedProducts(products.filter(p => p.product.slice(0, currentLenght) === e.target.value).map(p => p.product))
        } else {
            setFetchedProducts([])
        }
    }


    return (
        <Grid container spacing={2}>
            <CustomizedSnackbar open={open} setOpen={setOpen} severity={severity} text={text}/>
            <Grid item xs={6}>
                <TextField id="standard-basic" label="Product" className={classes.inputItem} InputProps={{ className: classes.inputTextStyle }}
                    value={productData.product} 
                    onChange={(e) => searchProducts(e)}
                />
            </Grid>
            
            <Grid item xs={6}>
                <Button className={classes.button} variant='contained' color='primary' type='submit' fullWidth
                    onClick={ handleSubmit }
                    disabled={productData.product === '' ? true : false} 
                    disableRipple={productData.product === '' ? true : false} 
                >
                        Add product
                </Button>
            </Grid>

            { fetchedProducts.length === 0 ? null :
                <Grid item xs={12}>
                    <Typography align='center' gutterBottom className={classes.textStyle}>
                        { fetchedProducts.slice(0,10).map(product => (
                            <Button 
                                variant='contained'
                                className={classes.fetchedProductsbutton}
                                onClick = {(e) => handleSubmitFetchedProduct({product}) }
                                key = {product}
                            >
                                    {product}
                            </Button>
                        )) }
                    </Typography>
                </Grid>
            }
            { !segment ? null : 
                <Grid item xs={12}>
                    <Typography align='center' gutterBottom className={classes.textStyle}>
                        { segment && segment.words.map((w) => w.value.toLowerCase()).join(" ") }
                    </Typography>
                </Grid>
            }

            
        </Grid>
    )
}

export default AddProductToCurrentListForm
