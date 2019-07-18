// Module to control the player
module.exports = {
    playPause(win){
        win.webContents.executeJavaScript(`
            document.querySelector('#page_player > div > div.player-controls > ul > li:nth-child(3) > button').click();
        `)
    },
  
    prev(win){
        win.webContents.executeJavaScript(`
            document.querySelector('#page_player > div > div.player-controls > ul > li:nth-child(1) > div > button').click();
        `)
    },
  
    next(win){
        win.webContents.executeJavaScript(`
            document.querySelector('#page_player > div > div.player-controls > ul > li:nth-child(5) > div > button').click();
        `)
    }
}