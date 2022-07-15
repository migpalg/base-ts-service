import { RequestHandler } from "express";

export function createHomeHandler(): RequestHandler {
  return (_, res) => {
    res.json({
      message: "Hello world!",
    });
  };
}

export const homeHandler = createHomeHandler();
