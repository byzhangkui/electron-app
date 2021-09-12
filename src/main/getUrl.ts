import { app } from "electron";
import * as path from 'path';
import { isDev } from './env';

export function getUrl(relativePath: string): string {
  if (isDev) {
    console.log(`http://localhost:8099/${relativePath}`);
    return `http://localhost:8099/${relativePath}`;
  }
  return path.join(app.getAppPath());
}