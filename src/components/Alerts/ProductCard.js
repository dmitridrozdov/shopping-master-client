import React from 'react';
import { Card, CardContent, Typography } from '@material-ui/core/'

const ProductCard = ({ product, price, usualprice, colesprice }) => {
  return (
    <Card>
      <CardContent>
        <Typography variant="h5" component="div">
          {product}
        </Typography>
        <Typography variant="subtitle1" color="text.secondary">
          Price: {price}
        </Typography>
        <Typography variant="subtitle1" color="text.secondary">
          Usual Price: {usualprice}
        </Typography>
        <Typography variant="subtitle1" color="text.secondary">
          Coles Price: {colesprice}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default ProductCard;