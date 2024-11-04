import express from 'express';
import { PORT } from './config/constants';
import rebookRoutes from './routes/rebookRoutes';

const app = express();

app.use(express.json());
app.use('/api', rebookRoutes);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});