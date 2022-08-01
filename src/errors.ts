import { HttpErrorCode } from "./types";

/**
 * When an error code is not provided will throw an internal server error
 */
export const defaultErrorCode = HttpErrorCode.INTERNAL_SERVER_ERROR;

/**
 * Default error messages for application errors
 */
export const defaultMessages: Record<HttpErrorCode, string> = {
  [HttpErrorCode.BAD_REQUEST]: "Bad request",
  [HttpErrorCode.UNAUTHORIZED]: "You're not authorized to make this action",
  [HttpErrorCode.FORBIDDEN]: "Forbidden",
  [HttpErrorCode.NOT_FOUND]: "Not found",
  [HttpErrorCode.METHOD_NOT_ALLOWED]: "Method not allowed",
  [HttpErrorCode.IM_A_TEAPOD]: "I'm a teapod 🫖",
  [HttpErrorCode.TOO_MANY_REQUESTS]: "Too many requests",
  [HttpErrorCode.INTERNAL_SERVER_ERROR]: "Internal server error",
  [HttpErrorCode.NOT_IMPLEMENTED]: "Not implemented",
  [HttpErrorCode.SERVICE_UNAVAILABLE]: "Service unavailable",
};

/**
 * Describes an error thrown by the server
 */
export class ServiceError extends Error {
  /**
   * Current http error of the thrown error
   */
  public readonly errorCode: HttpErrorCode;
  public readonly message: string;

  constructor(errorCode?: HttpErrorCode, message?: string) {
    super(message || defaultMessages[errorCode]);
    this.errorCode = errorCode || defaultErrorCode;
    this.message = message || defaultMessages[this.errorCode];
  }
}
