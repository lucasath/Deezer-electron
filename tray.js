const { Menu } = require('electron');
const player = require('./player');

module.exports = {
    // This method is the tray menu
    geraTray(win){
        const contextMenu = Menu.buildFromTemplate([
            { label: 'Deezer', type: 'normal',
                click:()=>{
                    win.restore();
                }
            },
            { label: 'Pause/Play', type: 'normal',
                click:()=>{
                    player.playPause(win);                    
                }
            },
            { label: 'Prev', type: 'normal',
                click:()=>{
                    player.prev(win);
                }
            },
            { label: 'Next', type: 'normal',
                click:()=>{
                    player.next(win);
                }
            },
            { label: 'Close', type: 'normal',
                click:() => {
                    win.close();
                }
            }
        ])

        return contextMenu;
    }
}