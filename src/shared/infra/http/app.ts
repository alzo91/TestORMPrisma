import express, { NextFunction, Request, Response } from "express";
import dotenv from "dotenv";
import "express-async-errors";
import { router } from "./routes/index.routes";
import { AppError } from "@utils/error/AppError";
import listenDatabase from "@database/listenDatabase";
dotenv.config();

// (async () => await listenUsers())();
listenDatabase().then(() => console.log("init listenUsers"));
const app = express();

app.use(express.json());

app.use(router);

app.use((err: Error, request: Request, response: Response, _: NextFunction) => {
  if (err instanceof AppError) {
    return response.status(err.statusCode).json({ message: err.message });
  }
  return response
    .status(500)
    .json({ message: "Internal Server Error", status: "error" });
});

export { app };
