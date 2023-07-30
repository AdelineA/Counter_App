const decreasebtn = document.getElementById('decrement');
const incrementbtn = document.getElementById('increment');
const results = document.getElementById('result')


let seconds = 10;

function updateTimer(){
    results.textContent = seconds

}


decreasebtn.addEventListener('click',()=>{
    if(seconds > 0){
        seconds--
        updateTimer()
    }
})

incrementbtn.addEventListener('click',() => {
    seconds++
    updateTimer()
})
