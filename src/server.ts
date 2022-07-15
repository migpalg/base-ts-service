import { Express, json, urlencoded } from "express";
import { logger } from "./core/logger";
import { config } from "./core/config";
import { router } from "./router";

/**
 * Handles when the app is listening to requests
 */
export function handleAppListen(): void {
  /* logger.log({
    message: `Listening on *:${config.server.port}`,
    level: "info",
  }); */
  logger.info(`Listening on *:${config.server.port}`);
}

/**
 * Applies all server configuration and returns a configured app
 * @param param0
 */
export function startServer(app: Express): void {
  app.use(json());
  app.use(urlencoded({ extended: false }));

  app.use(router);

  app.listen(config.server.port, handleAppListen);
}
