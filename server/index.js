import express from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import { userRoute, residencyRoute } from './routes/index.js'
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;
app.use(express.json())
app.use(cookieParser())
app.use(cors());

app.use('/api/user', userRoute);
app.use('/api/user', residencyRoute);



app.listen(PORT, () => {
    console.log("server is listening on port: ", PORT)
})

