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

    useEffect(() => {
        if(segment) {
            segment.words.forEach((p) => {
                if(segment.isFinal) {
                    const product = p.value.toLowerCase().trim()
                    if(isProductUnique(product)) {
                        setSuccessMessage(product)
                        const category = getCategoryForProduct(product)
                        dispatch(createProduct({ category: category, product: product, picture: 'test' }))
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
        const product = productData.product.toLowerCase().trim()
        if(isProductUnique(product)) {
            setSuccessMessage(product)
            const category = getCategoryForProduct(product)
            dispatch(createProduct({ ...productData, product: product, category: category }))
        } 
        else
            setWarningMessage(product)
        clear()
    }

    const clear = () => {
        setProductData({ category: '', product: '', picture: '' })
    }

    const searchProducts = (e) => {
        setProductData({ ...productData, product: e.target.value })
        const currentLenght = e.target.value.length
        if(currentLenght > 0) {
            setFetchedProducts(products.filter(p => p.product.slice(0, currentLenght) === e.target.value).map(p => p.product))
        } else {
            setFetchedProducts([])
        }
        // const fetchProducts = products.filter(p => p.product.slice(0, currentLenght) === e.target.value)
        // console.log(fetchProducts.map(p => p.product))
        console.log(fetchedProducts)
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
 
            <Grid item xs={12}>
                <Typography align='center' gutterBottom className={classes.textStyle}>
                    {/* { segment && segment.words.map((w) => w.value.toLowerCase()).join(" ") } */}
                    {
                        
                    }
                </Typography>
            </Grid>
        </Grid>
    )
}

export default AddProductToCurrentListForm
