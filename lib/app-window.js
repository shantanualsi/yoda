const electron = require('electron')
const app = electron.app
const BrowserWindow = electron.BrowserWindow

const path = require('path')


const MAC_OS  = 'darwin'
const WINDOWS32 = 'win32'
const LINUX = 'linux'

var showMenu = process.platform !== WINDOWS32
const windowSize = { width: 1080, height: 720 }

const appWindow = new BrowserWindow({
  width: windowSize.width,
  height: windowSize.height,
  minWidth: 500,
  minHeight: 320,
  autoHideMenuBar: showMenu,
  webPreferences: {
    zoomFactor: 1.0,
    enableBlinkFeatures: 'OverlayScrollbars'
  },
  icon: path.resolve(__dirname, '../resources/app.png')
})


const url = path.resolve(__dirname, './app.html')
appWindow.loadURL('file://' + url)


app.on('activate',() => {
    if(appWindow === null) return null
    appWindow.show()
})


if (process.platform === MAC_OS) {
    appWindow.on('close', (e) => {
        e.preventDefault()
        if(appWindow.isFullScreen()) {
            appWindow.once('leave-full-screen', () => {
                appWindow.hide()
            })
            appWindow.setFullScreen(false)
        } else {
            appWindow.hide()
        }
    })

    app.on('before-quit', () => {
        appWindow.removeAllListeners()
    })
}


module.exports = appWindow



/**
 * TODO: 
 * 1. Customize configuration later
 * 2. Store Window size on resize
 */
