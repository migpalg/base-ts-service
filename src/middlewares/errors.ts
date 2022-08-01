import { ServiceError } from "../errors";
import { ErrorMiddleware } from "../types";

export const error: ErrorMiddleware<ServiceError> = (error, req, res, next) => {
  if (error.errorCode) {
    res.status(error.errorCode).json({
      error: error.message,
    });

    return;
  }

  console.log(error);

  next();
};
