import express from 'express';
import 'dotenv/config';
import companyRoutes from './routes/company.routes.js';
import cors from 'cors';

const app = express();
const port = process.env.PORT || 8000;

app.use(cors());

app.use(express.json());

app.use('/test', companyRoutes);

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});