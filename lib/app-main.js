const electron = require('electron')
const app = electron.app
const Menu = electron.Menu

const MAC_OS  = 'darwin'
const WINDOWS32 = 'win32'
const LINUX = 'linux'

var appWindow = null

app.on('ready', () => {
    appWindow = require('./app-window')

    //TODO: Can set menus here
})

app.on('window-all-closed', () => {
    if (process.platform !== MAC_OS) {
        app.quit()
    }
})