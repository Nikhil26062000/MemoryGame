let cardsArray = [
    {
        'name':'css',
        'img':'https://www.shutterstock.com/image-illustration/css-code-on-dark-background-260nw-1893752428.jpg',
    },
    {
        'name':'HTML',
        'img':'https://www.freecodecamp.org/news/content/images/2021/08/html.png',
    },
    {
        'name':'jQuery',
        'img':'https://4.bp.blogspot.com/-J6yPcDCmk5w/VOsya5JPDiI/AAAAAAAAChA/V3kcmDdbmpQ/w1200-h630-p-k-no-nu/jQuery%2BInterview%2BQuestions%2Band%2BAnswers.png',
    },
    {
        'name':'JS',
        'img':'https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png',
    },
    {
        'name':'Node',
        'img':'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReWigObCg7ZtupjsFWb3zvIE0yPWwf9xN6ErcvYSxjumgK2rLDaDxKCZN8uWtrOqsvhO4&usqp=CAU',
    },
    {
        'name':'Python',
        'img':'https://www.softwaretestinghelp.com/wp-content/qa/uploads/2020/12/Python-Programming.png',
    }

];

const parentDiv = document.querySelector('#card-section');
let clickCount=0;
let firstCard="";
let secondCard="";
let temp=0;


//Styling the card which is matched by 2 clicks
const card_matches = () => {
    let card_selected = document.querySelectorAll('.card_selected');

    card_selected.forEach((curelm)=>{
        curelm.classList.add('card_match');
    })
    temp+=2;
    if(temp ===12)
    {
        alert("Hurrah 👍 You Won the Game .");
        alert("Please refresh the browser to play Again");
       
    }
    
}

//Step 7 Reset function to restart the game
const resetGame = () => {
    firstCard="";
    secondCard = "";
    clickCount = 0;

    let card_selected = document.querySelectorAll('.card_selected');
    card_selected.forEach((curelm)=>{
        curelm.classList.remove('card_selected');
    })
} 

// Step 4
parentDiv.addEventListener('click', (event) =>{
    let curCard = event.target;

    if(curCard.id==='card-section'){
        return false;
    }

  
    if(clickCount<2){
        clickCount++;
       if(clickCount ===1){
        firstCard = curCard.parentNode.dataset.name;
        curCard.parentNode.classList.add('card_selected');
       }else{
        secondCard = curCard.parentNode.dataset.name;
        curCard.parentNode.classList.add('card_selected');
       }

       if(firstCard !== "" && secondCard !== ""){
        if(firstCard === secondCard){
            
            setTimeout(()=>{
                card_matches();
                resetGame();
            
            
            },1000)
             
        }else{
            setTimeout(()=>{
             resetGame();
            },1000)
        }
       }
    }


   

    
})

//Step-2 Doubling the card
const gameCard = cardsArray.concat(cardsArray);

//Step-3 Shuffle the Cards
let shuffledChild = Array.from(gameCard).sort(()=>0.5-Math.random());

for(let i = 0; i <shuffledChild.length;i++){

    const childDiv = document.createElement('div');
    childDiv.classList.add('card');
    childDiv.dataset.name = shuffledChild[i].name;
    // childDiv.style.backgroundImage = `url(${shuffledChild[i].img})`;

    let front_div = document.createElement('div');
    front_div.classList.add('front-card');

    let back_div = document.createElement('div');
    back_div.classList.add('back-card');
    back_div.style.backgroundImage = `url(${shuffledChild[i].img})`;

    parentDiv.append(childDiv);
    childDiv.append(front_div);
    childDiv.append(back_div);
}