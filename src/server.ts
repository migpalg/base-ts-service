import { Express, json, urlencoded } from "express";
import { logger } from "./core/logger";
import { config } from "./core/config";
import { router } from "./router";
import { error } from "./middlewares/errors";
import { notFound } from "./middlewares/not-found";

/**
 * Handles when the app is listening to requests
 */
export function handleAppListen(): void {
  logger.info(`Listening on *:${config.server.port}`);
}

/**
 * Applies all server configuration and returns a configured app
 * @param param0
 */
export function startServer(app: Express): void {
  // Parse body from requests
  app.use(json());
  app.use(urlencoded({ extended: false }));

  // Use application routes
  app.use(router);

  app.use(notFound);

  // Handle all application errors
  app.use(error);

  // Listen to configured port
  app.listen(config.server.port, handleAppListen);
}
