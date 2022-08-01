import { RequestHandler } from "express";

export function createHomeHandler(): RequestHandler {
  return (_, res) => {
    res.json({
      message: "hello world!",
    });
  };
}

export const homeHandler = createHomeHandler();
