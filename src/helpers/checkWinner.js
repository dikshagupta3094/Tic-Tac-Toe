
function isWinner(Board,symbol){
    if(Board[0]==Board[1]&&Board[1]==Board[2]&&Board[2]==symbol) return symbol
    else if(Board[3]==Board[4]&&Board[4]==Board[5]&&Board[5]==symbol) return symbol
    else if(Board[6]==Board[7]&&Board[7]==Board[8]&&Board[8]==symbol) return symbol
    else if(Board[0]==Board[3]&&Board[3]==Board[6]&&Board[6]==symbol) return symbol
    else if(Board[1]==Board[4]&&Board[4]==Board[7]&&Board[7]==symbol) return symbol
    else if(Board[2]==Board[5]&&Board[5]==Board[8]&&Board[8]==symbol) return symbol
    else if(Board[0]==Board[4]&&Board[4]==Board[8]&&Board[8]==symbol) return symbol
    else if(Board[2]==Board[4]&&Board[4]==Board[6]&&Board[6]==symbol) return symbol

    return "";
}

export default isWinner