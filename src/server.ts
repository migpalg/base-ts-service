import { Express, json, urlencoded } from "express";
import { info } from "./core/log";
import { config } from "./core/config";
import { router } from "./router";

/**
 * Handles when the app is listening to requests
 */
export function handleAppListen(): void {
  info(`Listening on *:${config.server.port}`);
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
