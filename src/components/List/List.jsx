import React from 'react'
import { Fade, List as MUList } from '@material-ui/core'
import useStyles from './styles'
import { useSelector } from 'react-redux'
import Category from './Category/Category'
import { RotateSpinner } from 'react-spinners-kit'

const List = () => {
    const classes = useStyles()
    const currentListProducts = useSelector((state) => state.currentlistproducts)

    const getCategories = () => {
        const onlyUnique = (value, index, self) => {
            return self.indexOf(value) === index
        }
        return currentListProducts.map(p => p.category).filter(onlyUnique)
    }

    const categories = getCategories()

    return (
        !categories.length ? <RotateSpinner color="#7a34eb"/> : (
            <MUList className={classes.list}>
                {categories.sort().map(c => (
                    <Fade in={true} key={c}>
                        <Category key={c} category={c}/>
                    </Fade>
                ))}
            </MUList>
        )
    )
}

export default List
