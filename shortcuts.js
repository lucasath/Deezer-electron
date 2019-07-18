const { globalShortcut } = require('electron');
const player = require('./player')
//module to create keyboard shortcuts registers
module.exports = {
    create(mainWindow){
        globalShortcut.register('MediaPlayPause', ()=>{
            player.playPause(mainWindow); 
        }),
        
        globalShortcut.register('MediaPreviousTrack', ()=>{
            player.prev(mainWindow);  
        }),
        
        globalShortcut.register('MediaNextTrack', ()=>{
            player.next(mainWindow);
        })
    }
}
