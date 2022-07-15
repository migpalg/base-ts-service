import winston from "winston";
import { config } from "./config";

export const logger = winston.createLogger({
  transports: [
    new winston.transports.Console(),

    /**
     * The server errors will be placed in this file for error debugging in
     * production
     * TODO: Due this is a microservices approach needs to be placed in a db
     */
    new winston.transports.File({
      filename: `logs/${config.server.serviceId}.log`,
    }),
  ],

  format: winston.format.combine(
    winston.format.label({
      label: config.server.serviceId,
    }),
    winston.format.timestamp({
      format: "MMM-DD-YYYY HH:mm:ss",
    }),
    winston.format.printf(
      (info) =>
        `${info.level}: (${info.label}) [${info.timestamp}] ${info.message}`,
    ),
  ),
});
