var temp = setInterval(function(){
    var hours = Number(document.getElementById("hours").innerText)
    var minutes = Number(document.getElementById("minutes").innerText)
    var seconds = Number(document.getElementById("seconds").innerText)
    if(seconds==00){
        seconds=100;
        if(minutes == 0){
            minutes = 59
            if(hours == 0)
             setOut()
            else{
                hours = hours-1
            }
        }
        else{
            minutes=minutes-1
        }
       }
       else{
           seconds = seconds-1
       }
      
       
       document.getElementById("hours").innerText=hours;
       document.getElementById("minutes").innerText=minutes;
       document.getElementById("seconds").innerText=seconds;
       
},10)

function setOut(){
    clearInterval(temp)
}

let index = 1
setInterval(function(){

if(index==3)
  index = 1
else
{
    document.images[0].src = "img"+index+".jpg"
    index++
}
},500)