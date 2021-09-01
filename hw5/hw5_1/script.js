'use strict'

const chessboard = {
    board: document.getElementById('chessboard'),

    getBoard() {
        const row = [0, 1, 2, 3, 4, 5, 6, 7, 8, 0];
        const column = [0, 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 0];

        for (let i = 0; i < row.length; i++) {
            const tr = document.createElement('tr');
            this.board.appendChild(tr);

            for (let j = 0; j < column.length; j++) {
                const cell = document.createElement('td');
                cell.style.backgroundColor = ((i + j) % 2 == 0) ? '#34210D' : '#EFE8D5';
                tr.appendChild(cell);

                if (row[i] === 0 || column[j] === 0) {
                    cell.style.backgroundColor = '#845422';
                    cell.style.color = '#EFE8D5';
                }

                if (row[i] === 0 && column[j] !== 0) {
                    cell.innerHTML = column[j];
                }
                else if (row[i] !== 0 && column[j] === 0) {
                    cell.innerHTML = row[i];
                }
            }
        }
    }
}

chessboard.getBoard();

console.log(chessboard.board);
