module.exports = {
    create(window) {
        window.webContents.executeJavaScript(`
            let notification = {
                title: 'Deezer',
                body: document.querySelector('#page_player > div > div.player-track > div > div.track-heading > div.track-title > div > div > div:nth-child(1) > a:nth-child(1)').textContent,
                icon: document.querySelector('#page_player > div > div.player-options > ul > li:nth-child(2) > button > figure > div > img').src
            }
            
        `)     
    },
    notify(window){
        window.webContents.executeJavaScript(`
            let myNotification = new Notification(notification.title,notification)
        `)
    }
}
