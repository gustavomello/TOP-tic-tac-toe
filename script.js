const Gameboard = (() => {

    let tileArray = [0,0,0,0,0,0,0,0,0];
    let reset = () => {Gameboard.board = [0,0,0,0,0,0,0,0,0];};
    let build = () =>{
        const board = document.querySelector('.board');
        board.innerHTML = '';
        for(i=0;i<=8;i++){
        let tile = document.createElement("div");
        tile.innerText = Gameboard.board[i];
        tile.classList.add("tile");
        tile.setAttribute('data',i);
        board.appendChild(tile);
        }
        }       

    return {
        board: tileArray,
        reset,
        build
    }
})();