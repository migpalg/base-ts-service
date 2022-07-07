import { Router } from "express";

export const router = Router().get("/", (_, res) => {
  res.send({
    message: "Hello world!",
  });
});
