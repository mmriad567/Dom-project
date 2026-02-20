let hour = document.querySelector(".hr");
let minute = document.querySelector(".min");
let second = document.querySelector(".sec");

setInterval(() => {
  let now = new Date();
  let hr = now.getHours();
  let min = now.getMinutes();
  let sec = now.getSeconds();

  let hourCal = hr * 30 + min / 2;
  let minuteCal=min*6;
  let secondCal=sec*6;

   hour.style.transform=`rotate(${hourCal}deg)`
   minute.style.transform=`rotate(${minuteCal}deg)`
   second.style.transform=`rotate(${secondCal}deg)`
}, 1000);
