const allBlocks = document.querySelectorAll('.block')
const btn = document.querySelector('#btn')
const header = document.querySelector('header')
const modes = document.querySelectorAll('.mode')
const container = document.querySelector('#container')
const chngMode = document.querySelector('#change-mode')

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
let O_turn = false
let winnerFlag = false
let f_1v1 = false
let f_1vBot = false

const emptyBlocksArr = []

container.style.display = 'none'
btn.style.display = 'none'
chngMode.style.display = 'none'

chngMode.addEventListener('click', () => {
    location.reload()
})

chooseMode();


btn.addEventListener('click', (e) => {
    for (let block of allBlocks) {
        X_turn = true
        O_turn = false
        block.innerText = ''
        header.innerText = 'X-O GAME'
        header.style.color = '#ffff'
        winnerFlag = false

    }
    if (f_1v1 === true) {
        play_1v1();
    } else if (f_1vBot === true) {
        play_1vBot()
    }

})









/********************************************************************************************************************************************************************/


function chooseMode() {
    for (let mode of modes) {
        mode.addEventListener('click', (e) => {
            if (mode.innerText === '1 vs 1') {
                f_1v1 = true;
                f_1vBot = false;
                container.style.display = 'grid'
                modes[0].style.display = 'none'
                modes[1].style.display = 'none'
                btn.style.display = 'block'
                chngMode.style.display = 'block'
                play_1v1()
            } else {
                f_1vBot = true
                f_1v1 = false
                container.style.display = 'grid'
                modes[0].style.display = 'none'
                modes[1].style.display = 'none'
                btn.style.display = 'block'
                chngMode.style.display = 'block'
                play_1vBot()
            }
        })
    }
}

function play_1v1() {

    for (let block of allBlocks) {
        block.addEventListener('click', (e) => {
            if (!X_turn && block.innerText === '' && winnerFlag === false) {
                block.innerText = 'O'
                X_turn = true
                O_turn = false
            } else if (!O_turn && block.innerText === '' && winnerFlag === false) {
                block.innerText = 'X'
                X_turn = false
                O_turn = true
            }
            checkWinner();
        }, )
    }
}


function play_1vBot() {
    let counter = 0;
    let randomB = randomBlock()
    for (let block of allBlocks) {
        block.addEventListener('click', (e) => {

            if (block.innerText === '' && winnerFlag === false) {
                block.innerText = 'X'
                counter = 0;
                checkWinner();
                while (1 && winnerFlag === false) {

                    if (allBlocks[randomB].innerText === '') {
                        allBlocks[randomB].innerText = 'O'

                        break;
                    } else if (counter === 3000) {

                        break;
                    }
                    randomB = randomBlock()
                    counter++;

                }

            }

            checkWinner();
        }, )
    }

}

let randomBlock = function() {

    return Math.floor(Math.random() * 9);
}



function checkWinner() {
    if (b1.innerText === 'X' && b2.innerText === 'X' && b3.innerText === 'X') {
        winnerFlag = true;
        header.textContent = 'CONGRATS "X"!'
        header.style.color = '#0ac94d'
    } else if (b1.innerText === 'O' && b2.innerText === 'O' && b3.innerText === 'O') {
        winnerFlag = true;
        header.textContent = 'CONGRATS "O"!'
        header.style.color = '#0ac94d'
    } else if (b1.innerText === 'X' && b4.innerText === 'X' && b7.innerText === 'X') {
        winnerFlag = true;
        header.textContent = 'CONGRATS "X"!'
        header.style.color = '#0ac94d'
    } else if (b1.innerText === 'O' && b4.innerText === 'O' && b7.innerText === 'O') {
        winnerFlag = true;
        header.textContent = 'CONGRATS "O"!'
        header.style.color = '#0ac94d'
    } else if (b1.innerText === 'X' && b5.innerText === 'X' && b9.innerText === 'X') {
        winnerFlag = true;
        header.textContent = 'CONGRATS "X"!'
        header.style.color = '#0ac94d'
    } else if (b1.innerText === 'O' && b5.innerText === 'O' && b9.innerText === 'O') {
        winnerFlag = true;
        header.textContent = 'CONGRATS "O"!'
        header.style.color = '#0ac94d'
    } else if (b2.innerText === 'X' && b5.innerText === 'X' && b8.innerText === 'X') {
        winnerFlag = true;
        header.textContent = 'CONGRATS "X"!'
        header.style.color = '#0ac94d'
    } else if (b2.innerText === 'O' && b5.innerText === 'O' && b8.innerText === 'O') {
        winnerFlag = true;
        header.textContent = 'CONGRATS "O"!'
        header.style.color = '#0ac94d'
    } else if (b3.innerText === 'X' && b6.innerText === 'X' && b9.innerText === 'X') {
        winnerFlag = true;
        header.textContent = 'CONGRATS "X"!'
        header.style.color = '#0ac94d'
    } else if (b3.innerText === 'O' && b6.innerText === 'O' && b9.innerText === 'O') {
        winnerFlag = true;
        header.textContent = 'CONGRATS "O"!'
        header.style.color = '#0ac94d'
    } else if (b3.innerText === 'X' && b5.innerText === 'X' && b7.innerText === 'X') {
        winnerFlag = true;
        header.textContent = 'CONGRATS "X"!'
        header.style.color = '#0ac94d'
    } else if (b3.innerText === 'O' && b5.innerText === 'O' && b7.innerText === 'O') {
        winnerFlag = true;
        header.textContent = 'CONGRATS "O"!'
        header.style.color = '#0ac94d'
    } else if (b4.innerText === 'X' && b5.innerText === 'X' && b6.innerText === 'X') {
        winnerFlag = true;
        header.textContent = 'CONGRATS "X"!'
        header.style.color = '#0ac94d'
    } else if (b4.innerText === 'O' && b5.innerText === 'O' && b6.innerText === 'O') {
        winnerFlag = true;
        header.textContent = 'CONGRATS "O"!'
        header.style.color = '#0ac94d'
    } else if (b7.innerText === 'X' && b8.innerText === 'X' && b9.innerText === 'X') {
        winnerFlag = true;
        header.textContent = 'CONGRATS "X"!'
        header.style.color = '#0ac94d'
    } else if (b7.innerText === 'O' && b8.innerText === 'O' && b9.innerText === 'O') {
        winnerFlag = true;
        header.textContent = 'CONGRATS "O"!'
        header.style.color = '#0ac94d'
    }


}