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

const AllProducts: React.FC = () => {
  const [companyName, setCompanyName] = useState<string>('');
  const [productName, setProductName] = useState<string>('');
  const [top, setTop] = useState<string>('');
  const [minPrice, setMinPrice] = useState<string>('');
  const [maxPrice, setMaxPrice] = useState<string>('');
  const [products, setProducts] = useState<Product[]>([]);
  const [page, setPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(1);
  const [searchTriggered , setSearchTriggered] = useState<boolean>(false);

  const fetchData = async () => {
    try {
      const url = `http://localhost:8000/test/companies/${companyName}/categories/${productName}/products`;
      const params = {
        top,
        minPrice,
        maxPrice,
        page: parseInt(top, 10) > 10? page : 1,
      };
      const response = await fetch(`${url}?${params}`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setProducts(data.products);
      setTotalPages(Math.ceil(data.totalItems / parseInt(top, 10)));
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleSearch = () => {
    setPage(1);
    setSearchTriggered(true);
    fetchData();
  };

  const handlePageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newPage = parseInt(event.target.value, 10);
    if (newPage >= 1 && newPage <= totalPages) {
      setPage(newPage);
      fetchData();
    }
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
        {searchTriggered && top && parseInt(top, 10) > 10 && (
          <Grid item xs={12} sx={{ mb: 2 }}>
            <Typography variant="body1" component="div">
              Page {page} of {totalPages}
            </Typography>
            <TextField
              type="number"
              value={page}
              onChange={handlePageChange}
              inputProps={{ min: 1, max: totalPages }}
            />
          </Grid>
        )}
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
}

export default AllProducts;