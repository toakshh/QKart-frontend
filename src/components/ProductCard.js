import { AddShoppingCartOutlined } from "@mui/icons-material";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Rating,
  Typography,
  CardActionArea
} from "@mui/material";
import React from "react";
import "./ProductCard.css";

const ProductCard = ({ product, handleAddToCart }) => {
  return (
    
    <Card className="card">
      <CardActionArea>
        <CardMedia
          component="img"
          height="220"
          image={product.image}
          alt={product.name}
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
            {product.name}
          </Typography>
          <Typography variant="p" >
          {<b>${product.cost}</b>}
          </Typography>
        </CardContent>
      </CardActionArea>
      <Typography component="legend">
          <Rating name="read-only" value={product.rating} precision={0.5} readOnly />
          </Typography>
      <CardActions >
        <Button fullWidth={true} variant="contained" className="button" color="primary" onClick={handleAddToCart}>
          <AddShoppingCartOutlined />ADD TO CART
        </Button>
      </CardActions>
      </Card>
      
  );
};

export default ProductCard;
