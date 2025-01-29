function dateTime(){
  let countDownDate = new Date(document.getElementById("date").value).getTime();

let x = setInterval(()=>{
    let now = new Date().getTime();
    let distance = countDownDate - now ;
    let days = document.getElementById("dd");
    let hours = document.getElementById("hh");
    let minutes = document.getElementById("mm");
    let seconds = document.getElementById("ss");

    let d =0;
    let h=0;
    let m=0;
    let s=0;
    

     d = Math.floor(distance / (1000 * 60 * 60 * 24));
     h = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
     m =  Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
     s = Math.floor((distance % (1000 * 60)) / 1000);

    days.innerHTML = d;
    hours.innerHTML = h;
    minutes.innerHTML = m;
    seconds.innerHTML = s;

    if (distance < 0) {
        clearInterval(x);
        document.getElementById("demo").innerHTML = "EXPIRED";
      }
}, 1000);
}