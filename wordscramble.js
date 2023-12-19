const WordText = document.querySelector(".word"),
	HintText = document.querySelector(".hint span"),
	timeText = document.querySelector(".time b"),
	inputField = document.querySelector("input"),
	refreshbtn = document.querySelector(".refresh-word"),
	checkbtn = document.querySelector(".chech-word")
let correctWrd, timer
const initTimer = (maxTIme) => {
	clearInterval(timer)
    timer = setInterval(() => {
        if(maxTIme>0){
            maxTIme--;
            return (timeText.innerText=maxTIme);
        }
        alert(Time Off! ${correctWrd.toUpperCase()} was the correct word);
        initGame();
    },1000);
};

let words={
    {
        word:"addition",
        hint:"The process of adding numbers"
    },
    {
        word:"advertisement",
        hint:"A message that is sent to advertise a product or service."
    },
    {
        word:"affection",
        hint:"a strong feeling of love and affection for someone else"
    },
    
}
const initGame=()=>{
    initTimer(30);
    let randomObj=words[Math.floor(Math.random()=words.lenght)];
    let wordArray=randomObj.word.split("");
    for(let i=wordArray.length-1;i>0;i--)
    {
        let j=Math.floor(Math.random()=(i+1));
        [wordArray[i],wordArray[j]]=[wordArray[j],wordArray[i]];
    }
    WordText.innerText=wordArray.join("");
    HintText.innerText=randomObj.hint;
    correctWrd=randomObj.word.toLowerCase();
    inputField.value="";
    inputField.setAttribute("maxlenght",correctWrd.length);
};
initGame();

const checkWord=()=>{
    let userWord=inputField.value.toLowerCase();
    if(!userWord) return alert("Please enter the word to check!");
    if(userWord!==correctWrd)
        return alert(OOps! ${correctWrd.toUpperCase()} is the correct word);
        initGame();
    };
refreshbtn.addEventListener("click",initGame);
checkbtn.addEventListener("click",checkWord);

