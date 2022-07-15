import express from "express";
import { connectDb } from "./core/db";
import { logger } from "./core/logger";
import { startServer } from "./server";

function handleAppCrash(reason: unknown): void {
  logger.error(reason as never);
}

/**
 * Entry point of the application
 */
async function main(): Promise<void> {
  // First initial database connection
  await connectDb();

  // Create an app with express
  const app = express();

  startServer(app);
}

main().catch(handleAppCrash);
