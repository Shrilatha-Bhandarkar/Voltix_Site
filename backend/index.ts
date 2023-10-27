import * as dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
const cors = require('cors');
import projectRoutes from "./routes/projectsRoutes";
import serviceRoutes from "./routes/servicesRoutes";
import testimonialRoutes from "./routes/testimonialRoutes";
import contactRoutes from "./routes/contactRoutes";
import userRoutes from "./routes/usersRoute";
// import routes from './routes/bucketUpload'

dotenv.config();
const app = express();
const port = process.env.PORT;

app.use(express.json());
app.use(cors());

const mongoURI = process.env.MONGO;

mongoose
  .connect(mongoURI as string)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.error("MongoDB connection error:", err);
  });

app.use("/papi", projectRoutes);
app.use("/sapi", serviceRoutes);
app.use("/tapi", testimonialRoutes);
app.use("/capi", contactRoutes);
app.use("/api", userRoutes);
app.use("/api",userRoutes);
app.use("/api", userRoutes);
// app.use("/api",routes)

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
