import { contextBridge, ipcRenderer } from "electron";
import { IPCEvent } from "../common/event";
  contextBridge.exposeInMainWorld("api", {
    add: () => {
      ipcRenderer.send(IPCEvent.Add, "add");
    }
  });


  declare global {
  interface Window {
  api: {
    add(): void;
  }
 }
}