import mongoose from "mongoose";
import { config } from "./config";

/**
 * Connects to the database
 */
export function connectDb(): Promise<typeof mongoose> {
  return mongoose.connect(config.db.url);
}
