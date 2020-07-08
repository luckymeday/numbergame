let guessesRemaining = 5;
let history = [];

function guessNumber() {
    guessesRemaining = guessesRemaining - 1;

    if (guessesRemaining <= 0) {
        document.getElementById('guessesRemaining').innerHTML = 0;
        document.getElementById('resultArea').innerHTML = `Game Over`;
        return;
    } document.getElementById('guessesRemaining').innerHTML = guessesRemaining;

    let userNumber = document.getElementById('guessingArea').value;
    console.log(userNumber, "random:", randomNumber)
    if (userNumber > randomNumber) {
        document.getElementById('resultArea').innerHTML = `Too high with ${userNumber}.<br> ${guessesRemaining - 1} remaining!`
        if (userNumber === history[history.length - 1]) {
            alert("Same number. Try other number")
        }
    } else if (userNumber < randomNumber) {
        document.getElementById('resultArea').innerHTML = `Too low with ${userNumber}.<br> ${guessesRemaining - 1} remaining!`
        if (userNumber === history[history.length - 1]) {
            alert("Same number. Try other number")
        }
    } else if (userNumber == randomNumber) {
        document.getElementById('resultArea').innerHTML = `Correct`
    }
    history.push(userNumber);
    console.log(history);
    document.getElementById('historyArea').innerHTML = `You've tried ${history}`
}


let randomNumber = Math.floor(Math.random() * 100) + 1;
console.log(randomNumber);


let time = 31 // time start from 0
let myTime; // timer will be assign to this variable
function timecounting() {
    myTime = setInterval(() => {
        time = time - 1;

        if (time <= 0) {
            document.getElementById('timecount').innerHTML = 0;
            return;
        } document.getElementById('timecount').innerHTML = time;
    }, 1000)// every 1 second, it will decrease 1 into time variable (computer use millisecond so 1000 is 1 second)
}
timecounting()// fire the timecounting function!!


function reset() {
    guessesRemaining = 5;
    document.getElementById('guessesRemaining').innerHTML = guessesRemaining
    history = []
    document.getElementById('historyArea').innerHTML = history
    document.getElementById('resultArea').innerHTML = ''
    document.getElementById('guessingArea').value = ''
    time = 30
    document.getElementById('timecount').innerHTML = time
    randomNumber = Math.floor(Math.random() * 100 + 1)
    console.log(randomNumber)
}







// 0. generate the random number (set the range 1~100)
//     -> Math.floor(Math.random() * 100) => 0~99, so add +1
// 1. read the number that user type
// 2. compare the user typed number and ramdom number
// 3. if user number is greater > than random numner, show the msg too high
// 4. if user number is smaller < than random numner, show the msg too low
// 5. if user number is as same === as random numner, show the msg correct
// --> Q) then how can we generate the random number at the beginning? -> 0.
// 7. when the user guess, remain chance -1
// 8. when remained chance is 0, then game over

// 9. when the user click the reset button, game should be reset
// 9-1. chance go back to 5(beginning chance)
// 9-2. reset random number
// 9-3. reset history
// 9-4. reset input box
// 9-5. reset result