const container = document.querySelector('.container');
const startbtn = document.querySelector('.container .start');
const pausebtn = document.querySelector('.container .pause');
const resetbtn = document.querySelector('.container .reset');

let pause = false;

let pause_time = 0;
let start_time = 0;

function time_reset(){
    start_time = 0;
    pause_time = 0;
    document.querySelector('.time').innerText = '00:00:00.00'
}

function time_pause(){
    pause = true;
}

// timer start()
function timer_start(){
    pause = false;
    // 정지된 값이 없을 때
    if (!pause_time){
        start_time = Date.now();
    } else { // 정지된 값이 있을 때
        start_time += Date.now() - pause_time;
    }

    const start = setInterval(function(){
        if(!pause){
            const now_time = Date.now() 
            const time_between = new Date(now_time - start_time);

            const hour = time_between.getHours();
            const minute = time_between.getUTCMinutes();
            const second = time_between.getUTCSeconds();
            const milsec = Math.floor(time_between.getUTCMilliseconds() / 10);

            document.querySelector('.container .time').innerText = (`${String(hour).padStart(2,'0')}:${String(minute).padStart(2,'0')}:${String(second).padStart(2,'0')}.${String(milsec).padStart(2,'0')}`);
        } else {
            clearInterval(start);
            pause_time = Date.now();
        }
    }, 10);
}


startbtn.addEventListener('click', timer_start);
pausebtn.addEventListener('click', time_pause);
resetbtn.addEventListener('click', time_reset);


