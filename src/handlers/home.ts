import { RequestHandler } from "express";
import { ServiceError } from "../errors";

export function createHomeHandler(): RequestHandler {
  return (_, res) => {
    throw new ServiceError();
  };
}

export const homeHandler = createHomeHandler();
