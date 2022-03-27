import express from "express";
import db from "./config/database.js";
import productRoutes from "./routes/index.js";
import cors from "cors";

const app = express();

try {
    await db.authenticate();
    console.log('Database connected..');
} catch (error) {
    console.error('Cennection error:', error);
}

app.use(cors({credentials : true, origin : "http://localhost:3000"}));
app.use(express.json());
app.use('/product', productRoutes);

app.listen(5000, () => console.log('server running at port 5000'));