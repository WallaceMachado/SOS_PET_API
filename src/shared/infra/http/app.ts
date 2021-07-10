import "reflect-metadata";
import express, { NextFunction, Request, Response } from 'express';

import "express-async-errors"
import { errors } from 'celebrate';
import swaggerUI from 'swagger-ui-express';
import { router } from "./routes";

import createConnection from "../typeorm";

import "../../../../src/shared/container";
import { AppError } from "../../../shared/errors/AppError";
import swaggerFile from '../../../swagger.json';
import upload from "../../../config/upload";


createConnection();
const app = express();


app.use(express.json());

app.use(function (req, res, next) {

  // Website you wish to allow to connect
  res.setHeader('Access-Control-Allow-Origin', '*');

  // Request methods you wish to allow
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

  // Request headers you wish to allow
  res.setHeader("Access-Control-Allow-Headers", "Access-Control-Allow-Headers, Authorization, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers");

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader('Access-Control-Allow-Credentials', 'true');

  // Pass to next layer of middleware
  next();
});


app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerFile));
app.use("/avatar", express.static(`${upload.tmpFolder}/avatar`));
app.use(router);


app.use(errors());
app.use((err: Error, request: Request, response: Response, next: NextFunction) => {
  if (err instanceof AppError) {
    return response.status(err.statusCode).json({
      message: err.message
    })
  }

  return response.status(500).json({
    status: "error",
    message: `Internal server error - ${err.message}`,
  });
})


export { app }