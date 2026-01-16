let gameseq = [];
let userseq = [];
let started = false;
let level = 0;
let btns = ["yellow", "red", "purple", "green"];

let h2 = document.querySelector("h3");
let btn = document.querySelector("button");

document.addEventListener("keypress", function () {
    if (started == false) {
        console.log("Game started");
        started = true;
        levelup();
    }

}
);
function gameflash(btn) {
    btn.classList.add("flash");
    setTimeout(function () {
        btn.classList.remove("flash")
    }, 150);
}
function userflash(btn) {
    btn.classList.add("userflash");
    setTimeout(function () {
        btn.classList.remove("userflash")
    }, 150);
}
function levelup() {
    userseq=[];
    level++;
    h2.innerText = `level${level}`;
    let randindx = Math.floor(Math.random() * btns.length);
    let randcolor = btns[randindx];
    let randbtn = document.querySelector(`.${randcolor}`)
    gameseq.push(randcolor);
    console.log(gameseq);


    gameflash(randbtn);
}
function checkans(idx) {
    // console.log("curr level", level);
    // let idx = level - 1;
    if (userseq[idx] === gameseq[idx]) {
      if(userseq.length==gameseq.length){
        //levelup();
        setTimeout(levelup,1000);
      }
    } else {
        //h2.innerText = `game end! press any key to start`;
         h2.innerHTML = `Game Over! Your score was <b>${level}</b> <br> Press any Key to Start.`;
      
        reset();
    }
}
function btnpress() {
    let btn = this;
    userflash(btn);
    let userclr = btn.getAttribute("id");
    userseq.push(userclr);
    console.log(userseq);
    checkans(userseq.length-1);
}
let allbtns = document.querySelectorAll(".btn");
for (btn of allbtns) {
    btn.addEventListener("click", btnpress);
}
function reset() {
    started = false;
    gameseq = [];
    userseq = [];
    level = 0;
}
