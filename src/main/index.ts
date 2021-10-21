import { app, BrowserWindow, ipcMain } from "electron";
import path from "path";
import { IPCEvent } from "../common/event";
import { getUrl } from "./getUrl";

function createWindow() {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, "./preload.js"),
    },
  });

  win.loadURL(getUrl("dist/index.html"));
}

app.whenReady().then(() => {
  createWindow();

  ipcMain.handle(IPCEvent.Add, (event, ...args) => {
    const i = args[0];
    console.log(`IPCEvent.Add ${args}`);
    return i + 1;
  });
});
