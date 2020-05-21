'use strict'

const MINE = '&#9786';
var gBoard;
var gSelectedElCell = null;


function initGame() {
    gBoard = buildBoard();
    renderBoard(gBoard);
    console.log(gBoard)
    // createMine(gBoard);

}

function buildBoard() {
    // build the board 4 * 4
    var board = [];
    for (var i = 0; i < 4; i++) {
        board[i] = []
        for (var j = 0; j < 4; j++) {
            // var piece = '';

            var cell = {
                minesAroundCount: 0,
                isShown: false,
                isMine: false,
                isMarked: false,
            }
            board[i][j] = cell;
            // var cell = { type: MINE, gameElement: null };

        }


    }
    board[0][3].isMine = true;
    board[1][2].isMine = true;
    console.table(board);
    return board;
}





function renderBoard(board) {
    var strHtml = '';
    for (var i = 0; i < board.length; i++) {
        var row = board[i];
        strHtml += '<tr>';
        for (var j = 0; j < row.length; j++) {
            // var cell = row[j];
            var cell = '';
            if (board[i][j].isMine === true) {
                cell = MINE

            }
            var className = 'black';
            var tdId = 'cell-' + i + '-' + j;
            strHtml += '<td id="' + tdId + '" onclick="cellClicked(this)" ' +
                'class="    ' + className + '">' + cell + '</td>';
        }
        strHtml += '</tr>';




    }
    var elMat = document.querySelector('.game-board');
    elMat.innerHTML = strHtml;

    
}

function cellClicked(elCell){

    for(var i=0;i<cell.length;i++)
if(cell[i]==isShown ){
continue;
 
}else  
break;





}







    console.log(elCell)
    console.log(elCell.id)
    
    
    // לתרגם את elcell.id לi,j
    
    //  לגשת לgbord [i][j]
    //  לשנות את isshown לtrue
}






// function check(){
    
    // if(===MINE){
        //     console.log('boom')
        // }
        
        // }
        
        
        
        
        
        
        
        // function cellClicked(elCell) {
            
            //     console.log('elCell.id: ', elCell.id);
            
            //     // while (elCell.classList.contains('mark')) {
                //     //     console.log('game over')
                //     return
                
                // }
                // var elCheck = document.querySelector('.MINE');
                // elCheck.innerHTML = strHtml
                
                
                // console.log(elCheck)
                
                
                // if (board[i][j] === elCheck) {
                //     console.log(boom)
                // }





