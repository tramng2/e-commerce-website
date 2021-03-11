import React from 'react';
import { Typography, Button, Card, CardActions, CardContent, CardMedia } from '@material-ui/core';
import useStyles from './styles'

function CartItem({ item, onUpdateCartQty, onRemoveFromCart }) {
    const classes = useStyles();
    return (
        <Card className="cart-item">
            <CardMedia image={item.media.source} alt={item.name} className={classes.media} />
            <CardContent>
                <div className={classes.cardContent}>
                    <Typography variant="subtitle1" gutterBottom>{item.name} </Typography>
                </div>
                <Typography variant="h6">{item.line_total.formatted_with_symbol}</Typography>
            </CardContent>
            <CardActions className={classes.cardActions}>
                <div className={classes.buttons}>
                    <Button type="button" size="small" onClick={() => onUpdateCartQty(item.id, item.quantity - 1)}>-</Button>
                    <Typography>&nbsp;{item.quantity}&nbsp;</Typography>
                    <Button type="button" size="small" onClick={() => onUpdateCartQty(item.id, item.quantity + 1)}>+</Button>
                </div>
                <Button variant="contained" type="button" color="secondary" onClick={ () => onRemoveFromCart(item.id)}>Remove</Button>
            </CardActions>
        </Card>
    )
}

export default CartItem;
