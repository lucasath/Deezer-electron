const notify=require('./notify')
// Module to control the player
module.exports = {
    playPause(win){
        win.webContents.executeJavaScript(`
            document.querySelector('#page_player > div > div.player-controls > ul > li:nth-child(3) > button').click();
        `)
        this._notify(win);
    },
  
    prev(win){
        win.webContents.executeJavaScript(`
            document.querySelector('#page_player > div > div.player-controls > ul > li:nth-child(1) > div > button').click();
        `)
        this._notify(win);
    },
  
    next(win){
        win.webContents.executeJavaScript(`
            document.querySelector('#page_player > div > div.player-controls > ul > li:nth-child(5) > div > button').click();
        `)
        this._notify(win);
    },

    soundUp(win){
        win.webContents.executeJavaScript(`
            
        `)
    },

    soundDown(win){
        win.webContents.executeJavaScript(`

        `)
    },
    _notify(win){
        notify.notify(win);
    }

}