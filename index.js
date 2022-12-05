let scoreLeftEl = document.getElementById("score_left")
let scoreRightEl= document.getElementById("score_right")



let scoreLeft = 0;
function oneLeft() {
    scoreLeft +=1
    scoreLeftEl.innerText = scoreLeft;
    
}
function twoLeft() {
    scoreLeft +=2
    scoreLeftEl.textContent =scoreLeft;
}
function threeLeft() {
    scoreLeft += 3
    scoreLeftEl.textContent = scoreLeft;
}

let scoreRight = 0
function oneRight() {
    scoreRight +=1
    scoreRightEl.innerText = scoreRight;
    
}
function twoRight() {
    scoreRight +=2
    scoreRightEl.textContent =scoreRight;
}
function threeRight() {
    scoreRight += 3
    scoreRightEl.textContent = scoreRight;
}

function refresh() {
    scoreLeft = 0
    scoreRight = 0
    scoreLeftEl.textContent= scoreLeft;
    scoreRightEl.textContent = scoreRight;
}


