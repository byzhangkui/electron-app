import { app, BrowserWindow, ipcMain } from 'electron';
import path from 'path';
import { IPCEvent } from '../common/event';
import { getUrl } from './getUrl';

function createWindow() {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, './preload.ts'),
    }
  });

  win.loadURL(getUrl('dist/index.html'));
}

app.whenReady().then(() => {
  createWindow();

  ipcMain.on(IPCEvent.Add, (event, ...args) => {
    console.log(`IPCEvent.Add ${JSON.stringify(event)}`);

  });
});