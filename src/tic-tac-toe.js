class TicTacToe {
    constructor() {
        this.mas = [[null, null, null],
                    [null, null, null],
                    [null, null, null]];

        this.vall = 1;
        this.next_vall = 'x';
    }

    getCurrentPlayerSymbol() {
    //should return x or o
    return this.next_vall;
    }

    nextTurn(rowIndex, columnIndex) {
    //should properly update class state (change current player, update marks storage etc.)
    if((this.vall==0)&&(this.mas[rowIndex][columnIndex])==null){
        this.mas[rowIndex][columnIndex] = 'o';
        this.vall = 1;
        this.next_vall = 'x';
    }else if((this.vall==1)&&(this.mas[rowIndex][columnIndex])==null){
        this.mas[rowIndex][columnIndex] = 'x';
        this.vall = 0;
        this.next_vall = 'o';
    }
    }

    isFinished() {
    //should return true if game is finished (e.g. there is a winner or it is a draw)
        if((this.mas[0][0]=='o')&&(this.mas[0][1]=='o')&&(this.mas[0][2]=='o')){
            return true;
        }else if((this.mas[1][0]=='o')&&(this.mas[1][1]=='o')&&(this.mas[1][2]=='o')){
            return true;
        }else if((this.mas[2][0]=='o')&&(this.mas[2][1]=='o')&&(this.mas[2][2]=='o')){
            return true;
        }else if((this.mas[0][0]=='o')&&(this.mas[1][0]=='o')&&(this.mas[2][0]=='o')){
            return true;
        }else if((this.mas[0][1]=='o')&&(this.mas[1][1]=='o')&&(this.mas[2][1]=='o')){
            return true;
        }else if((this.mas[0][2]=='o')&&(this.mas[1][2]=='o')&&(this.mas[2][2]=='o')){
            return true;
        }else if((this.mas[0][0]=='o')&&(this.mas[1][1]=='o')&&(this.mas[2][2]=='o')){
            return true;
        }else if((this.mas[2][0]=='o')&&(this.mas[1][1]=='o')&&(this.mas[0][2]=='o')){
            return true;
        }else if((this.mas[0][0]=='x')&&(this.mas[0][1]=='x')&&(this.mas[0][2]=='x')){
            return true;
        }else if((this.mas[1][0]=='x')&&(this.mas[1][1]=='x')&&(this.mas[1][2]=='x')){
            return true;
        }else if((this.mas[2][0]=='x')&&(this.mas[2][1]=='x')&&(this.mas[2][2]=='x')){
            return true;
        }else if((this.mas[0][0]=='x')&&(this.mas[1][0]=='x')&&(this.mas[2][0]=='x')){
            return true;
        }else if((this.mas[0][1]=='x')&&(this.mas[1][1]=='x')&&(this.mas[2][1]=='x')){
            return true;
        }else if((this.mas[0][2]=='x')&&(this.mas[1][2]=='x')&&(this.mas[2][2]=='x')){
            return true;
        }else if((this.mas[0][0]=='x')&&(this.mas[1][1]=='x')&&(this.mas[2][2]=='x')){
            return true;
        }else if((this.mas[2][0]=='x')&&(this.mas[1][1]=='x')&&(this.mas[0][2]=='x')){
            return true;
        }else if((this.mas[0][0]!=null)&&(this.mas[0][1]!=null)&&(this.mas[0][2]!=null)&&
        (this.mas[1][0]!=null)&&(this.mas[1][1]!=null)&&(this.mas[1][2]!=null)&&
        (this.mas[2][0]!=null)&&(this.mas[2][1]!=null)&&(this.mas[2][2]!=null)){
            return true;
        }else{
            return false;
        } 
    }

    getWinner() {
    //should return winner symbol (x or o) or null if there is no winner yet
        if((this.mas[0][0]=='o')&&(this.mas[0][1]=='o')&&(this.mas[0][2]=='o')){
            return "o";
        }else if((this.mas[1][0]=='o')&&(this.mas[1][1]=='o')&&(this.mas[1][2]=='o')){
            return "o";
        }else if((this.mas[2][0]=='o')&&(this.mas[2][1]=='o')&&(this.mas[2][2]=='o')){
            return "o";
        }else if((this.mas[0][0]=='o')&&(this.mas[1][0]=='o')&&(this.mas[2][0]=='o')){
            return "o";
        }else if((this.mas[0][1]=='o')&&(this.mas[1][1]=='o')&&(this.mas[2][1]=='o')){
            return "o";
        }else if((this.mas[0][2]=='o')&&(this.mas[1][2]=='o')&&(this.mas[2][2]=='o')){
            return "o";
        }else if((this.mas[0][0]=='o')&&(this.mas[1][1]=='o')&&(this.mas[2][2]=='o')){
            return "o";
        }else if((this.mas[2][0]=='o')&&(this.mas[1][1]=='o')&&(this.mas[0][2]=='o')){
            return "o";
        }else if((this.mas[0][0]=='x')&&(this.mas[0][1]=='x')&&(this.mas[0][2]=='x')){
            return "x";
        }else if((this.mas[1][0]=='x')&&(this.mas[1][1]=='x')&&(this.mas[1][2]=='x')){
            return "x";
        }else if((this.mas[2][0]=='x')&&(this.mas[2][1]=='x')&&(this.mas[2][2]=='x')){
            return "x";
        }else if((this.mas[0][0]=='x')&&(this.mas[1][0]=='x')&&(this.mas[2][0]=='x')){
            return "x";
        }else if((this.mas[0][1]=='x')&&(this.mas[1][1]=='x')&&(this.mas[2][1]=='x')){
            return "x";
        }else if((this.mas[0][2]=='x')&&(this.mas[1][2]=='x')&&(this.mas[2][2]=='x')){
            return "x";
        }else if((this.mas[0][0]=='x')&&(this.mas[1][1]=='x')&&(this.mas[2][2]=='x')){
            return "x";
        }else if((this.mas[2][0]=='x')&&(this.mas[1][1]=='x')&&(this.mas[0][2]=='x')){
            return "x";
        }else{
            return null;
        } 
    }

    noMoreTurns() {
    //should true if game field is full and false otherwise
    if((this.mas[0][0]!=null)&&(this.mas[0][1]!=null)&&(this.mas[0][2]!=null)&&
        (this.mas[1][0]!=null)&&(this.mas[1][1]!=null)&&(this.mas[1][2]!=null)&&
        (this.mas[2][0]!=null)&&(this.mas[2][1]!=null)&&(this.mas[2][2]!=null)){
        return true;
    }else{
        return false;
    }
    }

    isDraw() {
    //should return true if there is no more turns and no winner
    if((this.mas[0][0]!=null)&&(this.mas[0][1]!=null)&&(this.mas[0][2]!=null)&&
        (this.mas[1][0]!=null)&&(this.mas[1][1]!=null)&&(this.mas[1][2]!=null)&&
        (this.mas[2][0]!=null)&&(this.mas[2][1]!=null)&&(this.mas[2][2]!=null)){
            
            if((this.mas[0][0]=='o')&&(this.mas[0][1]=='o')&&(this.mas[0][2]=='o')){
                return false;
            }
            if((this.mas[1][0]=='o')&&(this.mas[1][1]=='o')&&(this.mas[1][2]=='o')){
                return false;
            }
            if((this.mas[2][0]=='o')&&(this.mas[2][1]=='o')&&(this.mas[2][2]=='o')){
                return false;
            }
            if((this.mas[0][0]=='o')&&(this.mas[1][0]=='o')&&(this.mas[2][0]=='o')){
                return false;
            }
            if((this.mas[0][1]=='o')&&(this.mas[1][1]=='o')&&(this.mas[2][1]=='o')){
                return false;
            }
            if((this.mas[0][2]=='o')&&(this.mas[1][2]=='o')&&(this.mas[2][2]=='o')){
                return false;
            }
            if((this.mas[0][0]=='o')&&(this.mas[1][1]=='o')&&(this.mas[2][2]=='o')){
                return false;
            }
            if((this.mas[2][0]=='o')&&(this.mas[1][1]=='o')&&(this.mas[0][2]=='o')){
                return false;
            }
            
            if((this.mas[0][0]=='x')&&(this.mas[0][1]=='x')&&(this.mas[0][2]=='x')){
                return false;
            }
            if((this.mas[1][0]=='x')&&(this.mas[1][1]=='x')&&(this.mas[1][2]=='x')){
                return false;
            }
            if((this.mas[2][0]=='x')&&(this.mas[2][1]=='x')&&(this.mas[2][2]=='x')){
                return false;
            }
            if((this.mas[0][0]=='x')&&(this.mas[1][0]=='x')&&(this.mas[2][0]=='x')){
                return false;
            }
            if((this.mas[0][1]=='x')&&(this.mas[1][1]=='x')&&(this.mas[2][1]=='x')){
                return false;
            }
            if((this.mas[0][2]=='x')&&(this.mas[1][2]=='x')&&(this.mas[2][2]=='x')){
                return false;
            }
            if((this.mas[0][0]=='x')&&(this.mas[1][1]=='x')&&(this.mas[2][2]=='x')){
                return false;
            }
            if((this.mas[2][0]=='x')&&(this.mas[1][1]=='x')&&(this.mas[0][2]=='x')){
                return false;
            }
        return true;
    }else {
        return false;
        }        
    }

    getFieldValue(rowIndex, colIndex) {
    //should return matrix[row][col] value (if any) or null
    return this.mas[rowIndex][colIndex];
    }
}

module.exports = TicTacToe;
