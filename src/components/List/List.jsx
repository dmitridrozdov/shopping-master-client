import React from 'react'
import { Fade, List as MUList } from '@material-ui/core'
import useStyles from './styles'
import { useSelector } from 'react-redux'
import Category from './Category/Category'

const List = () => {
    const classes = useStyles()
    const currentListProducts = useSelector((state) => state.currentlistproducts)

    const transformToCategoryProductStructure = () => {
        const onlyUnique = (value, index, self) => {
            return self.indexOf(value) === index;
        }
        return currentListProducts.map(p => p.category).filter(onlyUnique)
    }

    const categoriesWithProducts = transformToCategoryProductStructure()

    return (
        <MUList className={classes.list}>
            {categoriesWithProducts.map(c => (
                <Fade in={true} key={c}>
                    <Category key={c} category={c}/>
                </Fade>
            ))}
        </MUList>
    )
}

export default List
