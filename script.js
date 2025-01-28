let countDownDate = new Date("Jan 1, 2026 00:00:00").getTime();

let x = setInterval(()=>{
    let now = new Date().getTime();
    let distance = countDownDate - now ;
    let days = document.getElementById("dd");
    let hours = document.getElementById("hh");
    let minutes = document.getElementById("mm");
    let seconds = document.getElementById("ss");

    let d = Math.floor(distance / (1000 * 60 * 60 * 24));
    let h = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let m =  Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let s = Math.floor((distance % (1000 * 60)) / 1000);

    days.innerHTML = d;
    hours.innerHTML = h;
    minutes.innerHTML = m;
    seconds.innerHTML = s;

    if (distance < 0) {
        clearInterval(x);
        document.getElementById("demo").innerHTML = "EXPIRED";
      }
}, 1000);