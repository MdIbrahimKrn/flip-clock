const secondsTens = document.querySelector("[data-seconds-tens]")
const secondsOnes = document.querySelector("[data-seconds-ones]")
const minutesTens = document.querySelector("[data-minutes-tens]")
const minutesOnes = document.querySelector("[data-minutes-ones]")
const hoursTens = document.querySelector("[data-hours-tens]")
const hoursOnes = document.querySelector("[data-hours-ones]")

flip()
setInterval(flip,1000);

function flip(){
    const date = new Date();
    const seconds = date.getSeconds();
    const minutes = date.getMinutes();
    const hours = date.getHours() % 12;

    flipAll(secondsTens,secondsTens.dataset["currentNumber"] ,Math.floor(seconds/10))
    flipAll(secondsOnes,secondsOnes.dataset["currentNumber"] ,Math.floor(seconds%10))
    flipAll(minutesTens,minutesTens.dataset["currentNumber"] ,Math.floor(minutes/10))
    flipAll(minutesOnes,minutesOnes.dataset["currentNumber"] ,Math.floor(minutes%10))
    flipAll(hoursTens,hoursTens.dataset["currentNumber"] ,Math.floor(hours/10)) 
    flipAll(hoursOnes,hoursOnes.dataset["currentNumber"] ,Math.floor(hours%10))

}

function flipAll(container,curNum,newNum){

    if(parseInt(curNum)===newNum){return};

    const card = container.querySelector(".card");
    const flipCard = container.querySelector(".digit")
    let frontTop = flipCard.querySelector("[data-front-top]")
    let backBottom = flipCard.querySelector("[data-back-bottom]")
   
    frontTop.innerHTML = curNum;
    flipCard.dataset["digitBefore"] = curNum;
    flipCard.dataset["digitAfter"] = newNum;
    backBottom.innerHTML = newNum
    container.dataset["currentNumber"] = newNum;

    card.classList.add("flipped")

    card.addEventListener("animationend",()=>{

        frontTop.innerHTML = newNum;
        flipCard.dataset["digitBefore"] = newNum;
        card.classList.remove("flipped")
    })
}
