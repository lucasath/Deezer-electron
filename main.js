// Modules to control application life and create native browser window
const {app, BrowserWindow, Menu, Tray } = require('electron')
const path = require('path')
const trayMenu = require('./tray')
const shortcuts= require('./shortcuts')


// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.

let mainWindow=null;
let tray=null;

function createWindow () {
  // Create the browser window.
  mainWindow = new BrowserWindow({
    icon: __dirname + '/icons/icon.png',
    width: 1000,
    height: 650,
    minWidth: 1000,
    minHeight: 650,
    webPreferences: {
      nodeIntegration:true,
    }
  })

  // and load the index.html of the app.
  mainWindow.loadURL('https://www.deezer.com/br/login')

  // Open the DevTools.
  mainWindow.webContents.openDevTools()
  
  mainWindow.on('close', () => {
    app.exit()
  })

  // Emitted when the window is closed.
  mainWindow.on('closed', function () {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    mainWindow = null
  })

  mainWindow.on('minimize',function(event){
    event.preventDefault();
    // This method will be hide to tray
    mainWindow.hide();
  });

  mainWindow.on('restore',function(event){
    event.preventDefault();
    // this method restore main window from the tray
    mainWindow.show();
    mainWindow.focus();
  });
}
// prevent multiple stances
const gotTheLock = app.requestSingleInstanceLock()
if (!gotTheLock) {
  app.quit()
} else {
  app.on('second-instance', (event, commandLine, workingDirectory) => {
    // Someone tried to run a second instance, we should focus our window.
    if (mainWindow) {
      if (mainWindow.isMinimized()) mainWindow.restore()
      mainWindow.focus()
    }
  })
}



// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', () => {
  // Create main Window
  createWindow();
  // load tray ico and menu tray ico
  tray= new Tray(__dirname + '/icons/icon.png');
  tray.setIgnoreDoubleClickEvents(true)
  
  tray.setContextMenu(trayMenu.geraTray(mainWindow));
  tray.setToolTip('Deezer');

  tray.on('click', () =>  mainWindow.restore());
    
  // load keyboard Shortcuts
  shortcuts.create(mainWindow);

  
})

// Quit when all windows are closed.
app.on('window-all-closed', function () {
  // On macOS it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') app.quit()
})

app.on('activate', function () {
  // On macOS it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (mainWindow === null) createWindow()
})

Menu.setApplicationMenu(null)

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.
