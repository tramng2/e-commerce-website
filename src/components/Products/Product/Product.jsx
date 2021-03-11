import React from 'react'
import { Card, CardMedia, CardContent, CardActions, Typography, IconButton } from '@material-ui/core';
import { AddShoppingCart } from '@material-ui/icons';
import useStyles from './styles';

function Product({ product, onAddToCart }) {
    const classes = useStyles();
    return (
        <Card className={classes.root}>
            <CardMedia className={classes.media} image={product.media.source} title={product.name} />
            <CardContent>
                <div className={classes.cardContent}>
                    <Typography variant="subtitle1" gutterBottom>
                        {product.name}
                    </Typography>
                </div>
                <div className={classes.cardDesc}>
                    <Typography variant="h6" >
                        {product.price.formatted_with_symbol}
                    </Typography>
                    <Typography dangerouslySetInnerHTML={{ __html: product.description }} variant="body2" className={classes.typographyStyle} color="textSecondary" />
                </div>

            </CardContent>
            <CardActions disableSpacing className={classes.cardActions}>
                <IconButton arial-label="Add to Cart" onClick={() => onAddToCart(product.id, 1)}>
                    <AddShoppingCart />
                </IconButton>
            </CardActions>

        </Card>
    )
}

export default Product
