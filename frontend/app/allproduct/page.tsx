"use client"
import React, { useState } from 'react';
import { Container, Grid, Card, CardContent, Typography, TextField, Button } from '@mui/material';

interface Product {
  productName: string;
  price: number;
  rating: number;
  discount: number;
  availability: string;
}

const AllProductsPage: React.FC = () => {
  const [companyName, setCompanyName] = useState<string>('');
  const [productName, setProductName] = useState<string>('');
  const [top, setTop] = useState<string>('');
  const [minPrice, setMinPrice] = useState<string>('');
  const [maxPrice, setMaxPrice] = useState<string>('');
  const [products, setProducts] = useState<Product[]>([]);

  const fetchData = async () => {
    try {

      const url = `http://localhost:8000/test/companies/${companyName}/categories/${productName}/products?top=${top}&minPrice=${minPrice}&maxPrice=${maxPrice}`;
      
      const response = await fetch(url);
      
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      
      const data = await response.json();
      setProducts(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleSearch = () => {
    fetchData();
  };

  return (
    <div className='bg-white text-black'>
      <Container maxWidth="lg" sx={{ py: 4 }}>
        <Typography variant="h4" gutterBottom>
          All Products
        </Typography>
        <Grid container spacing={3} sx={{ mb: 2 }}>
          <Grid item xs={12} sm={6} md={4}>
            <TextField
              fullWidth
              label="Company Name"
              value={companyName}
              onChange={(e) => setCompanyName(e.target.value)}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <TextField
              fullWidth
              label="Product Name"
              value={productName}
              onChange={(e) => setProductName(e.target.value)}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <TextField
              fullWidth
              label="Top"
              value={top}
              onChange={(e) => setTop(e.target.value)}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <TextField
              fullWidth
              label="Min Price"
              value={minPrice}
              onChange={(e) => setMinPrice(e.target.value)}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <TextField
              fullWidth
              label="Max Price"
              value={maxPrice}
              onChange={(e) => setMaxPrice(e.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <Button variant="contained" onClick={handleSearch}>Search</Button>
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          {products.map((product, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card>
                <CardContent>
                  <Typography variant="h6" component="div" gutterBottom>
                    {product.productName}
                  </Typography>
                  <Typography variant="body1" component="div">
                    Price: ${product.price}
                  </Typography>
                  <Typography variant="body1" component="div">
                    Rating: {product.rating}
                  </Typography>
                  <Typography variant="body1" component="div">
                    Discount: {product.discount}%
                  </Typography>
                  <Typography variant="body1" component="div">
                    Availability: {product.availability}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
};

export default AllProductsPage;