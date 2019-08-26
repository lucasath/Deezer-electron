var exe=false;
module.exports = {
    _create(window) {
    
        window.webContents.executeJavaScript(`
            
            notification = {
                title: 'Deezer',
                body: document.querySelector('#page_player > div > div.player-track > div > div.track-heading > div.track-title > div > div').textContent,
                icon: document.querySelector('#page_player > div > div.player-options > ul > li:nth-child(2) > button > figure > div > img').src
            };
                        
        `)  
           
    },
    notify(window){
        
        if(!exe){   
            exe=true; 
            setTimeout(()=>{ 
                this._update(window);
                window.webContents.executeJavaScript(`
                    myNotification = new Notification(notification.title,notification);
                    setTimeout(function() { myNotification.close() }, 2500);
                `)
                exe=false;
            },1500);
        }
        

    },
    _update(window){
    
        this._create(window);
        window.webContents.executeJavaScript(`
            notification.body= document.querySelector('#page_player > div > div.player-track > div > div.track-heading > div.track-title > div > div').textContent;
            notification.icon= document.querySelector('#page_player > div > div.player-options > ul > li:nth-child(2) > button > figure > div > img').src;
            `)
        
    }
}
