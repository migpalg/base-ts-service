import { NextFunction, Request, Response } from "express";

export type Middleware = (
  req: Request,
  res: Response,
  next: NextFunction,
) => void;

export type ErrorMiddleware<T = unknown> = (
  error: T,
  req: Request,
  res: Response,
  next: NextFunction,
) => void;

export enum HttpCode {
  OK = 200,
  CREATED = 201,
  MULTIPLE_CHOICE = 300,
  MOVED_PERMANENTY = 301,
}

export enum HttpErrorCode {
  BAD_REQUEST = 400,
  UNAUTHORIZED = 401,
  FORBIDDEN = 403,
  NOT_FOUND = 404,
  METHOD_NOT_ALLOWED = 405,
  IM_A_TEAPOD = 418,
  TOO_MANY_REQUESTS = 429,
  INTERNAL_SERVER_ERROR = 500,
  NOT_IMPLEMENTED = 501,
  SERVICE_UNAVAILABLE = 503,
}
