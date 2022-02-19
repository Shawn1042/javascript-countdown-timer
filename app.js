// setting timer to 20 minutes
const startTiming = 20

// repesents converting time into seconds
let time = startTiming * 60

// My countdown timer is not under this count variable
let count = document.getElementById("countdownTimer")

// update time every second
setInterval(updateTimer,1000)
// made a function to update the timer
function updateTimer(){
    
    const minutes = Math.floor(time/60)
    // converts time to minutes and rounds a number DOWN(not up) to the nearest integer
    let seconds = time % 60

    seconds = seconds < 10 ? "0" + seconds : seconds
        // condition(if) ?  do this if true:(or) do that (if false) 
    count.innerHTML = `${minutes}:${seconds}`
    time--
}
