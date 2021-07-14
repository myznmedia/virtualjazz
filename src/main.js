const { app, BrowserWindow } = require('electron');

let mainWindow = null;

app.on('ready', () => {
  console.log('Welcome to Virtual Jazz');
  mainWindow = new BrowserWindow({
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
      enableRemoteModule: true,
    }
  });
  mainWindow.webContents.loadFile('static/index.html');
});

