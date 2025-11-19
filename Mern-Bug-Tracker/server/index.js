import express from 'express';
import dotenv from 'dotenv';
import helmet from 'helmet';
import cors from 'cors';
import morgan from 'morgan';
import connectDB from './src/config/db.js';
import bugRoutes from './src/routes/bugs.js';
import errorHandler from './src/middleware/errorHandler.js';


dotenv.config();
const PORT = process.env.PORT || 5000;
const app = express();


// Connect DB
connectDB();


// Middleware
app.use(helmet());
app.use(cors());
app.use(express.json({ limit: '5mb' }));
app.use(morgan(process.env.NODE_ENV === 'production' ? 'combined' : 'dev'));


// Routes
app.use('/api/bugs', bugRoutes);


// Health check
app.get('/health', (req, res) => res.status(200).json({ status: 'ok' }));


// Error handler
app.use(errorHandler);


const server = app.listen(PORT, () => {
console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`);
});


export default app; // for testing
