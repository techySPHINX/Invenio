import bodyParser from "body-parser";
import dotenv from "dotenv";
import express from "express";
import helmet from "helmet";
import morgan from "morgan";
import cors from "cors"; 

import dashboardRoutes from "./routes/dashboardRoutes";
import expenseRoutes from "./routes/expenseRoutes";
import productRoutes from "./routes/productRoutes";
import userRoutes from "./routes/userRoutes";

/* Configurations */
dotenv.config();
const app = express();

app.use(cors({ origin: "http://localhost:3000", credentials: true }));

app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("common"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

/* ROUTES */
app.use("/dashboard", dashboardRoutes); // http://localhost:8000/dashboard
app.use("/products", productRoutes); // http://localhost:8000/products
app.use("/users", userRoutes); // http://localhost:8000/users
app.use("/expenses", expenseRoutes); // http://localhost:8000/expenses

/* SERVER */
const port = Number(process.env.PORT) || 3001;
app.listen(port, "0.0.0.0", () => {
  console.log(`🚀 Server running on http://localhost:${port}`);
});
