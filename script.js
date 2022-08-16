const gameboard = (() => {

    let tileArray = [null,null,null,null,null,null,null,null,null];
    let reset = () => {gameboard.board = [null,null,null,null,null,null,null,null,null];};

    let build = () =>{
        const board = document.querySelector('.board');
        board.innerHTML = '';
        for(i=0;i<=8;i++){
        let tile = document.createElement("div");
        tile.innerText = gameboard.board[i];
        tile.classList.add("tile");
        tile.setAttribute('data',i);
        board.appendChild(tile);
        }
        let tiles = document.querySelectorAll("div.tile");
        tiles.forEach(tiles => {
            targetTile = tiles.getAttribute('data');
            tiles.addEventListener('click', function() {
                game.playTile(this.getAttribute('data'));
            })
            });
            
        }       

    return {
        board: tileArray,
        reset,
        build,
    }
})();

const game = (() => {
    let currentPlayer = 'X';
    let changePlayer = () => { 
        if(game.currentPlayer === 'X'){
            console.log('true')
            game.currentPlayer = 'O'
        } else {game.currentPlayer = 'X'}
    }
    let checkWin = () => {
        let t = gameboard.board
        if (t[0] == t[1] && t[1] == t[2] && t[0] !== null ){return alert (t[0] + ' won')}
        if (t[3] == t[4] && t[4] == t[5] && t[3] !== null ){return alert (t[3] + ' won')}
        if (t[6] == t[7] && t[7] == t[8] && t[6] !== null ){return alert (t[6] + ' won')}
        if (t[0] == t[3] && t[3] == t[6] && t[0] !== null ){return alert (t[0] + ' won')}
        if (t[1] == t[4] && t[4] == t[7] && t[1] !== null ){return alert (t[1] + ' won')}
        if (t[2] == t[5] && t[5] == t[8] && t[2] !== null ){return alert (t[2] + ' won')}
        if (t[0] == t[4] && t[4] == t[8] && t[0] !== null ){return alert (t[0] + ' won')}
        if (t[2] == t[4] && t[4] == t[6] && t[2] !== null ){return alert (t[2] + ' won')}
    }
    let playTile = (target) => { 
        if(gameboard.board[target] === null){
        gameboard.board[target] = game.currentPlayer;
        gameboard.build();
        game.changePlayer();
        game.checkWin();
    } else {alert('tile taken, jumbo')}

        }       

    return {
        playTile,
        changePlayer,
        currentPlayer,
        checkWin
    }
})();

gameboard.build();



