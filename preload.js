const { contextBridge, ipcRenderer } = require('electron')
// import { contextBridge } from "electron"

contextBridge.exposeInMainWorld('versions', {
  node: () => process.versions.node,
  chrome: () => process.versions.chrome,
  electron: () => process.versions.electron,
  ping: () => ipcRenderer.invoke('ping'),
  halo: () => baru(),
  // we can also expose variables, not just functions
})

function baru() {
  return 'ini adalah pesan dari server'
}