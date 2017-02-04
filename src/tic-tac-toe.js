class TicTacToe {
    constructor() {
        this.currentPlayer = 'x';
        this.field = [
                      [null, null, null],
                      [null, null, null],
                      [null, null, null]
                     ];
        this.winConditions = [
                            [[0,0],[0,1],[0,2]],
                            [[0,0],[1,0],[2,0]],
                            [[0,0],[1,1],[2,2]],
                            [[1,0],[1,1],[1,2]],
                            [[0,1],[1,1],[2,1]],
                            [[2,0],[1,1],[0,2]],
                            [[2,0],[2,1],[2,2]],
                            [[0,2],[1,2],[2,2]],
                            ];        
    }

    getCurrentPlayerSymbol() {
        return this.currentPlayer;
    }

    nextTurn(rowIndex, columnIndex) {
        if (!this.field[rowIndex][columnIndex]){
            this.field[rowIndex][columnIndex] = this.currentPlayer;
            this.currentPlayer = this.currentPlayer === 'x' ? 'o' : 'x';
        }
    }

    isFinished() {
        if(this.getWinner() || this.isDraw()){
            return true;
        } else {
            return false;
        }

    }

    getWinner() {
        if (this.checkWinForChar('x')){
            return 'x';
        } else if (this.checkWinForChar('o')){
            return 'o';
        } else {
            return null;
        }
    }



    checkWinForChar(character) {
        for (var i = 0; i < this.winConditions.length; i++){
            if (this.checkWinConditionForChar(character, this.winConditions[i])){
                return true;
            }
        }
        return false;
    }

    checkWinConditionForChar(character, winCondition){
        for(var i = 0; i < winCondition.length; i++){
            if(this.field[winCondition[i][0]][winCondition[i][1]] === character){
                continue;
            } else {
                return false;
            }
        }
        return true;

    }

    noMoreTurns() {
        for(var i = 0; i<this.field.length; i++){
            for(var j = 0; j<this.field[0].length; j++){
                if(!this.field[i][j]){
                    return false;
                }
            }
        }
        return true;   
    }

    isDraw() {
        if (this.noMoreTurns()&& !this.getWinner()) {
            return true
        } else {
            return false
        };
    }

    getFieldValue(rowIndex, colIndex) {
        return this.field[rowIndex][colIndex];
    }
}

module.exports = TicTacToe;
