import React from 'react';
import { Button, Container, Typography } from '@mui/material';
import Link from 'next/link';

export default function Home() {
  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
    <Typography variant="h4" gutterBottom>
      Home Page
    </Typography>
    <Typography variant="body1" gutterBottom>
      Welcome to the Home Page!
    </Typography>
    <Link href="/allproduct">
    <Button variant="contained">Go to All Products</Button>
    </Link>
  </Container>
  );
}
