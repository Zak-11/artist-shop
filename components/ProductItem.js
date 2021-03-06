import {
    Button,
    Card,
    CardActionArea,
    CardActions,
    CardContent,
    CardMedia,
    Typography,
} from '@material-ui/core';
import React from 'react';
import NextLink from 'next/link';


export default function ProductItem({ product, addToCartHandler }) {
    return (
        <Card>
            <NextLink href={`/product/${product.slug}`} passHref>
                <CardActionArea>
                    <CardMedia
    component="img"
    image={product.image}
    title={product.name}
    />
                    <CardContent>
                        <Typography>{product.name}</Typography>

                    </CardContent>
                </CardActionArea>
            </NextLink>
            <CardActions>
                <Typography>${product.price}</Typography>
                <Button
                    size="small"
                    color="primary"
                    onClick={() => addToCartHandler(product)}
                >
                    Add to cart
                </Button>
            </CardActions>
        </Card>
    );
}