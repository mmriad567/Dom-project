function runningTime(){
    let now=new Date();
    let hours=now.getHours().toString().padStart(2,0);
    let minutes=now.getMinutes().toString().padStart(2,0);
    let second=now.getSeconds().toString().padStart(2,0);

    let timming=`${hours}:${minutes}:${second}`

    document.getElementById('clock').innerText=timming
}

runningTime()

setInterval(runningTime,1000)