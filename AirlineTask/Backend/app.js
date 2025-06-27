import express from "express";
import cors from "cors";
import morgan from "morgan";
import cookieParser from "cookie-parser";


import { FRONTEND_URL } from "./config.js";

const app = express();

app.use(
  cors({
    credentials: true,
    origin: FRONTEND_URL,
  })
);
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ extended: true, limit: "50mb" }));
app.use(morgan("dev"));
app.use(cookieParser())



if (process.env.NODE_ENV === "production") {
    const path = await import("path");
    app.use(express.static("client/dist"));
  
    app.get("*", (req, res) => {
      console.log(path.resolve("client", "build", "index.html") );
      res.sendFile(path.resolve("client", "build", "index.html"));
    });
  }

  export default app;