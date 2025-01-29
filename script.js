function dateTime(){
  
  let countDownDate = new Date(document.getElementById("date").value).getTime();
  document.getElementById("date").style.display="none";
  document.getElementById("submit").style.display="none";
  document.getElementById("reset").style.display="inline";    
  
let x = setInterval(()=>{
    let now = new Date().getTime();
    let distance = countDownDate - now ;
    let days = document.getElementById("dd");
    let hours = document.getElementById("hh");
    let minutes = document.getElementById("mm");
    let seconds = document.getElementById("ss");

  

    let  d = Math.floor(distance / (1000 * 60 * 60 * 24));
    let  h = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let  m =  Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let  s = Math.floor((distance % (1000 * 60)) / 1000);

    days.innerHTML = d;
    hours.innerHTML = h;
    minutes.innerHTML = m;
    seconds.innerHTML = s;

    if (distance <= 0) {
        clearInterval(x);
        document.getElementById("dd").innerHTML = "EX";
        document.getElementById("hh").innerHTML = "PI";
        document.getElementById("mm").innerHTML = "RE";
        document.getElementById("ss").innerHTML = "D";
        console.log("expired");
      }
}, 1000);


// d =0;
// h=0;
// m=0;
// s=0;

}

function pageReload(){
  location.reload();
}