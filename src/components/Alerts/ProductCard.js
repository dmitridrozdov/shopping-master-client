import React from 'react';
import { Card, CardContent, Typography } from '@material-ui/core/'
import useStyles from './styles'

const ProductCard = ({ product, price, usualprice, colesprice }) => {
  const classes = useStyles()

  return (
    <Card>
      <CardContent>
        <Typography className={classes.product} variant="h5" component="div">
          {product}
        </Typography>
        <div className={classes.priceContainer}>
            <Typography className={classes.priceNormal} variant="subtitle1" color="secondary">
                Woolis Price: {price}
            </Typography>
            <Typography className={classes.priceNormal} variant="subtitle1" color="secondary">
                Coles Price: {colesprice}
            </Typography>
            <Typography className={classes.priceNormal} variant="subtitle1" color="secondary">
                Usual Price: {usualprice}
            </Typography>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductCard;