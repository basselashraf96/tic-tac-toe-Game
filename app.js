const allBlocks = document.querySelectorAll('.block')
const btn = document.querySelector('#btn')
const header = document.querySelector('header')

const b1 = document.querySelector('#a')
const b2 = document.querySelector('#b')
const b3 = document.querySelector('#c')
const b4 = document.querySelector('#d')
const b5 = document.querySelector('#e')
const b6 = document.querySelector('#f')
const b7 = document.querySelector('#g')
const b8 = document.querySelector('#h')
const b9 = document.querySelector('#i')

let X_turn = true
let Y_turn = false
let winnerFlag = false

for (let block of allBlocks) {
    block.addEventListener('click', (e) => {
        if (!X_turn && block.innerText === '' && winnerFlag === false) {
            block.innerText = 'O'
            X_turn = true
            Y_turn = false
        } else if (!Y_turn && block.innerText === '' && winnerFlag === false) {
            block.innerText = 'X'
            X_turn = false
            Y_turn = true
        }
        checkWinner();
    }, )
}
for (let block of allBlocks) {

    btn.addEventListener('click', (e) => {
        block.innerText = ''
        header.innerText = 'X-O GAME'
        header.style.color = '#ffff'
        winnerFlag = false
    })
}

function checkWinner() {
    if (b1.innerText === 'X' && b2.innerText === 'X' && b3.innerText === 'X') {
        winnerFlag = true;
        header.innerText = 'CONGRATS "X"!'
        header.style.color = '#0ac94d'
    } else if (b1.innerText === 'O' && b2.innerText === 'O' && b3.innerText === 'O') {
        winnerFlag = true;
        header.innerText = 'CONGRATS "O"!'
        header.style.color = '#0ac94d'
    } else if (b1.innerText === 'X' && b4.innerText === 'X' && b7.innerText === 'X') {
        winnerFlag = true;
        header.innerText = 'CONGRATS "X"!'
        header.style.color = '#0ac94d'
    } else if (b1.innerText === 'O' && b4.innerText === 'O' && b7.innerText === 'O') {
        winnerFlag = true;
        header.innerText = 'CONGRATS "O"!'
        header.style.color = '#0ac94d'
    } else if (b1.innerText === 'X' && b5.innerText === 'X' && b9.innerText === 'X') {
        winnerFlag = true;
        header.innerText = 'CONGRATS "X"!'
        header.style.color = '#0ac94d'
    } else if (b1.innerText === 'O' && b5.innerText === 'O' && b9.innerText === 'O') {
        winnerFlag = true;
        header.innerText = 'CONGRATS "O"!'
        header.style.color = '#0ac94d'
    } else if (b2.innerText === 'X' && b5.innerText === 'X' && b8.innerText === 'X') {
        winnerFlag = true;
        header.innerText = 'CONGRATS "X"!'
        header.style.color = '#0ac94d'
    } else if (b2.innerText === 'O' && b5.innerText === 'O' && b8.innerText === 'O') {
        winnerFlag = true;
        header.innerText = 'CONGRATS "O"!'
        header.style.color = '#0ac94d'
    } else if (b3.innerText === 'X' && b6.innerText === 'X' && b9.innerText === 'X') {
        winnerFlag = true;
        header.innerText = 'CONGRATS "X"!'
        header.style.color = '#0ac94d'
    } else if (b3.innerText === 'O' && b6.innerText === 'O' && b9.innerText === 'O') {
        winnerFlag = true;
        header.innerText = 'CONGRATS "O"!'
        header.style.color = '#0ac94d'
    } else if (b3.innerText === 'X' && b5.innerText === 'X' && b7.innerText === 'X') {
        winnerFlag = true;
        header.innerText = 'CONGRATS "X"!'
        header.style.color = '#0ac94d'
    } else if (b3.innerText === 'O' && b5.innerText === 'O' && b7.innerText === 'O') {
        winnerFlag = true;
        header.innerText = 'CONGRATS "O"!'
        header.style.color = '#0ac94d'
    } else if (b4.innerText === 'X' && b5.innerText === 'X' && b6.innerText === 'X') {
        winnerFlag = true;
        header.innerText = 'CONGRATS "X"!'
        header.style.color = '#0ac94d'
    } else if (b4.innerText === 'O' && b5.innerText === 'O' && b6.innerText === 'O') {
        winnerFlag = true;
        header.innerText = 'CONGRATS "O"!'
        header.style.color = '#0ac94d'
    } else if (b7.innerText === 'X' && b8.innerText === 'X' && b9.innerText === 'X') {
        winnerFlag = true;
        header.innerText = 'CONGRATS "X"!'
        header.style.color = '#0ac94d'
    } else if (b7.innerText === 'O' && b8.innerText === 'O' && b9.innerText === 'O') {
        winnerFlag = true;
        header.innerText = 'CONGRATS "O"!'
        header.style.color = '#0ac94d'
    }


}