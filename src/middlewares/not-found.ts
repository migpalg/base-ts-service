import { ServiceError } from "../errors";
import { HttpErrorCode, Middleware } from "../types";

export const notFound: Middleware = (_req, _res, _next) => {
  throw new ServiceError(HttpErrorCode.NOT_FOUND);
};
