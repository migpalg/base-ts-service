import { Router } from "express";
import { handlers } from "./handlers";

export const router = Router()
  // Index response
  .get("/", handlers.homeHandler);
