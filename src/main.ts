import express from "express";
import { startServer } from "./server";

/**
 * Entry point of the application
 */
function main(): void {
  const app = express();

  startServer(app);
}

main();
