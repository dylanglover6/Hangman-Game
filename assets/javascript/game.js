var dogBreedArr = ["labrador", "pitbull", "chihuahua", "boxer", "yorkie", "beagle", "bulldog", "poodle", "dachshund", "pug"];
//chooses random word
var randomWord = dogBreedArr[Math.floor(Math.random() * dogBreedArr.length)];
function newWord(){
    randomWord = dogBreedArr[Math.floor(Math.random() * dogBreedArr.length)];
};
var s;
var count = 0;
var winCounter = 0;
var lossCounter = 0;
// array to store guesses
var answerArray = [];

//fill array with underscores
function startUp()
{
    for (var i = 0; i < randomWord.length; i++)
    {
        
        answerArray[i] = "_";
    }
    
    s = answerArray.join(" ");
    document.getElementById ("answer").innerHTML = s;
    
};
//function to convert user's keystroke to guess
document.onkeyup = function(event) {
    var userGuess = event.key;

        for (var i = 0; i < randomWord.length; i++)
        {
            if (randomWord[i] === userGuess)
            {
                answerArray[i] = userGuess; 
            }
            
        };

    //guess counter
   // (tried to include this as an else statement in the for loop, but it would add up to 9 times because of the loop.)
        {
        count++
        var pawCount = document.getElementById("paw" +count);   
        pawCount.style.opacity = "0.3";
        }

    //win function
    if (randomWord === answerArray.join(""))
        {
            //(having issues with returning a different word after win/lose)
            //newWord();
            winCounter++;
            //winCounter only goes up after you start next game
            count=0;
            startUp();
            document.getElementById("guesses").innerHTML = "";
            
            var freshPaws = document.getElementsByClassName("paw");
                for (var i = 0; i < freshPaws.length; i++)
                {
                    freshPaws[i].style.opacity = 1;   
                };
        };
    
    //loss function
    if (count === 10)
        {
            lossCounter++;
            startUp();
            count=0;
            document.getElementById("guesses").innerHTML = "";
            var freshPaws = document.getElementsByClassName("paw");
            for (var i = 0; i < freshPaws.length; i++)
            {
                freshPaws[i].style.opacity = 1;   
            };
        }   


        
    //document adjustments
        document.getElementById("answer").innerHTML = answerArray.join(" ");
        document.getElementById("guesses").innerHTML += userGuess;
        document.getElementById("wins").innerHTML = winCounter;
        document.getElementById("losses").innerHTML = lossCounter;


   
}