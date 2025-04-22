import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import morgan from "morgan";
import cors from "cors";
import helmet from "helmet";

import authRoute from "./auth/auth.route";
import { errorHandler } from "./middleware/errorHandler";

const app = express();

// Configuration
dotenv.config();
app.use(cors());
app.use(express.json());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("common"));
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());

//ROUTES

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use('/api/auth', authRoute)

//ERROR HANDLER
app.use(errorHandler);

// SERVER CONFIGURATION
const PORT = process.env.PORT || 3002;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
