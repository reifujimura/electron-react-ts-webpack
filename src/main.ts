import { BrowserWindow, app, session } from "electron";
import path from "path";

let mainWindow: BrowserWindow = null;

const DistDirectory = path.resolve(app.getAppPath(), "dist");

app.on("ready", () => {
  mainWindow = new BrowserWindow({
    webPreferences: {
      nodeIntegration: false,
      preload: path.resolve(DistDirectory, "index.js")
    }
  });
  if (process.env.NODE_ENV === "development") {
    mainWindow.webContents.openDevTools({ mode: "detach" });
  }
  mainWindow.loadFile(path.resolve(DistDirectory, "index.html"));
  mainWindow.on("close", () => {
    mainWindow = null;
  });
});

app.on("window-all-closed", () => {
  session.defaultSession.clearCache();
  app.quit();
});
