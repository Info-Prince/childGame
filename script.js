// create array of option
const chosenArr = ['Rock','Paper','Scissors'];

// function to choose random element from chosenArr
function chooseRandom() {
    let index = Math.floor(Math.random()*chosenArr.length);
    let currElem = chosenArr[index];
    // console.log(currElem);

    return currElem;
}

//function declaration to hide element
function hideElement (event) {
    const element = event.target;
    element.style = `   
        color: #f0f8ff;
    `
}

// function declaration to show element 
function showElement () {
    chooseBtn[0].style.color = "black";
    chooseBtn[1].style.color = "black";
}

//! creating resultArea for showing in result


//function of showing winner 
function showWinner (message, isDraw, source) {
     
    //? append all result element into div
    const divElem = document.getElementById('resultArea');

    const mainResultImg = document.createElement('img');
    mainResultImg.setAttribute('id', 'resultImg')
    mainResultImg.setAttribute('src', `${source}`);
    
    if(isDraw) {
        //create para and append para into div element
        const para = document.createElement('p');
        para.setAttribute('id', 'resultText');
        para.innerHTML = `${message}`;
        divElem.appendChild(para);
        return;
    }
    else {
        //create figure and add image into it.
        const figure = document.createElement('figure');
        figure.setAttribute('id', 'winner-image-wrapper');
        figure.appendChild(mainResultImg);
        const mainWinnerImg = document.createElement('img');
        mainWinnerImg.setAttribute('id', 'winner-img');
        mainWinnerImg.setAttribute('src', './winner image.png');
        figure.appendChild(mainWinnerImg);
        
        //Append figure into div element
        divElem.appendChild(figure);
        
        //create para and append para into div element
        const para = document.createElement('p');
        para.setAttribute('id', 'resultText');
        para.innerHTML = `${message}`;
        divElem.appendChild(para);
        
        return;
    }

}

// choose option function
const chooseOption = (event) => {
    // console.log(event.target.className);
    
    if(event.target.className === 'choose-btn') {
        const element = event.target;
        element.textContent = chooseRandom();
        hideElement(event);  
        
        // let imageSrc = event.target.parentNode.firstElementChild.src;
        // mainResultImg.setAttribute('src', `${imageSrc}`);       
    }

}


const player = document.getElementsByClassName('player-details');
console.log(Array.from(player))
player[0].addEventListener('click', chooseOption);

const chooseBtn = document.getElementsByClassName('choose-btn');
Array.from(chooseBtn);

// showResult function will be used as call back function.
const showResult = (event) => {
    if((chooseBtn[0].innerHTML != 'Choose') && (chooseBtn[1].innerHTML != 'Choose')) {
        
        //? player1 winner
        if( (chooseBtn[0].innerHTML === 'Rock' && chooseBtn[1].innerHTML === 'Scissors') || 
            (chooseBtn[0].innerHTML === 'Paper' && chooseBtn[1].innerHTML === 'Rock') || 
            (chooseBtn[0].innerHTML === 'Scissors' && chooseBtn[1].innerHTML === 'Paper')) {

            showWinner('Player1 Winner', false, `./player 1.png`);
            showElement();

            //remove all events
            result.removeEventListener('click', showResult)
            player[0].removeEventListener('click', chooseOption);
            return;
        }

        //? Player2 winner
        if( (chooseBtn[1].innerHTML === 'Rock' && chooseBtn[0].innerHTML === 'Scissors') || 
            (chooseBtn[1].innerHTML === 'Paper' && chooseBtn[0].innerHTML === 'Rock') || 
            (chooseBtn[1].innerHTML === 'Scissors' && chooseBtn[0].innerHTML === 'Paper')) {
            
            showWinner('Player2 winner', false, `./player 2.png`);
            showElement();

            //remove all events
            result.removeEventListener('click', showResult)
            player[0].removeEventListener('click', chooseOption);
            return;
        }

        //? Draw condition
        if(chooseBtn[0].innerHTML === chooseBtn[1].innerHTML) {

            showWinner('Match Draw', true, `draw source image`);
            showElement();

            //remove all events
            result.removeEventListener('click', showResult)
            player[0].removeEventListener('click', chooseOption);
            return;
        }

    }
}


const result = document.getElementById('btn');
result.addEventListener('click', showResult);


// Restart Function
const restart = document.getElementById('restart');
restart.addEventListener('click', (event) => {
  
    player[0].addEventListener('click', chooseOption);
    chooseBtn[0].innerHTML = 'Choose';
    chooseBtn[1].innerHTML = 'Choose';
    showElement();

    document.getElementById('resultArea').innerHTML = "";
    // const result = document.getElementById('btn');
    result.addEventListener('click', showResult);
})
