let monitor = document.querySelector('#counter');
let completeMessage = document.querySelector('#completeMessage');
let timelag;
let finishNumber = 107941;
let countSpeed = 0.05;

for(let i = 0; i<=finishNumber; i++) {
    timelag = i * countSpeed;

    setTimeout(()=>{
        monitor.innerHTML = i;
    }, timelag);
}

setTimeout(()=>{
    completeMessage.innerHTML = 'Count reached ' + finishNumber;
}, timelag + 100);