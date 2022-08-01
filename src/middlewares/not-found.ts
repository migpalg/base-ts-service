import { ServiceError } from "../errors";
import { HttpErrorCode, Middleware } from "../types";

export const notFound: Middleware = (req, _res, _next) => {
  throw new ServiceError(
    HttpErrorCode.NOT_FOUND,
    `${req.method} "${req.path}" not found`,
  );
};
