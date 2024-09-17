import dotenv from 'dotenv';
dotenv.config();
import  express from'express';
import  mongoose from'mongoose';
import  contactRoutes from'./routes/Contact.js';
import cors from 'cors';


 

const app = express();

// Middleware
 
app.use(express.json());

app.use(cors({
    origin: 'http://localhost:5173',
    
})
);


// MongoDB connection
const uri = process.env.MONGO_URI;
mongoose.connect(uri).then(() => {
    console.log('MongoDB connected');
}).catch(err => {
    console.log(err);
});

// Routes
app.use('/api/contact', contactRoutes);

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
