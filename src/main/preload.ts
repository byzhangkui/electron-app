import { contextBridge, ipcRenderer } from "electron";
import { IPCEvent } from "../common/event";

contextBridge.exposeInMainWorld("api", {
  add: async (i: number): Promise<number> => {
    return await ipcRenderer.invoke(IPCEvent.Add, i);
  },
});
